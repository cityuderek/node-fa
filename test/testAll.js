const { nfa, dtUtil, strUtil, mathUtil, testUtil } = require('../util');
const test = require('../test');

// console.log('dtUtil1', dtUtil);
// console.log('util=', util);

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