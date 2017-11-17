// Define WebEx Event Center Session API endpoints

const xsiTypePrefix = 'java:com.webex.service.binding.event';

const EventCenterService = (webex) => {
  const eventcenterService = {
    // CreateEvent	Schedule a new Event Center session.
    createEvent: (params) => {
      const xsiType = `${xsiTypePrefix}.CreateEvent`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // DelEvent		Delete a previously scheduled Event.
    delEvent: (params) => {
      const xsiType = `${xsiTypePrefix}.DelEvent`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // GetEvent		Returns information for an existing Event.
    getEvent: (params) => {
      const xsiType = `${xsiTypePrefix}.GetEvent`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // LstrecordedEvent	Returns a list of recorded Events.
    lstrecordedEvent: (params) => {
      const xsiType = `${xsiTypePrefix}.LstrecordedEvent`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // LstsummaryEvent	Returns a list of scheduled Events.
    lstsummaryEvent: (params) => {
      const xsiType = `${xsiTypePrefix}.LstsummaryEvent`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // LstsummaryProgram	Returns a list of the programs that are associated with an Event Center enabled WebEx site.
    lstsummaryProgram: (params) => {
      const xsiType = `${xsiTypePrefix}.LstsummaryProgram`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

    // SendInvitationEmail	Send invitation email messages to Event participants for a previously scheduled Event.
    sendinvitationEmail: (params) => {
      const xsiType = `${xsiTypePrefix}.SendInvitationEmail`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },
    // SetEvent		Update a previously scheduled Event.
    setEvent: (params) => {
      const xsiType = `${xsiTypePrefix}.SetEvent`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },


    // UploadEventImage	Add a picture to the description of a previously scheduled Event.
    uploadeventImage: (params) => {
      const xsiType = `${xsiTypePrefix}.UploadEventImage`;
      return Promise.resolve(webex.genXML(xsiType, params));
    },

  };
  return eventcenterService;
};

module.exports = EventCenterService;
