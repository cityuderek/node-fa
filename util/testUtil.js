const nfa = require('./nfa');

console.log('load testUtil');
console.log(`str ` + nfa.strCamelize('fish wav'))
console.log(`str ` + nfa.isEqual('fish', 'fish'))

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
  let rs = func(...params)
  let isExp = nfa.isEqual(rs, expVal)
  let msg = (isExp ? 'OK  ': 'FAIL') + ", func=" + func.name + ", expVal=" + expVal + ", rs=" + rs + ", params="
  const showRs = (msg, paramName, params)=>{
    if(paramName === null){
      console.log(msg, params);

    }else{
      console.log(msg + paramName);
    }
  }
  if(isShowAll || !isExp){
    showRs(msg, paramName, params);
  }
  addRs(isExp)

  return isExp;
}
module.exports.testFunc = testFunc

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