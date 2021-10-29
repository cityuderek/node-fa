const _ = require('lodash');
const moment = require('moment');
// console.log('load testUtil');

// const test = () => {
//   console.log('testUtil.test');
//   testFunc(Math.round, 123, null, 123.456);
// }

class TestUtil {
  isShowAll;
  rsData = {};

  constructor(isShowAll = true){
    this.isShowAll = isShowAll;
  }


  //// util
  setShowAll = b=>this.isShowAll = b;

  testFunc = (caseName, func, expVal, ...params) => {
    
    if(typeof func !== 'function'){
      console.log(`caseName=${caseName}, func is not a function; type=` + typeof func);  
      return false;
    }
    let rs = func(...params);
    return this.handleRs(caseName, expVal, rs, ...params);
  }

  handleRs = (caseName, expVal, actVal, ...params) => {
    // const showRs = (msg, paramName, params)=>{
    //   if(paramName === null){
    //     console.log(msg, params);

    //   }else{
    //     console.log(msg + paramName);
    //   }
    // }

    let isExp = isEqual(actVal, expVal);
    let expValLen = length(expVal);
    let actValLen = length(actVal);
    // if(!isExp){
    //   const moment = require('moment');
    //   console.log('~', moment(actVal).isSame(expVal));
    // }
    let msg = (isExp ? 'OK  ': 'FAIL') + ", case=" + caseName + 
    ", expVal(" + getDetailType(expVal) + (expValLen ? ', ' + expValLen : '') + ")=" + expVal + 
    ", actVal(" + getDetailType(actVal) + (actValLen ? ', ' + actValLen : '') + ")=" + actVal;
    if(this.isShowAll || !isExp){
      console.log(msg);
      // showRs(msg, paramName, params);
    }
    this.addRs(isExp)
    return isExp;
  }

  //// counter
  addRs = (obj)=>{
    if(typeof this.rsData[obj] === 'undefined'){
      this.rsData[obj] = 1;

    }else{
      this.rsData[obj]++;
    }
  }

  rsCnt = (obj)=>typeof this.rsData[obj] === 'undefined' ? 0: this.rsData[obj]

  resetRs = (obj)=>{ this.rsData = {} }

  showAllRs = ()=>{
    if(isEmptyObj(this.rsData)){
        console.log('Counter empty');

    }else{
        console.log('Counter', this.rsData);
    }
  }
}

module.exports = TestUtil


const getDetailType = (obj) =>{
  if(obj === null) return 'null';
  if(obj !== obj) return 'NaN';
  const ty = typeof obj;
  if(ty === 'object'){
    if(obj instanceof Date) return 'Date';
    if(Array.isArray(obj)) return 'array';

  }else if(ty === 'number'){
    if(Number.isInteger(obj)) return 'integer';
  }
  
  return ty;
}

const isEqual = (obj1, obj2)=>{
  let rs = _.isEqual(obj1, obj2);
  if(rs) return true;
  if(moment.isMoment(obj1)){
    return obj1.isSame(obj2);
  }

  return false;
}

const length = (obj) =>{
  if(typeof obj === 'string') return obj.length;
  if(Array.isArray(obj)) return obj.length;

  return 0;
}

const isEmptyObj = obj=>typeof obj === 'object' && Object.keys(obj).length === 0;