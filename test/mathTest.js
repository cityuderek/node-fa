const { nfa } = require('../util')
const testUtil = new (require('../util/TestUtil'))(false);

const test = () => {
  console.log('mathTest.test');
  
  testUtil.testFunc(nfa.round, 123, null, 123.456);
  testUtil.testFunc(nfa.round, 120, null, 123.456, -1);
  testUtil.testFunc(nfa.round, 123.5, null, 123.456, 1);

  testUtil.showAllRs();
}
module.exports.test = test

