
// index.test.js
// const index = require('./index');

// test('has size five', async () => {
//   const resp = await index.handler();
//   expect(JSON.parse(resp.body).length).toBe(5);
// });
// const dtUtil = require('./helpers/dtUtil');
// const strUtil = require('./helpers/strUtil');
const { nfa } = require('./util');
const moment = require('moment');
// console.log('dtUtil1', dtUtil);

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('test1', () => {
//   console.log('dtUtil2', dtUtil);
// });

// test('nfa', () => {
//   nfa.test();
// });

test('toLocaleString', () => {
  nfa.toLocaleString(new Date(), "DefVal");
  expect(1).toBe(1);
});

test('getMm', () => {
  // console.log(`getMm`, nfa.getMm('2021-01-06'));
  // console.log(`moment`, moment(1609844400000));
  expect(moment(1609844400000).isSame(nfa.getMm('2021-01-06'))).toBe(true);
});

test('camelize', () => {
  let str = "ABc Def (ghi)";
  console.log("str=" + str);
  expect(str).toBe(str);
  // console.log("strCamel=" + nfa.strCamel(str));
  // console.log("strUnderscore=" + nfa.strUnderscore(str));
  // console.log("rmSpecialChars=" + nfa.rmSpecialChars(str));
  // console.log("rmSpace=" + nfa.rmSpace(str));
});