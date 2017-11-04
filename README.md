# node-webex

**Cisco WebEx API library for Node JS**

_**Note: This is an experimental, incomplete, work in progress. This should not be used in production till 1.0.0 is released.**_

```javascript
const Webex = require('node-webex');

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

**Installation**

```bash
git clone https://github.com/nmarus/node-webex
cd node-webex
npm install
cd example
# edit get-user.js with your connection params
node get-user.js
```

**js2xml Notes:**

The function `js2xml` in lib/webex.js is used to to recursively create the markup of the js objects used to define the contents of the `securityContext` and `bodyContent` portions of the XML request. As other WebEx XML API methods are added, this function may have to be tweaked. An example of this logic is below.

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

Running this through the js2xml function will create the following XML that is inserted inside the `bodyContent` tag:

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

Copyright (c) 2017-2018

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
