const xml2js = require('xml2js');
const nodefn = require('when/node');

const parseString = nodefn.lift(xml2js.parseString);

const CreateUser = (webex, _xml2jsOptions) => {
  let xml2jsOptions = {};
  if (typeof _xml2jsOptions === 'object') {
    xml2jsOptions = _xml2jsOptions;
  }
  const api = {
    method: 'POST',
    xsiType: 'java:com.webex.service.binding.user.CreateUser',
    processRes: res => parseString(res.body, xml2jsOptions),
  };

  return params => webex.makeRequest(api, params);
};

module.exports = CreateUser;
