const { nfa, networkUtil } = require('../util')
const { timer, networkCacheHelper } = require('../helpers')
const testUtil = new (require('../util/TestUtil'))(false);

const test = async() => {
  console.log('timerTest.test' + Date.now());
  // testUtil.testFunc(nfa.round, 123.5, null, 123.456, 1);
  let json;
  let url1 = 'https://api.myip.com';
  
  timer.start();
  json = await networkUtil.getJson(url1);
  console.log('timeUsed=' + timer.stop());
  console.log('timerTest.test' + Date.now());

  timer.start();
  json = await networkCacheHelper.getJson(url1);
  console.log('timeUsed=' + timer.stop());
  console.log('timerTest.test' + Date.now());
  

  testUtil.showAllRs();
}
module.exports.test = test

