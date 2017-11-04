// Define WebEx HistoryService API endpoints
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
  };
  return historyService;
};

module.exports = HistoryService;
