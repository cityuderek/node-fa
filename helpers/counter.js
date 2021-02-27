const nfa = require('../util/nfa')

let data = {}

const add = (obj)=>{
    if(typeof data[obj] == 'undefined'){
        data[obj] = 1;

    }else{
        data[obj]++;
    }
}
module.exports.add = add

const cnt = (obj)=>data[obj]
module.exports.cnt = cnt

const showAll = ()=>{
    if(nfa.isEmptyObj(data)){
        console.log('Counter empty');

    }else{
        console.log('Counter', data);
    }
}
module.exports.showAll = showAll