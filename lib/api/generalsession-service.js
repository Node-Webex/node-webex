// Define WebEx General Session Service API endpoints
// Some of these API calls can provide functionality for several services at once.
// Other API calls simply do not fit clearly into any of the main services.

const xsiTypePrefix = 'java:com.webex.service.binding.ep';

const GeneralSessionService = (webex) => {
  const generalsessionService = {

    // CreateContacts	Creates an entry in the My Contacts list.
    createContacts: (params) => {
      const xsiType = `${xsiTypePrefix}.CreateContacts`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // CreateDistList	Creates a distribution list of contacts.
    createdistList: (params) => {
      const xsiType = `${xsiTypePrefix}.CreateDistList`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // DelRecording	Deletes a recording.
    delRecording: (params) => {
      const xsiType = `${xsiTypePrefix}.DelRecording`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // DelSession	Deletes a scheduled WebEx session.
    delSession: (params) => {
      const xsiType = `${xsiTypePrefix}.DelSession`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // DetectSessionByCallback	Detect meeting number according to site, callback number, and occurred time scope.
    detectsessionbyCallback: (params) => {
      const xsiType = `${xsiTypePrefix}.DetectSessionByCallback`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // GetAPIVersion	Returns the current XML API version.
    getAPIVersion: (params) => {
      const xsiType = `${xsiTypePrefix}.GetAPIVersion`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // LstDistList	Lists existing distribution lists.
    lstdistList: (params) => {
      const xsiType = `${xsiTypePrefix}.LstDistList`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // LstOpenSession	Lists currently open WebEx sessions.
    lstopenSession: (params) => {
      const xsiType = `${xsiTypePrefix}.LstOpenSession`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // LstRecording	Lists existing recordings.
    lstRecording: (params) => {
      const xsiType = `${xsiTypePrefix}.LstRecording`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // LstsummarySession	Lists scheduled WebEx sessions.
    lstsummarySession: (params) => {
      const xsiType = `${xsiTypePrefix}.LstsummarySession`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // SetDistList	Updates a distribution list.
    setdistList: (params) => {
      const xsiType = `${xsiTypePrefix}.SetDistList`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // GetOneClickSettings	Retrieves One Click settings.
    getoneclickSettings: (params) => {
      const xsiType = `${xsiTypePrefix}.GetOneClickSettings`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // SetOneClickSettings	Sets One Click service type and meeting type.
    setoneclickSettings: (params) => {
      const xsiType = `${xsiTypePrefix}.SetOneClickSettings`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // GetRecordingInfo	Retrieves recording details.
    getrecordingInfo: (params) => {
      const xsiType = `${xsiTypePrefix}.GetRecordingInfo`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // SetRecordingInfo	Sets recording details.
    setrecordingInfo: (params) => {
      const xsiType = `${xsiTypePrefix}.SetRecordingInfo`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // GetSessionInfo	Retrieves WebEx session details.
    getsessionInfo: (params) => {
      const xsiType = `${xsiTypePrefix}.GetSessionInfo`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // LstContact	Lists site contacts.
    lstContacts: (params) => {
      const xsiType = `${xsiTypePrefix}.LstContacts`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // SetupOneClickSettings	Sets One Click scheduling options.
    setuponeclickSettings: (params) => {
      const xsiType = `${xsiTypePrefix}.SetupOneClickSettings`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

  };
  return generalsessionService;
};

module.exports = GeneralSessionService;
