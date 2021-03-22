const moment = require('moment');
const { nfa } = require('../util');
const testUtil = new (require('../util/TestUtil'))(false);

const test = () => {
  console.log('objTest.test');

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
    let rs = testUtil.testFunc(func.name + "_" + defVal + "; " + valName, func, expVal, obj, defVal, valName);
  }

  // console.log(`isTestAll=${isTestAll}, isShowAll=${isShowAll}`);
  if(!isTestAll){
    testUtil.testFunc(nfa.gov, 3, 'xxx; a1.a2.a3', obj, 'xxx', 'a1.a2.a3');
    testUtil.testFunc(nfa.gov, 'wav', 'xxx; arr.0', obj, 'xxx', 'arr.0');
    testUtil.testFunc(nfa.gov, 'wav', 'xxx; arr, 0', obj, 'xxx', 'arr', 0);
    testUtil.testFunc(nfa.gov, '222', 'xxx; arr.2.b1', obj, 'xxx', 'arr.2.b1');
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
    testUtil.testFunc('gov xxx; a1.a2.a3', nfa.gov, 3, obj, 'xxx', 'a1.a2.a3');
    testUtil.testFunc('gov xxx; a1.a2.xx', nfa.gov, 'xxx', obj, 'xxx', 'a1.a2.xx');
    testUtil.testFunc('govo xxx; a1.a2.a3', nfa.govo, 3, obj, 'xxx', 'a1.a2.a3');
    testUtil.testFunc('govo xxx; a1.a2.xx', nfa.govo, 'xxx', obj, 'xxx', 'a1.a2.xx');

    defValNames.forEach(defValName=>{
      // console.log('\ndefault_value=' + defValName);
      valNames.forEach(valName=>{
        execFunc(nfa.gov, obj, defValName, valName)
      })
    })
    defValNames.forEach(defValName=>{
      // console.log('\ndefault_value=' + defValName);
      valNames.forEach(valName=>{
        execFunc(nfa.govo, obj, defValName, valName)
      })
    })
  }

  // nfa.showObj(106, 'number_106');
  // nfa.showObj("wavy", 'string_wavy');
  // nfa.showObj([], 'array_empty');
  // nfa.showObj([5,8,2], 'array_3');
  const obj3 = {
    v1: 111,
    obj2: {
      v2: 222,
    }
  }

  // console.log(nfa.ovExists(obj3, 'v1'));
  testUtil.testFunc('ovExists', nfa.ovExists, true, obj3, 'v1');
  testUtil.testFunc('ovExists', nfa.ovExists, true, obj3, 'obj2');
  testUtil.testFunc('ovExists', nfa.ovExists, true, obj3, 'obj2', 'v2');
  
  let rs = nfa.getType('fish');
  testUtil.handleRs('getType', `string`, rs, 'fish');
  testUtil.testFunc("getType", nfa.getType, `string`, '111');
  testUtil.testFunc("getType", nfa.getType, `integer`, 222);
  
  testUtil.testFunc("isEqual", nfa.isEqual, true, moment('2021-01-06'), moment('2021-01-06'));
  testUtil.testFunc("isEqual", nfa.isEqual, false, moment('2021-09-01'), moment('2021-01-06'));
  testUtil.testFunc("isNullGroup", nfa.isNullGroup, false, 'abc');
  testUtil.testFunc("isNullGroup", nfa.isNullGroup, false, true);
  testUtil.testFunc("isNullGroup", nfa.isNullGroup, false, false);
  testUtil.testFunc("isNullGroup", nfa.isNullGroup, false, 0);
  testUtil.testFunc("isNullGroup", nfa.isNullGroup, false, 1);
  testUtil.testFunc("isNullGroup", nfa.isNullGroup, true, null);
  testUtil.testFunc("isNullGroup", nfa.isNullGroup, true, undefined);
  testUtil.testFunc("isNullGroup", nfa.isNullGroup, true, NaN);
  
  // let obj = 'abc';
  // console.log('a', obj === null);
  // console.log('a', typeof obj === 'undefined' );
  // console.log('a', typeof NaN);
  // console.log('a', isNaN(obj));
  let obj1 = {
    name: "fish"
  }
  let obj2 = {
  }
  testUtil.testFunc('gov1', nfa.gov, 'fish', obj1, 'defVal', 'name');
  testUtil.testFunc('gov2', nfa.gov, 'defVal', obj2, 'defVal', 'name');
  testUtil.testFunc('gov3', nfa.gov, 'defVal', null, 'defVal', 'name');
  testUtil.testFunc('gov4', nfa.gov, 'defVal', undefined, 'defVal', 'name');
  testUtil.testFunc('gov5', nfa.gov, 'defVal', obj1, 'defVal', null);
  testUtil.testFunc('gov6', nfa.gov, 'defVal', obj1, 'defVal', undefined);




  
  testUtil.showAllRs();
}
module.exports.test = test