console.clear();
const { nfa } = require('../util');
const { testUtil } = require('../util');
const test = require('../test');

// console.log('dtUtil1', dtUtil);
// console.log('util=', util);
// console.log(`nfa ` + nfa)
// console.log(`str ` + nfa.strCamelize('fish wav'))
// console.log(`str ` + nfa.isEqual('fish', 'fish'))

Object.keys(test).forEach(key=>{
    let testMod = test[key];
    if(typeof testMod.test == 'function'){
        console.log(`\ntestMod=${key}`);
        testMod.test()
    }
})


// nfa.test();
// mathUtil.test();
// testUtil.test();