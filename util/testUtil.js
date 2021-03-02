const nfa = require('./nfa');

// console.log('load testUtil');
// console.log(`str ` + nfa.strCamelize('fish wav'))
// console.log(`str ` + nfa.isEqual('fish', 'fish'))

const test = () => {
  console.log('testUtil.test');
  testFunc(Math.round, 123, null, 123.456);
}
module.exports.test = test

let isShowAll = true;
let rsData = {};

//// util
const setShowAll = b=>isShowAll = b
module.exports.setShowAll = setShowAll

const testFunc = (func, expVal, paramName = null, ...params) => {
  let rs = func(...params);
  return handleRs(func.name, expVal, rs, paramName, ...params);
}
module.exports.testFunc = testFunc

const handleRs = (funcName, expVal, actVal, paramName = null, ...params) => {
  const showRs = (msg, paramName, params)=>{
    if(paramName === null){
      console.log(msg, params);

    }else{
      console.log(msg + paramName);
    }
  }

  let isExp = nfa.isEqual(actVal, expVal);
  let expValLen = nfa.length(expVal);
  let actValLen = nfa.length(actVal);
  // if(!isExp){
  //   const moment = require('moment');
  //   console.log('~', moment(actVal).isSame(expVal));
  // }
  let msg = (isExp ? 'OK  ': 'FAIL') + ", func=" + funcName + 
  ", expVal(" + nfa.getType(expVal) + (expValLen ? ', ' + expValLen : '') + ")=" + expVal + 
  ", actVal(" + nfa.getType(actVal) + (actValLen ? ', ' + actValLen : '') + ")=" + actVal + 
  ", params=";
  if(isShowAll || !isExp){
    showRs(msg, paramName, params);
  }
  addRs(isExp)
  return isExp;
}
module.exports.handleRs = handleRs

//// counter
const addRs = (obj)=>{
  if(typeof rsData[obj] === 'undefined'){
    rsData[obj] = 1;

  }else{
    rsData[obj]++;
  }
}
module.exports.addRs = addRs

const rsCnt = (obj)=>typeof rsData[obj] === 'undefined' ? 0: rsData[obj]
module.exports.rsCnt = rsCnt

const resetRs = (obj)=>{ rsData = {} }
module.exports.resetRs = resetRs

const showAllRs = ()=>{
  if(nfa.isEmptyObj(rsData)){
      console.log('Counter empty');

  }else{
      console.log('Counter', rsData);
  }
}
module.exports.showAllRs = showAllRs