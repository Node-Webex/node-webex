const Webex = require('../');

const webex = new Webex({
  siteName: 'mysite', // as in the portion of your webex url if it was mysite.example.com
  webExID: 'myuser@example.com',
  password: 's3cret',
});

const params = {
  startTimeScope: {
    sessionStartTimeStart: '03/08/2004 07:34:45',
    sessionStartTimeEnd: '03/09/2004 09:34:45',
  },
  endTimeScope: {
    sessionEndTimeStart: '03/08/2004 08:34:45',
    sessionEndTimeEnd: '03/09/2004 10:34:45',
  },
  listControl: {
    startFrom: '1',
    maximumNum: '10',
    listMethod: 'AND',
  },
  order: {
    orderBy: 'ATTENDEENAME',
    orderAD: 'ASC',
  },
};

webex.history.eventAttendee(params)
  .then(res => console.log(res))
  .catch(err => console.error(err));
