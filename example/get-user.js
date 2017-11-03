const Webex = require('../');
const config = require('./config');

const webex = new Webex(config);

const user = {
  webExId: 'username',
};

webex.getUser(user)
  .then(res => console.log(res))
  .catch(err => console.error(err));
