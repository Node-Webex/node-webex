const request = require('request');
const when = require('when');
const _ = require('lodash');

// inmport api endpoints
const createUser = require('./api/create-user');
const getUser = require('./api/get-user');

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
class WebEx {

  constructor(config) {
    this.config = config;
    this.xsi = this.config.xsi || 'http://www.w3.org/2001/XMLSchema-instance';
    this.xmlns = this.config.xmlns || 'http://www.webex.com/schemas/2002/06/service';
    this.apiUrl = `https://${this.config.securityContext.siteID}.webex.com/WBXService/XMLService`;

    // define api endpoints
    this.createUser = createUser(this);
    this.getUser = getUser(this);
  }

  // generate XML Message
  genXML(xsiType, bodyContent) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <serv:message xmlns:xsi="${this.xsi}"
        xmlns:serv="${this.xmlns}">
        <header>
          <securityContext>
            ${js2xml(this.config.securityContext)}
          </securityContext>
        </header>
        <body>
          <bodyContent xsi:type="${xsiType}">
            ${js2xml(bodyContent)}
          </bodyContent>
        </body>
      </serv:message>`;
    return xml.replace(/[\n\r]+/g, ' ').replace(/\s\s+/g, ' ').replace(/>\s</g, '><');
  }

  makeRequest(api, params) {
    const reqOpts = {
      url: this.apiUrl,
      method: api.method,
      headers: {
        'Content-Type': 'application/xml',
      },
      body: this.genXML(api.xsiType, params),
    };

    // debugging
    console.log('---XML Request---');
    console.log();
    console.log(reqOpts.body);
    console.log();
    console.log('-----------------');
    console.log();
    return when('done'); // remove this line when uncommenting block below...


    // uncomment for prod testing

    // return when.promise((resolve, reject) => {
    //   request(reqOpts, (err, res) => {
    //     if (err) {
    //       reject(err);
    //     } else if (res) {
    //       resolve(api.precessRes(res));
    //     } else {
    //       reject(new Error('response not recieved'));
    //     }
    //   });
    // });
  }

}

module.exports = WebEx;
