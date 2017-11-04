// Define WebEx UserService API endpoints
const xsiTypePrefix = 'java:com.webex.service.binding.user';

const UserService = (webex) => {
  const userService = {
    // CreateUser
    create: (params) => {
      const xsiType = `${xsiTypePrefix}.CreateUser`;
      return webex.makeRequest(xsiType, params);
    },

    // GetUser
    get: (params) => {
      const xsiType = `${xsiTypePrefix}.GetUser`;
      return webex.makeRequest(xsiType, params);
    },

    // DelUser
    del: (params) => {
      const xsiType = `${xsiTypePrefix}.DelUser`;
      return webex.makeRequest(xsiType, params);
    },

    // SetUser
    set: (params) => {
      const xsiType = `${xsiTypePrefix}.SetUser`;
      return webex.makeRequest(xsiType, params);
    },

    // UploadPMRImage
    uploadImagePhoto: {
      base64: (base64ImageBinary) => {
        const params = {
          imageFor: 'Photo',
          imageData: base64ImageBinary,
        };
        const xsiType = `${xsiTypePrefix}.UploadPMRImage`;
        return webex.makeRequest(xsiType, params);
      },
    },

    // UploadPMRImage
    uploadImageHeader: {
      base64: (base64ImageBinary) => {
        const params = {
          imageFor: 'Header',
          imageData: base64ImageBinary,
        };
        const xsiType = `${xsiTypePrefix}.UploadPMRImage`;
        return webex.makeRequest(xsiType, params);
      },
    },

  };
  return userService;
};

module.exports = UserService;
