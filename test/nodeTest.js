const nfa = require('../util/nfa');;
const testUtil = new (require('../util/TestUtil'))(false);

const test = () => {
  console.log('nodeTest.test');
  // console.log('nfa', nfa);
  // let arr1 = [
  //   {name : 'name1', val: 111},
  //   {name : 'name2', val: 222},
  //   {name : 'name3', val: 333},
  // ]
  // // let testUtil = new TestUtil();
  // testUtil.testFunc(nfa.timeUsed, 2, null, arr1, 'name', 'name3');
  // testUtil.showAllRs();
  // console.log(nfa.indexOfVal(arr1, 'name', 'name3'));
  // testUtil.testFunc(Math.round, 123, null, 123.456);
}
module.exports.test = test