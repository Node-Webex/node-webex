const Webex = require('../');
const config = require('./config');

const webex = new Webex(config);

const user = {
  firstName: 'fname',
  lastName: 'lname',
  webExId: 'username',
  email: 'email@domain.com',
  password: 'pass',
  privilege: {
    host: 'true',
  },
  active: 'ACTIVATED',
};

webex.on('request', rOpts => console.log(JSON.stringify(rOpts.body, null, 2)));

webex.user.create(user)
  .then(res => console.log(JSON.stringify(res, null, 2)))
  .catch(err => console.error(err));
