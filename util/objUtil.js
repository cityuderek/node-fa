const _ = require('lodash');
const moment = require('moment');
// const nfa = require('./nfa')

// console.log('load objUtil');

//// object ////////////////////////////////////////////////////////////////////
//// get object value, not allow false
const gov = (obj, defVal, ...keys) => {
  if (obj === null || keys[0] === null || typeof obj === 'undefined' || typeof keys[0] === 'undefined') return defVal;

  if(keys.length === 1 && typeof keys[0] === 'string' && keys[0].indexOf('.') > 0){
    return gov(obj, defVal, ...keys[0].split('.'))
  }
  if (typeof obj[keys[0]] === "undefined" || keys[0] === null) {
    return defVal;
  }
  obj = obj[keys[0]];

  if (keys.length > 1) {
    if((typeof obj === 'object' && obj !== null) || Array.isArray(obj)){
      keys.shift();
      return gov(obj, defVal, ...keys);
    }
    return defVal;
  }

  if (typeof defVal === "number") {
    if (typeof obj !== "number" || Number.isNaN(obj)) {
      return defVal;
    }

  }else if (typeof defVal === "boolean") {
    if (obj === null || Number.isNaN(obj)) return defVal;
    return !!obj;

  }else if (typeof defVal === "string") {
    if(obj === null || obj.toString === Object.prototype.toString || Number.isNaN(obj)) return defVal;

  }

  return obj;
};
module.exports.gov = gov

//// get object value, object value base
const govo = (obj, defVal, ...keys) => {
  if (obj === null || keys[0] === null || typeof obj === 'undefined' || typeof keys[0] === 'undefined') return defVal;

  if(keys.length === 1 && typeof keys[0] === 'string' && keys[0].indexOf('.') > 0){
    return gov(obj, defVal, ...keys[0].split('.'))
  }
  if (typeof obj[keys[0]] === "undefined") {
    return defVal;
  }
  obj = obj[keys[0]];

  if (keys.length > 1) {
    keys.shift();
    return govo(obj, defVal, ...keys);
  }

  return obj;
};
module.exports.govo = govo

//// get object value, object value base
const hasKey = (obj, ...keys) => {
  if (!obj) return false;
  if (typeof obj[keys[0]] === "undefined") {
    return false;
  }
  obj = obj[keys[0]];

  if (keys.length > 1) {
    keys.shift();
    return hasKey(obj, ...keys);
  }

  return true;
};
module.exports.hasKey = hasKey;

module.exports.isEqual = _.isEqual;
const isEqual = (obj1, obj2)=>{
  let rs = _.isEqual(obj1, obj2);
  if(rs) return true;
  if(moment.isMoment(obj1)){
    return obj1.isSame(obj2);
  }

  return false;
}
module.exports.isEqual = isEqual;

const isNotEqual = (obj1, obj2)=>isEqual(obj1, obj2);
module.exports.isNotEqual = isNotEqual;

const clone = obj=>JSON.parse(JSON.stringify(obj));
module.exports.clone = clone;

const isObj = obj=>typeof obj === 'object' && obj !== null;
module.exports.isObj = isObj;

const isNullGroup = obj=>obj === null || typeof obj === 'undefined' || (typeof obj === 'number' && isNaN(obj));
module.exports.isNullGroup = isNullGroup;

const isEmptyObj = obj=>typeof obj === 'object' && Object.keys(obj).length === 0;
module.exports.isEmptyObj = isEmptyObj;

const isNonEmptyObj = obj=>typeof obj === 'object' && Object.keys(obj).length > 0;
module.exports.isNonEmptyObj = isNonEmptyObj;

const ovEquals = (obj, expectedVal, ...keys) => {
  if(expectedVal === null){
    return gov(obj, true, ...keys) === null;
  }

  return gov(obj, null, ...keys) === expectedVal;
};
module.exports.ovEquals = ovEquals;

const objLen = (obj) =>{
  return Object.keys(obj).length;
}
module.exports.objLen = objLen;