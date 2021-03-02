const { nfa, testUtil } = require('../util')

const test = () => {
  console.log('dataTypeTest.test');
  testUtil.resetRs();
  // testUtil.testFunc(Math.round, 123, null, 123.456);
  let rs = nfa.getType('fish');
  testUtil.handleRs('getType', `string`, rs, 'fish');
  testUtil.testFunc(nfa.getType, `string`, null, '111');
  testUtil.testFunc(nfa.getType, `integer`, null, 222);

  testUtil.showAllRs();
}
module.exports.test = test