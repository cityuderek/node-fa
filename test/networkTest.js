const { nfa, networkUtil } = require('../util')
const { networkCacheHelper } = require('../helpers')
const testUtil = new (require('../util/TestUtil'))(false);

const test = async() => {
  console.log('networkTest.test');
  // testUtil.setShowAll(1);
  // testUtil.testFunc(nfa.isEqual, true, null, moment('2021-01-06'), moment('2021-01-06'));
  // testUtil.testFunc(nfa.isEqual, false, null, moment('2021-09-01'), moment('2021-01-06'));

  let url1 = 'https://api.myip.com';
  let json = null;
  // json = await networkUtil.httpGet(url1);
  // // console.log('json' + json, json);
  // testUtil.handleRs('networkUtil.httpGet', true, nfa.isNonEmptyObj(json), url1);
  
  // json = await networkUtil.getJson(url1);
  // // console.log('json', json);
  // testUtil.handleRs('networkUtil.httpGet', true, nfa.isNonEmptyStr(json.ip), url1);
  
  // json = await networkUtil.getJson(url1 + 'sss');
  // // console.log('json', json);
  // testUtil.handleRs('networkUtil.httpGet', false, nfa.isNonEmptyStr(json.ip), url1);

  // //// networkCacheHelper
  // // networkCacheHelper.setFolder('/Users/derek/Dropbox/projProperty/NetworkCacheHelper2');
  // networkCacheHelper.setFolder('D:\\Dropbox\\projProperty\\NetworkCacheHelper2');
  // json = await networkCacheHelper.httpGet(url1);
  // // console.log('json', json);
  // testUtil.handleRs('networkCacheHelper.httpGet', true, nfa.isNonEmptyObj(json), url1);
  
  // json = await networkCacheHelper.getJson(url1);
  // // console.log('json', json);
  // testUtil.handleRs('networkCacheHelper.httpGet', true, nfa.isNonEmptyStr(json.ip), url1);
  
  // json = await networkCacheHelper.getJson(url1 + 'sss');
  // // console.log('json', json);
  // testUtil.handleRs('networkCacheHelper.httpGet', false, nfa.isNonEmptyStr(json.ip), url1);

  testUtil.showAllRs();
}
module.exports.test = test