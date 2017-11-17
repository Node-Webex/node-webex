// Define WebEx MeetingService API endpoints
// These operations allow you to invite, register, delete and retrieve Attendees from a previously scheduled WebEx session.

const xsiTypePrefix = 'java:com.webex.service.binding.meeting';

const MeetingService = (webex) => {
  const meetingService = {
    // CreateMeeting	Schedules a Meeting.
    createMeeting: (params) => {
      const xsiType = `${xsiTypePrefix}.CreateMeeting`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // CreateTeleconferenceSession	Schedules a Teleconference-only Meeting.
    createteleconferenceSession: (params) => {
      const xsiType = `${xsiTypePrefix}.CreateTeleconferenceSession`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // DelMeeting	Deletes a Scheduled Meeting.
    delMeeting: (params) => {
      const xsiType = `${xsiTypePrefix}.DelMeeting`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // GethosturlMeeting	Gets a URL for the Host to Start a Scheduled Meeting.
    gethosturlMeeting: (params) => {
      const xsiType = `${xsiTypePrefix}.GethosturlMeeting`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // GetjoinurlMeeting	Gets a URL for an Attendee to Join a Scheduled Meeting.
    getjoinurlMeeting: (params) => {
      const xsiType = `${xsiTypePrefix}.GetjoinurlMeeting`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // GetMeeting	Gets Details for a Scheduled Meeting.
    getMeeting: (params) => {
      const xsiType = `${xsiTypePrefix}.GetMeeting`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // GetTeleconferenceSession	Gets Details for a Scheduled Teleconference-only Meeting.
    getteleconferenceSession: (params) => {
      const xsiType = `${xsiTypePrefix}.GetTeleconferenceSession`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // LstsummaryMeeting	Lists summary information of scheduled meetings.
    lstsummaryMeeting: (params) => {
      const xsiType = `${xsiTypePrefix}.LstsummaryMeeting`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // SetMeeting	Allows hosts to update the information of their scheduled meeting.
    setMeeting: (params) => {
      const xsiType = `${xsiTypePrefix}.SetMeeting`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // SetTeleconferenceSession	Allows hosts to update the information of their scheduled Teleconference-only Meeting.
    setteleconferenceSession: (params) => {
      const xsiType = `${xsiTypePrefix}.SetTeleconferenceSession`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

  };
  return meetingService;
};

module.exports = MeetingService;
