// Define WebEx UserService API endpoints
const xml2js = require('xml2js');
const nodefn = require('when/node');

const parseString = nodefn.lift(xml2js.parseString);
const xsiTypePrefix = 'java:com.webex.service.binding.user';

const UserService = (webex) => {
  const userService = {
    // CreateUser
    create: (params) => {
      const xml2jsOptions = {};
      const apiOptions = {
        xsiType: `${xsiTypePrefix}.CreateUser`,
        processRes: res => parseString(res.body, xml2jsOptions),
      };

      return webex.makeRequest(apiOptions, params);
    },

    // GetUser
    get: (params) => {
      const xml2jsOptions = {};
      const apiOptions = {
        xsiType: `${xsiTypePrefix}.GetUser`,
        processRes: res => parseString(res.body, xml2jsOptions),
      };

      return webex.makeRequest(apiOptions, params);
    },

    // DelUser
    del: (params) => {},

    // SetUser
    set: (params) => {},

    // UploadPMRImage
    uploadImage: (params) => {},

  };
  return userService;
};

module.exports = UserService;
