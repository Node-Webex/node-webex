// Define WebEx HistoryService API endpoints
//The History Service provides access to usage data for WebEx sessions hosted within the last 90 days.

const xsiTypePrefix = 'java:com.webex.service.binding.history';

const HistoryService = (webex) => {
  const historyService = {
    // LsteventattendeeHistory
    eventAttendee: (params) => {
      const xsiType = `${xsiTypePrefix}.LsteventattendeeHistory`;
      // return webex.makeRequest(xsiType, params);
      // Prints out XML request to cosole without performing API call. Useful
      // for testing generator or any manipulation you are doing with the params.
      // Beuatify the output with xmllint (part of libxml2-utils)
      // node test.js | xmllint --format -
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // LsteventsessionHistory
    eventSession: (params) => {
      const xsiType = `${xsiTypePrefix}.LsteventsessionHistory`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // LstmeetingattendeeHistory
    meetingAttendee: (params) => {
      const xsiType = `${xsiTypePrefix}.LstmeetingattendeeHistory`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // LstmeetingusageHistory
    meetingUsage: (params) => {
      const xsiType = `${xsiTypePrefix}.LstmeetingusageHistory`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // LstrecordaccessHistory
    recordAccess: (params) => {
      const xsiType = `${xsiTypePrefix}.LstrecordaccessHistory`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // LstrecordaccessDetailHistory
    recordaccessDetail: (params) => {
      const xsiType = `${xsiTypePrefix}.LstrecordaccessDetailHistory`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },
  };
  return historyService;
};

module.exports = HistoryService;
