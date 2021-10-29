// const nfa = require('../util/nfa');;
const nfa = require('../util/nfa');
const test = require('../test');
// const testUtil = new (require('../util/TestUtil'))(false);

// console.log('dtUtil1', dtUtil);
// console.log('util=', util);
// console.log(`nfa ` + nfa)
// console.log(`str ` + nfa.strCamelize('fish wav'))
// console.log(`str ` + nfa.isEqual('fish', 'fish'))

const main = async ()=>{
  console.clear();
  console.log('nfa ',  nfa);
  console.log('testAll ' + nfa.nowDtmStr());
  let testModules = getTestModules();

  // testModules = ['objTest'];
  console.log(`testModules=`, testModules);

  const isShowAll = 0;
  // testUtil.setShowAll(isShowAll);
  for(const key of testModules){
      let testMod = test[key];
      if(typeof testMod.test == 'function'){
          console.log(`\ntestMod=${key}`);
          await testMod.test()
      }
  }
}
exports.main = main;

const getTestModules = ()=>{
  let mods = [];
  for(const key of Object.keys(test)){
      let testMod = test[key];
      if(typeof testMod.test == 'function'){
        mods.push(key);
      }
  }
  return mods;
}
// nfa.test();
// mathUtil.test();
// testUtil.test();
// main();