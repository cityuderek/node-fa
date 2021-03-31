
// let isShowAll = true;
// const setShowAll = b=>isShowAll = b
// module.exports.setShowAll = setShowAll

// const testFunc = (func, expVal, ...params) => {
//   let rs = func(...params);
//   let isExp = rs === expVal;
//   let msg = func.name + ", expVal=" + expVal + ", rs=" + rs + ", isExp=" + isExp + ", params=";
//   if(isShowAll){
//     console.log(msg, params);

//   }else if(!isExp){
//     console.log(msg, params);
//   }
// }
// module.exports.testFunc = testFunc;


//// number ///////////////////////////////////////////////////////////////////
const isExactNaN = (obj)=>obj !== obj;
module.exports.isExactNaN = isExactNaN;

const isNumeric = (n)=> {
  const ty = typeof(n);
  if(n === null || ty === 'boolean' || n === '' || Array.isArray(n)) return false; 
  return !isNaN(n) && !isNaN(parseFloat(n));
}
module.exports.isNumeric = isNumeric;

const add = (num1, num2, defVal = null)=>{
  const isNum1 = isNumeric(num1);
  const isNum2 = isNumeric(num2);
  if(!isNum1 && !isNum2) return defVal;
  return (isNum1 ? num1 : 0) + (isNum2 ? num2 : 0);
}
module.exports.add = add;

const round = (num, n = 0)=>{
  const base = Math.pow(10, n);
  const rounded = Math.round(num * base) / base;

  return rounded;
}
module.exports.round = round;

const gt0 = (num)=>parseFloat(num) > 0;
module.exports.gt0 = gt0;

const eg0 = (num)=>parseFloat(num) >= 0;
module.exports.eg0 = eg0;

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

const randInt = (min, max) =>{
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
module.exports.randInt = randInt;

//// float ///////////////////////////////////////////////////////////////////

const rand = (min, max) =>{
  return Math.random() * (max - min) + min;
}
module.exports.rand = rand;

const parseFloat = (str, defVal = 0)=>{
  let val = Number.parseFloat(str);
  return isNaN(val) ? defVal : val;
}
module.exports.parseFloat = parseFloat;

//// string ////////////////////////////////////////////////////////.////////////
const numNPercStr = (num, tot, decimal = 2, defVal = '')=>{
  if(num === null) return defVal;
  if(!tot || tot === '0') return num;
  // console.log(`typeof=${typeof(tot)}, tot=${tot}`);
  let prec = 100 * num / tot;
  // console.log(`num=${num}, tot=${tot}, decimal=${decimal}, defVal=${defVal}, prec=${prec} `, `${num} (${round(prec, decimal)}%)`);
  return `${num} (${round(prec, decimal)}%)`;
}
module.exports.numNPercStr = numNPercStr;