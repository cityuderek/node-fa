const { nfa } = require('../util');
const testUtil = new (require('../util/TestUtil'))(false);

const test = () => {
  console.log('arrTest.test');
  // console.log('nfa', nfa);
  let arr1 = [
    {name : 'name1', val: 111},
    {name : 'name2', val: 222},
    {name : 'name3', val: 333},
  ]
  // let testUtil = new TestUtil();
  testUtil.testFunc('indexOfVal', nfa.indexOfVal, 2, arr1, 'name', 'name3');
  testUtil.showAllRs();
  // console.log(nfa.indexOfVal(arr1, 'name', 'name3'));
  // testUtil.testFunc(Math.round, 123, 123.456);
}
module.exports.test = test