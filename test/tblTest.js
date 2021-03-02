const { nfa, testUtil } = require('../util')

const test = () => {
  console.log('tblTest.test');
  testUtil.resetRs();
  // testUtil.testFunc(Math.round, 123, null, 123.456);
  testUtil.showAllRs();
}
module.exports.test = test