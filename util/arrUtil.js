const objUtil = require('./objUtil')

//// get 1 /////////////////////////////////////////////////////////////////////
const first = (arr, defVal = null) =>{
  if(!Array.isArray(arr) || arr.length === 0) return defVal;
  return arr[0];
}
module.exports.first = first;

const last = (arr, defVal = null) =>{
  if(!Array.isArray(arr) || arr.length === 0) return defVal;
  return arr[arr.length - 1];
}
module.exports.last = last;

const arrGetN = (arr, i, defVal = null) =>{
  if(!Array.isArray(arr) || arr.length <= i) return defVal;
  return arr[i];
}
module.exports.arrGetN = arrGetN;

//// get N /////////////////////////////////////////////////////////////////////
const firstN = (arr, n) =>{
  return arr.slice(0, n);
}
module.exports.firstN = firstN;

const lastN = (arr, n) =>{
  return arr.splice(arr.length - n);
}
module.exports.lastN = lastN;

const skipFirstN = (arr, n) =>{
  return arr.slice(n);
}
module.exports.skipFirstN = skipFirstN;

//// check /////////////////////////////////////////////////////////////////////
const isEmptyArr = obj=>!isNonEmptyArr(obj);
module.exports.isEmptyArr = isEmptyArr;

const isNonEmptyArr = obj=>Array.isArray(obj) && obj.length > 0;
module.exports.isNonEmptyArr = isNonEmptyArr;

//// array /////////////////////////////////////////////////////////////////////
const fixArrLen = (arr, targetLen, fillValue) =>{
  if(arr.length > targetLen){
    return arr.slice(0, targetLen);

  }else if(arr.length < targetLen){
    return [...arr, ...Array(targetLen - arr.length).fill(fillValue)];
  }

  return arr;
}
module.exports.fixArrLen = fixArrLen;

const pushIfNotNull = (arr, item)=>{
  if(item !== null) arr.push(item);
};
module.exports.pushIfNotNull = pushIfNotNull;

const kVArrToObj = (keys, vals)=>{
  let obj = {};
  keys.forEach((key, i)=>{
      obj[key] = vals[i];
  })
  return obj;
}
module.exports.kVArrToObj = kVArrToObj

const newArr = (arraySize, val)=>{
  let arr = [];
  if(objUtil.isObj(val)){
      while(arraySize--) arr.push(objUtil.clone(val))

  }else{
      // while(arraySize--) arr.push(val);
      arr = Array(arraySize).fill(val);
  }

  return arr;
}
module.exports.newArr = newArr

//// search //////////////////////////////////////////////////////////////////////
const indexOfVal = (arr, key, value) => {
  let i = 0;
  for(const item of arr){
    // console.log(`i=${i}, value=${value}, item=${item[key]}`);
    if (item[key] === value) return i;
    i++;
  }
  return -1;
}
module.exports.indexOfVal = indexOfVal;

//// show //////////////////////////////////////////////////////////////////////
const show = (arr, title = "")=>{
  console.log('Array(' + title + ')=', arr.length);
  arr.forEach(item=>{
      console.log('item=', item);
  })
}
module.exports.show = show


const showArr = (arr, title = undefined, options = {}) => {
  const { cond } = options;
  console.log('Array(' + title + ')=', arr.length);
  let showCnt = 0;
  arr.forEach((item, i)=>{
    let isShow = !cond || cond(item);
    if(isShow){
      console.log(`item(${i})=`, item);
      showCnt++;
    }
  });
  if(cond){
    if(showCnt === arr.length){
      console.log(`fulfillCnt/all=all`);

    }else{
      console.log(`fulfillCnt/all=${showCnt}/${arr.length}`);
    }
  }
};
module.exports.showArr = showArr
// module.exports = { kVArrToObj }