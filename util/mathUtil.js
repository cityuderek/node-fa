const testUtil = require('./testUtil');

const test = () => {
  console.log('mathUtil.test');
  testUtil.testFunc(Math.round, 123, null, 123.456);
}
module.exports.test = test

let isShowAll = true;
const setShowAll = b=>isShowAll = b
module.exports.setShowAll = setShowAll

const testFunc = (func, expVal, ...params) => {
  let rs = func(...params);
  let isExp = rs === expVal;
  let msg = func.name + ", expVal=" + expVal + ", rs=" + rs + ", isExp=" + isExp + ", params=";
  if(isShowAll){
    console.log(msg, params);

  }else if(!isExp){
    console.log(msg, params);
  }
}
module.exports.testFunc = testFunc


const round = (num, n = 0)=>{
  const base = Math.pow(10, n);
  const rounded = Math.round(num * base) / base;

  return rounded;
}
module.exports.round = round
