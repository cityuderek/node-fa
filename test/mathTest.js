const { nfa } = require('../util')
const testUtil = new (require('../util/TestUtil'))(false);

const test = () => {
  console.log('mathTest.test');
  
  testUtil.testFunc('round', nfa.round, 123, 123.456);
  testUtil.testFunc('round', nfa.round, 120, 123.456, -1);
  testUtil.testFunc('round', nfa.round, 123.5, 123.456, 1);

  testUtil.showAllRs();
}
module.exports.test = test

