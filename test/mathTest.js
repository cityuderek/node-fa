const nfa = require('../util/nfa');
const testUtil = new (require('../util/TestUtil'))(false);

const test = () => {
  console.log('mathTest.test');

  
  testUtil.testFunc('isNumeric_11', nfa.isNumeric, true, 11);
  testUtil.testFunc('isNumeric_11.1', nfa.isNumeric, true, 11.1);
  testUtil.testFunc('isNumeric_0', nfa.isNumeric, true, 0);
  testUtil.testFunc('isNumeric_s11', nfa.isNumeric, true, "11");
  testUtil.testFunc('isNumeric_null', nfa.isNumeric, false, null);
  testUtil.testFunc('isNumeric_undefined', nfa.isNumeric, false, undefined);
  testUtil.testFunc('isNumeric_true', nfa.isNumeric, false, true);
  testUtil.testFunc('isNumeric_false', nfa.isNumeric, false, false);
  testUtil.testFunc('isNumeric_arr', nfa.isNumeric, false, []);
  testUtil.testFunc('isNumeric_obj', nfa.isNumeric, false, {});
  testUtil.testFunc('isNumeric_NaN', nfa.isNumeric, false, NaN);
  testUtil.testFunc('isNumeric_emptyStr', nfa.isNumeric, false, "");
  testUtil.testFunc('isNumeric_dot', nfa.isNumeric, false, ".");

  testUtil.testFunc('round', nfa.round, 123, 123.456);
  testUtil.testFunc('round', nfa.round, 120, 123.456, -1);
  testUtil.testFunc('round', nfa.round, 123.5, 123.456, 1);

  testUtil.testFunc('add', nfa.add, 33, 11, 22);
  testUtil.testFunc('add', nfa.add, 11, 11, null);
  testUtil.testFunc('add', nfa.add, 22, null, 22);
  testUtil.testFunc('add', nfa.add, null, null, null);
  testUtil.testFunc('add', nfa.add, 'x', null, null, 'x');
  

  testUtil.showAllRs();
}
module.exports.test = test

