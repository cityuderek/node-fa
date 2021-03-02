const { nfa, testUtil } = require('../util')
const moment = require('moment')

const test = () => {
  console.log('dtTest.test');
  testUtil.resetRs();
  // testUtil.testFunc(Math.round, 123, null, 123.456);
  let rs = nfa.getMm('2021-01-06');
  testUtil.handleRs('getMm', moment(1609844400000), rs, '2021-01-06');

  testUtil.showAllRs();
}
module.exports.test = test