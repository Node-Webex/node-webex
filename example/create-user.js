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

webex.createUser(user)
  .then(res => console.log(res))
  .catch(err => console.error(err));
