const { nfa, testUtil, networkUtil } = require('../util')

const test = async() => {
  console.log('networkTest.test');
  // testUtil.setShowAll(1);
  testUtil.resetRs();
  // testUtil.testFunc(nfa.isEqual, true, null, moment('2021-01-06'), moment('2021-01-06'));
  // testUtil.testFunc(nfa.isEqual, false, null, moment('2021-09-01'), moment('2021-01-06'));

  let url1 = 'https://api.myip.com';
  let json = await networkUtil.getCtt(url1);
  // console.log('json' + json, json);
  testUtil.handleRs('networkUtil.getCtt', true, nfa.isNonEmptyObj(json), url1);
  
  json = await networkUtil.getJson(url1);
  // console.log('json', json);
  testUtil.handleRs('networkUtil.getCtt', true, nfa.isNonEmptyStr(json.ip), url1);
  
  json = await networkUtil.getJson(url1 + 'sss');
  // console.log('json', json);
  testUtil.handleRs('networkUtil.getCtt', false, nfa.isNonEmptyStr(json.ip), url1);


  testUtil.showAllRs();
}
module.exports.test = test