
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


//// number ///////////////////////////////////////////////////////////////////
const round = (num, n = 0)=>{
  const base = Math.pow(10, n);
  const rounded = Math.round(num * base) / base;

  return rounded;
}
module.exports.round = round


//// integer ///////////////////////////////////////////////////////////////////
const parseInt = (param1)=>{
  if(typeof param1 === 'string'){
    param1 = param1.trim().toLowerCase();
    if(param1.endsWith('k')){
      return param1.substr(0, param1.length -1) * 1000;

    }else if(param1.endsWith('m')){
      return param1.substr(0, param1.length -1) * 1000000;
    }
  }

  let n = Number.parseInt(param1);
  if(isNaN(n)) n = 0;
  return n;
};
module.exports.parseInt = parseInt;

const parseIntRndK = (str)=>{
  let n = parseInt(str) / 1000;
  // console.log(`n=${n}`);
  return Math.round(n);
};
module.exports.parseIntRndK = parseIntRndK;

const parseIntRnd = (str)=>{
  let n = parseInt(str);
  // console.log(`n=${n}`);
  return Math.round(n);
};
module.exports.parseIntRnd = parseIntRnd;

//// float ///////////////////////////////////////////////////////////////////