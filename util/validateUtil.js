////  ///////////////////////////////////////////////////////////////////
const required = (val) => val && val.length;
module.exports.required = required;

const maxLength = (len) => (val) => !(val) || (val.length <= len);
module.exports.maxLength = maxLength;

const minLength = (len) => (val) => val && (val.length >= len);
module.exports.minLength = minLength;

const limitLength = (minLen, maxLen) => (val) => val && minLen <= val.length && val.length <= maxLen;
module.exports.limitLength = limitLength;

const isNumber = (val) => !isNaN(Number(val));
module.exports.isNumber = isNumber;

const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
module.exports.validEmail = validEmail;