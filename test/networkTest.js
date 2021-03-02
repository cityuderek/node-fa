const { nfa, testUtil } = require('../util')

const test = () => {
  console.log('arrTest.test');
  testUtil.resetRs();
  // testUtil.testFunc(nfa.isEqual, true, null, moment('2021-01-06'), moment('2021-01-06'));
  // testUtil.testFunc(nfa.isEqual, false, null, moment('2021-09-01'), moment('2021-01-06'));

  testUtil.showAllRs();
}
module.exports.test = test