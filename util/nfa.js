const _ = require('lodash');

const test = () => {
  const testUtil = require('./testUtil');
  
  console.log('nfa test');
  const isTestAll = 1;
  const isShowAll = !isTestAll;
  testUtil.setShowAll(isShowAll);
  const obj = {
    'v_null': null,
    'v_nan': NaN,
    'v_true': true,
    'v_false': false,
    'v_0': 0,
    'v_2': 2,
    'v_n1': -1,
    'v_empty_str': "",
    'v_str_abc': 'abc',
    'v_str_true': 'true',
    'v_str_false': 'false',
    a1:{
      a2:{
        a3: 3,
      },
    },
    arr:["wav", 'fff', { b1: '222'}],

  }

  const expVals = {
    'k__gov__true__undefined': 'true',	'k__gov__false__undefined': 'false',	'k__gov__null__undefined': 'null',	'k__gov__empty_str__undefined': 'empty_str',	'k__gov__0__undefined': '0',	'k__gov__6__undefined': '6',	'k__govo__true__undefined': 'true',	'k__govo__false__undefined': 'false',	'k__govo__null__undefined': 'null',	'k__govo__empty_str__undefined': 'empty_str',	'k__govo__0__undefined': '0',	'k__govo__6__undefined': '6',
    'k__gov__true__null': 'true',	'k__gov__false__null': 'false',	'k__gov__null__null': 'null',	'k__gov__empty_str__null': 'empty_str',	'k__gov__0__null': '0',	'k__gov__6__null': '6',	'k__govo__true__null': 'null',	'k__govo__false__null': 'null',	'k__govo__null__null': 'null',	'k__govo__empty_str__null': 'null',	'k__govo__0__null': 'null',	'k__govo__6__null': 'null',
    'k__gov__true__nan': 'true',	'k__gov__false__nan': 'false',	'k__gov__null__nan': 'nan',	'k__gov__empty_str__nan': 'empty_str',	'k__gov__0__nan': '0',	'k__gov__6__nan': '6',	'k__govo__true__nan': 'nan',	'k__govo__false__nan': 'nan',	'k__govo__null__nan': 'nan',	'k__govo__empty_str__nan': 'nan',	'k__govo__0__nan': 'nan',	'k__govo__6__nan': 'nan',
    'k__gov__true__true': 'true',	'k__gov__false__true': 'true',	'k__gov__null__true': 'true',	'k__gov__empty_str__true': 'true',	'k__gov__0__true': '0',	'k__gov__6__true': '6',	'k__govo__true__true': 'true',	'k__govo__false__true': 'true',	'k__govo__null__true': 'true',	'k__govo__empty_str__true': 'true',	'k__govo__0__true': 'true',	'k__govo__6__true': 'true',
    'k__gov__true__false': 'false',	'k__gov__false__false': 'false',	'k__gov__null__false': 'false',	'k__gov__empty_str__false': 'false',	'k__gov__0__false': '0',	'k__gov__6__false': '6',	'k__govo__true__false': 'false',	'k__govo__false__false': 'false',	'k__govo__null__false': 'false',	'k__govo__empty_str__false': 'false',	'k__govo__0__false': 'false',	'k__govo__6__false': 'false',
    'k__gov__true__0': 'false',	'k__gov__false__0': 'false',	'k__gov__null__0': '0',	'k__gov__empty_str__0': '0',	'k__gov__0__0': '0',	'k__gov__6__0': '0',	'k__govo__true__0': '0',	'k__govo__false__0': '0',	'k__govo__null__0': '0',	'k__govo__empty_str__0': '0',	'k__govo__0__0': '0',	'k__govo__6__0': '0',
    'k__gov__true__2': 'true',	'k__gov__false__2': 'true',	'k__gov__null__2': '2',	'k__gov__empty_str__2': '2',	'k__gov__0__2': '2',	'k__gov__6__2': '2',	'k__govo__true__2': '2',	'k__govo__false__2': '2',	'k__govo__null__2': '2',	'k__govo__empty_str__2': '2',	'k__govo__0__2': '2',	'k__govo__6__2': '2',
    'k__gov__true__n1': 'true',	'k__gov__false__n1': 'true',	'k__gov__null__n1': 'n1',	'k__gov__empty_str__n1': 'n1',	'k__gov__0__n1': 'n1',	'k__gov__6__n1': 'n1',	'k__govo__true__n1': 'n1',	'k__govo__false__n1': 'n1',	'k__govo__null__n1': 'n1',	'k__govo__empty_str__n1': 'n1',	'k__govo__0__n1': 'n1',	'k__govo__6__n1': 'n1',
    'k__gov__true__empty_str': 'false',	'k__gov__false__empty_str': 'false',	'k__gov__null__empty_str': 'empty_str',	'k__gov__empty_str__empty_str': 'empty_str',	'k__gov__0__empty_str': '0',	'k__gov__6__empty_str': '6',	'k__govo__true__empty_str': 'empty_str',	'k__govo__false__empty_str': 'empty_str',	'k__govo__null__empty_str': 'empty_str',	'k__govo__empty_str__empty_str': 'empty_str',	'k__govo__0__empty_str': 'empty_str',	'k__govo__6__empty_str': 'empty_str',
    'k__gov__true__str_abc': 'true',	'k__gov__false__str_abc': 'true',	'k__gov__null__str_abc': 'str_abc',	'k__gov__empty_str__str_abc': 'str_abc',	'k__gov__0__str_abc': '0',	'k__gov__6__str_abc': '6',	'k__govo__true__str_abc': 'str_abc',	'k__govo__false__str_abc': 'str_abc',	'k__govo__null__str_abc': 'str_abc',	'k__govo__empty_str__str_abc': 'str_abc',	'k__govo__0__str_abc': 'str_abc',	'k__govo__6__str_abc': 'str_abc',
    'k__gov__true__str_true': 'true',	'k__gov__false__str_true': 'true',	'k__gov__null__str_true': 'str_true',	'k__gov__empty_str__str_true': 'str_true',	'k__gov__0__str_true': '0',	'k__gov__6__str_true': '6',	'k__govo__true__str_true': 'str_true',	'k__govo__false__str_true': 'str_true',	'k__govo__null__str_true': 'str_true',	'k__govo__empty_str__str_true': 'str_true',	'k__govo__0__str_true': 'str_true',	'k__govo__6__str_true': 'str_true',
    'k__gov__true__str_false': 'true',	'k__gov__false__str_false': 'true',	'k__gov__null__str_false': 'str_false',	'k__gov__empty_str__str_false': 'str_false',	'k__gov__0__str_false': '0',	'k__gov__6__str_false': '6',	'k__govo__true__str_false': 'str_false',	'k__govo__false__str_false': 'str_false',	'k__govo__null__str_false': 'str_false',	'k__govo__empty_str__str_false': 'str_false',	'k__govo__0__str_false': 'str_false',	'k__govo__6__str_false': 'str_false',
      }
  let valNames = ['v_undefined',
  'v_null',
  'v_nan',
  'v_true',
  'v_false',
  'v_0',
  'v_2',
  'v_n1',
  'v_empty_str',
  'v_str_abc',
  'v_str_true',
  'v_str_false',]
  let defValNames = ['v_true', 'v_false', 'v_null', 'v_empty_str', 'v_0', 'v_6'];

  const getExpVal = (expVals, funcName, defVal, val)=>{
    // console.log('key=' + 'k__' + funcName + '__' + defVal.substring(2) + '__' + val.substring(2));
    return getValByName('v_' + expVals['k__' + funcName + '__' + defVal.substring(2) + '__' + val.substring(2)]);
  }
  const getValByName = valName=>{
    if(valName === 'v_null') return null;
    if(valName === 'v_nan') return NaN;
    if(valName === 'v_undefined') return undefined;
    if(valName === 'v_empty_str') return "";
    if(valName === 'v_str_abc') return "abc";
    if(valName === 'v_str_true') return "true";
    if(valName === 'v_str_false') return "false";
    if(valName === 'v_true') return true;
    if(valName === 'v_false') return false;
    if(valName === 'v_0') return 0;
    if(valName === 'v_2') return 2;
    if(valName === 'v_6') return 6;
    if(valName === 'v_n1') return -1;

    console.log('unknown valName; ' + valName);
  }
  const execFunc = (func, obj, defValName, valName)=>{
    let defVal = getValByName(defValName);
    // let rs = func(obj, defVal, valName);
    let expVal = getExpVal(expVals, func.name, defValName, valName);
    let rs = testUtil.testFunc(func, expVal, defVal + "; " + valName, obj, defVal, valName);
  }

  // console.log(`isTestAll=${isTestAll}, isShowAll=${isShowAll}`);
  if(!isTestAll){
    testUtil.testFunc(gov, 3, 'xxx; a1.a2.a3', obj, 'xxx', 'a1.a2.a3');
    testUtil.testFunc(gov, 'wav', 'xxx; arr.0', obj, 'xxx', 'arr.0');
    testUtil.testFunc(gov, 'wav', 'xxx; arr, 0', obj, 'xxx', 'arr', 0);
    testUtil.testFunc(gov, '222', 'xxx; arr.2.b1', obj, 'xxx', 'arr.2.b1');
    // console.log('xxx=' + ( typeof "xxx" === 'string'));
    // console.log('__dirname=' + __dirname);
    
    // testUtil.testFunc(gov, 2, 'xxx; v_2', obj, 'xxx', 'v_2');
  
    // defValNames.forEach(defValName=>{
    //   // console.log('\ndefault_value=' + defValName);
    //   valNames.forEach(valName=>{
    //     execFunc(govo, obj, defValName, valName)
    //   })
    // })
    
  }else{
    testUtil.testFunc(gov, 3, 'xxx; a1.a2.a3', obj, 'xxx', 'a1.a2.a3');
    testUtil.testFunc(gov, 'xxx', 'xxx; a1.a2.xx', obj, 'xxx', 'a1.a2.xx');
    testUtil.testFunc(govo, 3, 'xxx; a1.a2.a3', obj, 'xxx', 'a1.a2.a3');
    testUtil.testFunc(govo, 'xxx', 'xxx; a1.a2.xx', obj, 'xxx', 'a1.a2.xx');

    defValNames.forEach(defValName=>{
      // console.log('\ndefault_value=' + defValName);
      valNames.forEach(valName=>{
        execFunc(gov, obj, defValName, valName)
      })
    })
    defValNames.forEach(defValName=>{
      // console.log('\ndefault_value=' + defValName);
      valNames.forEach(valName=>{
        execFunc(govo, obj, defValName, valName)
      })
    })
  }

  testUtil.showAllRs();
}
module.exports.test = test

//// dataType ////////////////////////////////////////////////////////////////////
const getType = (obj) =>{
  let t = typeof obj;
  if(t === 'object'){
    if(obj instanceof Date) return 'Date';

  }else if(t === 'number'){
    if(Number.isInteger(obj)) return 'integer';
  }
  
  return t;
}
module.exports.getType = getType

//// object ////////////////////////////////////////////////////////////////////
//// get object value, not allow false
const gov = (obj, defVal, ...keys) => {
  if (!obj === null || keys[0] === null) return defVal;

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
  if (!obj === null || keys[0] === null) return defVal;

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
module.exports.hasKey = hasKey

module.exports.isEqual = _.isEqual

const isNotEqual = (obj1, obj2)=>!_.isEqual(obj1, obj2)
module.exports.isNotEqual = isNotEqual

const clone = obj=>JSON.parse(JSON.stringify(obj))
module.exports.clone = clone

const isObj = obj=>typeof obj === 'object' && obj !== null
module.exports.isObj = isObj

const isNonEmptyObj = obj=>typeof obj === 'object' && Object.keys(obj).length > 0
module.exports.isNonEmptyObj = isNonEmptyObj

const isEmptyObj = obj=>typeof obj === 'object' && Object.keys(obj).length === 0
module.exports.isEmptyObj = isEmptyObj

const ovEquals = (obj, expectedVal, ...keys) => {
  if(expectedVal === null){
    return gov(obj, true, ...keys) === null;
  }

  return gov(obj, null, ...keys) === expectedVal;
};
module.exports.ovEquals = ovEquals

const objLen = (obj) =>{
  return Object.keys(obj).length;
}
module.exports.objLen = objLen

//// array /////////////////////////////////////////////////////////////////////
const showArr = (arr, title = undefined) => {
  console.log('Array(' + title + ')=', arr.length);
  arr.map(item=>{
      console.log('item=', item);
  })
};
module.exports.showArr = showArr

// module.exports = {clone, isObj, isNonEmptyObj, gov, equals}

// const {strUtil} = require('./util');

// console.log('node-fa');
// console.log('underscore=' + strUtil.underscore('Aaa BB'));