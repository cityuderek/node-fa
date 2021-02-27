
// index.test.js
// const index = require('./index');

// test('has size five', async () => {
//   const resp = await index.handler();
//   expect(JSON.parse(resp.body).length).toBe(5);
// });
// const dtUtil = require('./helpers/dtUtil');
// const strUtil = require('./helpers/strUtil');
const nfa = require('./');
const { dtUtil, strUtil } = require('./util');
// console.log('dtUtil1', dtUtil);

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('test1', () => {
//   console.log('dtUtil2', dtUtil);
// });

test('nfa', () => {
  nfa.test();
});

test('toLocaleString', () => {
  dtUtil.toLocaleString(new Date(), "DefVal");
});

test('camelize', () => {
  let str = "ABc Def (ghi)";
  console.log("str=" + str);
  console.log("camelize=" + strUtil.camelize(str));
  console.log("underscore=" + strUtil.underscore(str));
  console.log("rmSpecialChars=" + strUtil.rmSpecialChars(str));
  console.log("rmSpace=" + strUtil.rmSpace(str));
});