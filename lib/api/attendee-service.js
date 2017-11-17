// Define WebEx Meeting Attendee Service API endpoints
// These operations allow you to invite, register, delete and retrieve Attendees from a previously scheduled WebEx session.

const xsiTypePrefix = 'java:com.webex.service.binding.attendee';

const AttendeeService = (webex) => {
  const atendeeService = {

    // CreateMeetingAttendee	Adds Attendee to previously scheduled session.
    createmeetingAttendee: (params) => {
      const xsiType = `${xsiTypePrefix}.CreateMeetingAttendee`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // DelMeetingAttendee	Removes Attendee from scheduled session.
    delmeetingAttendee: (params) => {
      const xsiType = `${xsiTypePrefix}.DelMeetingAttendee`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // GetEnrollmentInfo	Returns information from the pre-session enrollment form.
    getenrollmentInfo: (params) => {
      const xsiType = `${xsiTypePrefix}.GetEnrollmentInfo`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // LstMeetingAttendee	Returns list of Attendees from scheduled session.
    lstmeetingAttendee: (params) => {
      const xsiType = `${xsiTypePrefix}.LstMeetingAttendee`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // RegisterMeetingAttendee	Registers a new attendee to a scheduled session, or accepts or rejects an invited attendee.
    registermeetingAttendee: (params) => {
      const xsiType = `${xsiTypePrefix}.RegisterMeetingAttendee`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

  };
  return attendeeService;
};

module.exports = AttendeeService;
