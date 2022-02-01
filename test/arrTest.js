const nfa = require('../util/nfa');
const testUtil = new (require('../util/TestUtil'))(false);
// const _ = require('lodash');

const getArr2 = () => {
  return [ 'aa', 'bb', 'cc', 'dd', 'ee', 'ff' ];
}


const getArr0 = () => {
  return [ ];
}
/*


  var arr = ['b', 'a', 1, 'a', 2, '1'];
  var uniqueA =  nfa.arrUnique(arr);
  var arrRemoveEle1 =  nfa.arrRemoveEle1(arr, 'a');
  var arrRemoveEle =  nfa.arrRemoveEle(arr, 'a');

  // console.log(`arr=` + arr);
  // console.log(`arrRemoveEle1=` + arr);
  console.log(`arr=` + arr);
  console.log(`uniqueA=` + uniqueA);
  console.log(`arrRemoveEle1=` + arrRemoveEle1);
  console.log(`arrRemoveEle=` + arrRemoveEle);
*/
const test = () => {
  console.log('arrTest.test');
  console.log('nfa', nfa);
  let arr1 = [
    {name : 'name1', val: 111},
    {name : 'name2', val: 222},
    {name : 'name3', val: 333},
  ]
  
  testUtil.testFunc('arrFirst', nfa.arrFirst, 'aa', getArr2());
  testUtil.testFunc('arrFirst_emptyArr', nfa.arrFirst, 'x', getArr0(), 'x');

  testUtil.testFunc('arrLast', nfa.arrLast, 'ff', getArr2());
  testUtil.testFunc('arrLast_emptyArr', nfa.arrLast, 'x', getArr0(), 'x');

  testUtil.testFunc('arrGetN', nfa.arrGetN, 'cc', getArr2(), 2);
  testUtil.testFunc('arrGetN_emptyArr', nfa.arrGetN, 'x', getArr0(), 1, 'x');
  
  testUtil.testFunc('arrFirstN', nfa.arrFirstN, [ 'aa', 'bb' ], getArr2(), 2);
  testUtil.testFunc('arrFirstN_emptyArr', nfa.arrFirstN, [], getArr0(), 2);
  
  testUtil.testFunc('arrLastN', nfa.arrLastN, [ 'ee', 'ff' ], getArr2(), 2);
  testUtil.testFunc('arrLastN_emptyArr', nfa.arrLastN, [], getArr0(), 2);
  
  testUtil.testFunc('arrSkipFirstN', nfa.arrSkipFirstN, [ 'ee', 'ff' ], getArr2(), 4);
  testUtil.testFunc('arrSkipFirstN_emptyArr', nfa.arrSkipFirstN, [], getArr0(), 2);

  // console.log(`skipFirstN=`, getArr2().slice(2));
  // console.log(`firstN=`, nfa.firstN(arr0, 2));
  let arr11 = ["aa", "bb", "cc", "dd", "ee", "ff"];
  let arr12 = ["bb", "dd", "xx"];
  let arr13 = nfa.arrFilter(arr11, arr12);
  let arr14 = nfa.arrFilterNot(arr11, arr12);
  nfa.varDump(arr13, 'arr13');
  nfa.varDump(arr14, 'arr14');

  // let testUtil = new TestUtil();
  testUtil.testFunc('indexOfVal', nfa.indexOfVal, 2, arr1, 'name', 'name3');
  testUtil.showAllRs();
  // console.log(nfa.indexOfVal(arr1, 'name', 'name3'));
  // testUtil.testFunc(Math.round, 123, 123.456);
}
module.exports.test = test