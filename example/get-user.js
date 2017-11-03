const Webex = require('../');

const webex = new Webex({
  siteName: 'mysite', // as in the portion of your webex url if it was mysite.example.com
  webExID: 'myuser@example.com',
  password: 's3cret',
});

webex.on('request', rOpts => console.log(JSON.stringify(rOpts.body, null, 2)));

webex.user.get({ webExId: 'someone@example.com' })
  .then(res => console.log(JSON.stringify(res, null, 2)))
  .catch(err => console.error(err));
