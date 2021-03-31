const { nfa } = require('../util');
const testUtil = new (require('../util/TestUtil'))(false);
// const _ = require('lodash');

const getArr2 = () => {
  return [ 'aa', 'bb', 'cc', 'dd', 'ee', 'ff' ];
}


const getArr0 = () => {
  return [ ];
}

const test = () => {
  console.log('arrTest.test');
  // console.log('nfa', nfa);
  let arr1 = [
    {name : 'name1', val: 111},
    {name : 'name2', val: 222},
    {name : 'name3', val: 333},
  ]
  
  testUtil.testFunc('first', nfa.first, 'aa', getArr2());
  testUtil.testFunc('first_emptyArr', nfa.first, 'x', getArr0(), 'x');

  testUtil.testFunc('last', nfa.last, 'ff', getArr2());
  testUtil.testFunc('last_emptyArr', nfa.last, 'x', getArr0(), 'x');

  testUtil.testFunc('arrGetN', nfa.arrGetN, 'cc', getArr2(), 2);
  testUtil.testFunc('arrGetN_emptyArr', nfa.arrGetN, 'x', getArr0(), 1, 'x');
  
  testUtil.testFunc('firstN', nfa.firstN, [ 'aa', 'bb' ], getArr2(), 2);
  testUtil.testFunc('firstN_emptyArr', nfa.firstN, [], getArr0(), 2);
  
  testUtil.testFunc('lastN', nfa.lastN, [ 'ee', 'ff' ], getArr2(), 2);
  testUtil.testFunc('lastN_emptyArr', nfa.lastN, [], getArr0(), 2);
  
  testUtil.testFunc('skipFirstN', nfa.skipFirstN, [ 'ee', 'ff' ], getArr2(), 4);
  testUtil.testFunc('skipFirstN_emptyArr', nfa.skipFirstN, [], getArr0(), 2);

  // console.log(`skipFirstN=`, getArr2().slice(2));
  // console.log(`firstN=`, nfa.firstN(arr0, 2));

  // let testUtil = new TestUtil();
  testUtil.testFunc('indexOfVal', nfa.indexOfVal, 2, arr1, 'name', 'name3');
  testUtil.showAllRs();
  // console.log(nfa.indexOfVal(arr1, 'name', 'name3'));
  // testUtil.testFunc(Math.round, 123, 123.456);
}
module.exports.test = test