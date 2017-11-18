const Webex = require('../');

const webex = new Webex({
  siteName: 'mysite', // as in the portion of your webex url if it was mysite.example.com
  webExID: 'myuser@example.com',
  password: 's3cret',
});

const params = {
  listControl: {
    startFrom: '1',
    maximumNum: 'WBX_INFINITE',
    listMethod: 'AND',
  },
  order: {
    orderBy: 'HOSTWEBEXID',
    orderAD: 'ASC',
  },
};

webex.user.listSummary(params)
  .then(res => console.log(res))
  .catch(err => console.error(err));
