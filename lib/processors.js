const moment = require('moment');

const prefixMatch = /(?!xmlns)^.*:/;
const numberMatch = /^[0-9.]*$/;
const webExDateMatch = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}\s[0-9]{2}:[0-9]{2}:[0-9]{2}$/;

const Processors = {
  webExDateParse: function (dateStr) {
    return moment(dateStr, 'MM/DD/YYYY HH:mm:ss').toISOString();
  },

  webExDateStringify: function (date) {
    return moment(date).format('MM/DD/YYYY HH:mm:ss');
  },

  normalize: function (str) {
    return str.toLowerCase();
  },

  firstCharLowerCase: function (str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  },

  stripPrefix: function (str) {
    return str.replace(prefixMatch, '');
  },

  parseNumbers: function (_str) {
    let str = _str;
    if (numberMatch.test(_str) && !webExDateMatch.test(_str)) {
      str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
    }
    return str;
  },

  parseBooleans: function (_str) {
    let str = _str;
    if (/^(?:true|false)$/i.test(_str)) {
      str = str.toLowerCase() === 'true';
    }
    return str;
  },

  parseDate: function (_str) {
    let str = _str;
    if (webExDateMatch.test(_str)) {
      str = Processors.webExDateParse(_str);
    }
    return str;
  },
};

module.exports = Processors;
