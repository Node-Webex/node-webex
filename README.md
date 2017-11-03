# node-webex

_**(experimental/alpha/wip/ymmv/use-at-your-own-risk)**_

```javascript
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
```

**Installation/Dev/Test**

```bash
git clone https://github.com/nmarus/node-webex
cd node-webex
npm install
cd example
# edit get-user.js with your connection params
node get-user.js
```

**Notes:**

* **(New)** API endpoints for each API Service have been merged into a single file. For example, the WebEx UserService endpoints are defined in lib/api/user-service.js and are exposed under `webex.user` (i.e. `webex.user.get()`)
* **(New)** Request logic is now tested for `webex.user.get()`. As such, request logic is now live in most recent update.
* **(New)** Alternate setup using single file found in `example/get-user.js`
* NOT on npmjs.org. You will need to clone repo and follow instructions above to run this module locally.
* Only a few endpoints are available...
* See example folder for other info.

**Testing / Possible issues:**

* The function `js2xml` in lib/webex.js can handle strings and objects only. This function is used to to recursively create the markup tagged versions of the js objects used to define the contents of the `securityContext` and `bodyContent` portions of the XML request. As other WebEx XML API methods are added, this function may have to be tweaked. See section below on it's current operation.
* Little to no error handling (yet) so check/double-check everything.
* Response processor returns a js object version of the XML response. This can withstand a bot more post processing to eliminate some of the enclosing objects. 

**js2xml Example:**

Take the following example object...

```javascript
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
```

Running this through js2xml function will create the following XML that is inserted inside the `bodyContent` tag:

```xml
<firstName>fname</firstName>
<lastName>lname</lastName>
<webExId>username</webExId>
<email>email@domain.com</email>
<password>pass</password>
<privilege>
    <host>true</host>
</privilege>
<active>ACTIVATED</active>
```

## License

The MIT License (MIT)

Copyright (c) 2016-2018

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
