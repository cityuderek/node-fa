const { nfa } = require('../util');
const { testUtil } = require('../util');
const test = require('../test');

// console.log('dtUtil1', dtUtil);
// console.log('util=', util);
// console.log(`nfa ` + nfa)
// console.log(`str ` + nfa.strCamelize('fish wav'))
// console.log(`str ` + nfa.isEqual('fish', 'fish'))

const main = async ()=>{
  console.clear();
  console.log('testAll ' + nfa.nowDtmStr());

  const isShowAll = 0;
  testUtil.setShowAll(isShowAll);
  for(const key of Object.keys(test)){
      let testMod = test[key];
      if(typeof testMod.test == 'function'){
          console.log(`\ntestMod=${key}`);
          await testMod.test()
      }
  }
}
main();

// nfa.test();
// mathUtil.test();
// testUtil.test();