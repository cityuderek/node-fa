const _ = require("lodash");
const moment = require("moment");
// const nfa = require('./nfa')

//// check ///////////////////////////////////////////////////////////
const isFunc = typeof obj === "function";
module.exports.ifEmpty = isFunc;

// module.exports.isEqual = _.isEqual;
const isEqual = (obj1, obj2) => {
  let rs = _.isEqual(obj1, obj2);
  if (rs) return true;
  if (moment.isMoment(obj1)) {
    return obj1.isSame(obj2);
  }

  return false;
};
module.exports.isEqual = isEqual;

const isNotEqual = (obj1, obj2) => isEqual(obj1, obj2);
module.exports.isNotEqual = isNotEqual;

const isObj = (obj) => typeof obj === "object" && obj !== null;
module.exports.isObj = isObj;

const isNullGroup = (obj) =>
  obj === null ||
  typeof obj === "undefined" ||
  (typeof obj === "number" && isNaN(obj));
module.exports.isNullGroup = isNullGroup;

const isEmptyObj = (obj) =>
  typeof obj === "object" && Object.keys(obj).length === 0;
module.exports.isEmptyObj = isEmptyObj;

const isNonEmptyObj = (obj) =>
  typeof obj === "object" && Object.keys(obj).length > 0;
module.exports.isNonEmptyObj = isNonEmptyObj;

const isEmpty = (obj) => {
  if (obj === null) return true;
  if (obj === "") return true;
  if (obj !== obj) return true; // NaN
  if (Array.isArray(obj) && obj.length === 0) return true;
  const ty = typeof obj;
  if (ty === "undefined") return true;
  if (ty === "object" && Object.keys(obj).length === 0) return true;

  return false;
};
module.exports.isEmpty = isEmpty;

const isNonEmpty = (obj) => !isEmpty(obj);
module.exports.isNonEmpty = isNonEmpty;

const isOvNotEmptyStr = (obj, ...keys) => {
  const val = gov(obj, "", ...keys);
  return typeof val === "string" && val !== "";
};
module.exports.isOvNotEmptyStr = isOvNotEmptyStr;

//// handle special value ///////////////////////////////////////////////////////////
// console.log('load objUtil');
const ifEmpty = (obj, defVal = null) =>
  obj === null || isNaN(obj) || typeof obj === "undefined" ? defVal : obj;
module.exports.ifEmpty = ifEmpty;

const ifNull = (obj, defVal) => (obj === null ? defVal : obj);
module.exports.ifNull = ifNull;

//// object ////////////////////////////////////////////////////////////////////
//// get object value, not allow false
const gov = (obj, defVal, ...keys) => {
  if (
    obj === null ||
    keys[0] === null ||
    typeof obj === "undefined" ||
    typeof keys[0] === "undefined"
  )
    return defVal;

  if (
    keys.length === 1 &&
    typeof keys[0] === "string" &&
    keys[0].indexOf(".") > 0
  ) {
    return gov(obj, defVal, ...keys[0].split("."));
  }
  if (typeof obj[keys[0]] === "undefined" || keys[0] === null) {
    return defVal;
  }
  obj = obj[keys[0]];

  if (keys.length > 1) {
    if ((typeof obj === "object" && obj !== null) || Array.isArray(obj)) {
      keys.shift();
      return gov(obj, defVal, ...keys);
    }
    return defVal;
  }

  if (typeof defVal === "number") {
    if (typeof obj !== "number" || Number.isNaN(obj)) {
      return defVal;
    }
  } else if (typeof defVal === "boolean") {
    if (obj === null || Number.isNaN(obj)) return defVal;
    return !!obj;
  } else if (typeof defVal === "string") {
    if (
      obj === null ||
      obj.toString === Object.prototype.toString ||
      Number.isNaN(obj)
    )
      return defVal;
  }

  return obj;
};
module.exports.gov = gov;

//// get object value, object value base
const govo = (obj, defVal, ...keys) => {
  if (
    obj === null ||
    keys[0] === null ||
    typeof obj === "undefined" ||
    typeof keys[0] === "undefined"
  )
    return defVal;

  if (
    keys.length === 1 &&
    typeof keys[0] === "string" &&
    keys[0].indexOf(".") > 0
  ) {
    return gov(obj, defVal, ...keys[0].split("."));
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
module.exports.govo = govo;

const objSize = (obj) => {
  if (obj === null) return 0;
  return JSON.stringify(obj).length;
};
module.exports.objSize = objSize;

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

const objContainsKey = (obj, key) => {
  return typeof obj[key] !== "undefined";
};
module.exports.objContainsKey = objContainsKey;

// const clone = obj=>JSON.parse(JSON.stringify(obj));
const clone = _.cloneDeep;
module.exports.clone = clone;

const objValEquals = (obj, expectedVal, ...keys) => {
  if (expectedVal === null) {
    return gov(obj, true, ...keys) === null;
  }

  return gov(obj, null, ...keys) === expectedVal;
};
module.exports.objValEquals = objValEquals;

const objValExists = (obj, ...keys) => {
  return gov(obj, undefined, ...keys) !== undefined;
};
module.exports.objValExists = objValExists;

const objLen = (obj) => {
  return Object.keys(obj).length;
};
module.exports.objLen = objLen;

const showObj = (obj, title = "obj", isShowObj = true) => {
  let ty = getDetailType(obj);
  let arr = [];
  let str = "";
  if (ty === "string") {
    str = `${title}; dataType=string(${obj.length})`;
  } else if (ty === "array") {
    str = `${title}; dataType=array(${obj.length})`;
  } else {
    str = `${title}; dataType=${ty}`;
  }
  arr.push(str);

  if (isShowObj) arr.push(obj);

  console.log(...arr);
};
module.exports.showObj = showObj;

const objSmry = (obj, title = "obj") => {
  let ty = getDetailType(obj);
  let str = "";
  if (ty === "string") {
    str = `${title}; dataType=string, str(${obj.length})=${obj.substring(
      0,
      20
    )}`;
  } else if (ty === "array") {
    str = `${title}; dataType=array, len=${obj.length}`;
  } else if (ty === "number") {
    str = `${title}; dataType=number, val=${obj}`;
  } else if (ty === "integer") {
    str = `${title}; dataType=integer, val=${obj}`;
  } else if (ty === "object") {
    str = `${title}; dataType=object, keys=${Object.keys(obj).length}`;
  } else if (ty === "boolean") {
    str = `${title}; dataType=boolean, val=${obj}`;
  } else if (ty === "Date") {
    str = `${title}; dataType=Date, val=${moment(obj).format(
      "YYYY-MM-DD hh:mm:ss"
    )}`;
  } else {
    str = `${title}; dataType=${ty}`;
  }
  return str;
};
module.exports.objSmry = objSmry;

//// dataType ////////////////////////////////////////////////////////////////////
const isDetailTypeOf = (obj, arr) => arr.includes(getDetailType(obj));
module.exports.isDetailTypeOf = isDetailTypeOf;

const getDetailType = (obj) => {
  if (obj === null) return "null";
  if (obj !== obj) return "NaN";
  const ty = typeof obj;
  if (ty === "object") {
    if (obj instanceof Date) return "Date";
    if (Array.isArray(obj)) return "array";
  } else if (ty === "number") {
    if (Number.isInteger(obj)) return "integer";
  }

  return ty;
};
module.exports.getDetailType = getDetailType;

const length = (obj) => {
  let ty = typeof obj;
  if (ty === "string") return obj.length;
  if (Array.isArray(obj)) return obj.length;
  if (ty === "object") return Object.keys(obj).length;

  return 0;
};
module.exports.length = length;
