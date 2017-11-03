# node-webex (experimental/alpha/wip/ymmv/use-at-your-own-risk)

```
git clone https://github.com/nmarus/node-webex
cd node-webex
npm install
cd example
node create-user
```

**Notes:**

* NOT on npmjs.org. You will need to clone repo and follow instructions above to run this module locally.
* Request logic is commented out in lib/webex
* Only a few endpoints are available
* See example folder for other info

**Testing / Possible issues:**

* The function `js2xml` in lib/webex.js can handle strings and objects only. This function is used to to recursively create the markup tagged versions of the js objects used to define the contents of the `securityContext` and `bodyContent` portions of the XML request. As other WebEx XML API methods are added, this function may have to be tweaked. See section below on it's current operation.
* Totally untested... hence why request logic is commented out. Hope to test soon, curious on feedback for anyone else who has tested.
* Little to no error handling (yet) so check/doublecheck everything when making this live.
* Response processing untested (Have I mentioned that this is untested?). Response processing is done through the `xml2js.parseString()` to parse the response.body to a js object. *(Console log output for successful requests/responses appreciated.)* Logic in the 2 API endpoing GetUuer/CreateUser allows options to be passed to change the way xml2js handles the parsing should it need to be adjusted. See https://www.npmjs.com/package/xml2js. This can eventually be unique to the api call, globally defined (assuming that xml responses are close enough), or specified by the user (not an ideal solution).

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
