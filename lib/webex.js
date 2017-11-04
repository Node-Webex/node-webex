const { EventEmitter } = require('events');
const processors = require('xml2js/lib/processors');
const request = require('request');
const xml2js = require('xml2js');
const nodefn = require('when/node');
const when = require('when');
const _ = require('lodash');

// import api endpoints
const userService = require('./api/user-service');
const historyService = require('./api/history-service');

// function that creates markup for content sections of XML message
const js2xml = (jsObj) => {
  if (typeof jsObj === 'object') {
    // recursive function
    const genXml = (_jsObj) => {
      const keys = _.keys(_jsObj);
      let xml = '';
      _.forEach(keys, (key) => {
        if (typeof _jsObj[key] === 'object') {
          xml += `<${key}>${genXml(_jsObj[key])}</${key}>`;
        } else if (typeof _jsObj[key] === 'string') {
          xml += `<${key}>${_jsObj[key]}</${key}>`;
        }
      });
      return xml;
    };

    return genXml(jsObj);
  }
  return '';
};

// Define class
class WebEx extends EventEmitter {

  constructor(config) {
    super();
    this.config = config;
    this.xsi = this.config.xsi || 'http://www.w3.org/2001/XMLSchema-instance';
    this.xmlns = this.config.xmlns || 'http://www.webex.com/schemas/2002/06/service';
    this.apiUrl = `https://${this.config.siteName}.webex.com/WBXService/XMLService`;

    // promisfy parseString
    this.parseString = nodefn.lift(xml2js.parseString);

    // define api endpoints
    this.user = userService(this);
    this.history = historyService(this);
  }

  // generate XML Message
  genXML(xsiType, params) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <serv:message xmlns:xsi="${this.xsi}"
        xmlns:serv="${this.xmlns}">
        <header>
          <securityContext>
            ${js2xml(this.config)}
          </securityContext>
        </header>
        <body>
          <bodyContent xsi:type="${xsiType}">
            ${js2xml(params)}
          </bodyContent>
        </body>
      </serv:message>`;
    return xml.replace(/[\n\r]+/g, ' ').replace(/\s\s+/g, ' ').replace(/>\s</g, '><');
  }

  processRes(res) {
    const xml2jsOptions = {
      trim: true,
      mergeAttrs: true,
      explicitArray: false,
      tagNameProcessors: [processors.stripPrefix],
      attrNameProcessors: [processors.stripPrefix],
      valueProcessors: [processors.parseNumbers, processors.parseBooleans],
      attrValueProcessors: [processors.parseNumbers, processors.parseBooleans],
    };

    if (_.has(res, 'statusCode')) {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        return this.parseString(res.body, xml2jsOptions)
          .then((bodyObj) => {
            if (_.has(bodyObj, 'message.header.response.result')) {
              const result = _.get(bodyObj, 'message.header.response.result');
              if (_.toLower(result) === 'success' && _.has(bodyObj, 'message.body.bodyContent')) {
                this.emit('response', bodyObj.message.body.bodyContent);
                return when(bodyObj.message.body.bodyContent);
              }
            }
            return when.reject(new Error('invalid response body'));
          });
      }
      const err = new Error(`recieved ${res.statusCode} code in response to request`);
      err.statusCode = res.statusCode;
      return when.reject(err);
    }
    const err = new Error('recieved unknown error in response to request');
    return when.reject(err);
  }

  makeRequest(xsiType, params) {
    const reqOpts = {
      url: this.apiUrl,
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: this.genXML(xsiType, params),
    };

    this.emit('request', reqOpts);

    return when.promise((resolve, reject) => {
      request(reqOpts, (err, res) => {
        if (err) {
          reject(err);
        } else if (res) {
          resolve(this.processRes(res));
        } else {
          reject(new Error('response not recieved'));
        }
      });
    });
  }

}

module.exports = WebEx;
