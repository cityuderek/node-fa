const objUtil = require('./objUtil');

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

    let isExp = objUtil.isEqual(actVal, expVal);
    let expValLen = objUtil.length(expVal);
    let actValLen = objUtil.length(actVal);
    // if(!isExp){
    //   const moment = require('moment');
    //   console.log('~', moment(actVal).isSame(expVal));
    // }
    let msg = (isExp ? 'OK  ': 'FAIL') + ", case=" + caseName + 
    ", expVal(" + objUtil.getDetailType(expVal) + (expValLen ? ', ' + expValLen : '') + ")=" + expVal + 
    ", actVal(" + objUtil.getDetailType(actVal) + (actValLen ? ', ' + actValLen : '') + ")=" + actVal;
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
    if(objUtil.isEmptyObj(this.rsData)){
        console.log('Counter empty');

    }else{
        console.log('Counter', this.rsData);
    }
  }
}

module.exports = TestUtil