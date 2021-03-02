const moment = require('moment');
const { nfa } = require('../util');
const testUtil = new (require('../util/TestUtil'))(false);

const test = () => {
  console.log('objTest.test');
  
  let rs = nfa.getType('fish');
  testUtil.handleRs('getType', `string`, rs, 'fish');
  testUtil.testFunc(nfa.getType, `string`, null, '111');
  testUtil.testFunc(nfa.getType, `integer`, null, 222);
  
  testUtil.testFunc(nfa.isEqual, true, null, moment('2021-01-06'), moment('2021-01-06'));
  testUtil.testFunc(nfa.isEqual, false, null, moment('2021-09-01'), moment('2021-01-06'));
  testUtil.testFunc(nfa.isNullGroup, false, null, 'abc');
  testUtil.testFunc(nfa.isNullGroup, false, null, true);
  testUtil.testFunc(nfa.isNullGroup, false, null, false);
  testUtil.testFunc(nfa.isNullGroup, false, null, 0);
  testUtil.testFunc(nfa.isNullGroup, false, null, 1);
  testUtil.testFunc(nfa.isNullGroup, true, null, null);
  testUtil.testFunc(nfa.isNullGroup, true, null, undefined);
  testUtil.testFunc(nfa.isNullGroup, true, null, NaN);
  
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
  testUtil.testFunc(nfa.gov, 'fish', null, obj1, 'defVal', 'name');
  testUtil.testFunc(nfa.gov, 'defVal', null, obj2, 'defVal', 'name');
  testUtil.testFunc(nfa.gov, 'defVal', null, null, 'defVal', 'name');
  testUtil.testFunc(nfa.gov, 'defVal', null, undefined, 'defVal', 'name');
  testUtil.testFunc(nfa.gov, 'defVal', null, obj1, 'defVal', null);
  testUtil.testFunc(nfa.gov, 'defVal', null, obj1, 'defVal', undefined);

  testUtil.showAllRs();
}
module.exports.test = test