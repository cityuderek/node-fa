const { nfa } = require('../util')
const testUtil = new (require('../util/TestUtil'))(false);

const test = () => {
  console.log('tblTest.test');
  // testUtil.testFunc(Math.round, 123, null, 123.456);
  testUtil.showAllRs();
}
module.exports.test = test