const objUtil = require('./objUtil')

//// get 1 /////////////////////////////////////////////////////////////////////
const arrFirst = (arr, defVal = null) =>{
  if(!Array.isArray(arr) || arr.length === 0) return defVal;
  return arr[0];
}
module.exports.arrFirst = arrFirst;

const arrLast = (arr, defVal = null) =>{
  if(!Array.isArray(arr) || arr.length === 0) return defVal;
  return arr[arr.length - 1];
}
module.exports.arrLast = arrLast;

const arrGetN = (arr, i, defVal = null) =>{
  if(!Array.isArray(arr) || arr.length <= i) return defVal;
  return arr[i];
}
module.exports.arrGetN = arrGetN;

//// get N /////////////////////////////////////////////////////////////////////
const arrFirstN = (arr, n) =>{
  return arr.slice(0, n);
}
module.exports.arrFirstN = arrFirstN;

const arrLastN = (arr, n) =>{
  return arr.splice(arr.length - n);
}
module.exports.arrLastN = arrLastN;

const arrSkipFirstN = (arr, n) =>{
  return arr.slice(n);
}
module.exports.arrSkipFirstN = arrSkipFirstN;

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

//// filter //////////////////////////////////////////////////////////////////////
const arrFilter = (arr, keys) => {
  if(!Array.isArray(keys)){
    keys = [keys];
  }
  return arr.filter(ele=>keys.some(ele2 => ele2 === ele))
}
module.exports.arrFilter = arrFilter;

const arrFilterNot = (arr, keys) => {
  if(!Array.isArray(keys)){
    keys = [keys];
  }
  return arr.filter(ele=>!keys.some(ele2 => ele2 === ele))
}
module.exports.arrFilterNot = arrFilterNot;

const arrRemoveIf = (arr, key) => {
  return arr.filter(ele=>ele !== key)
}
exports.arrRemoveIf = arrRemoveIf;

const arrRemoveIfEmptyStr = (arr) => {
  return arr.filter(ele=>ele !== "")
}
exports.arrRemoveIfEmptyStr = arrRemoveIfEmptyStr;

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

const arrContains = (arr, val) => {
  return arr.some(ele => ele === val)
}
module.exports.arrContains = arrContains;

const arrMaxEleIdx = (items, cb)=>{
  let maxVal = 0;
  let maxValIdx = 0;
  if(!items || items.length == 0) {
    return null;
  }
  items.forEach((item, i) => {
    let val = cb(item);
    if(val > maxVal){
      maxVal = val;
      maxValIdx = i;
    }
  });
  return maxValIdx;
}
module.exports.arrMaxEleIdx = arrMaxEleIdx;

const arrMaxEleVal = (items, cb)=>{
  let maxValIdx = arrMaxEleIdx(items, cb);
  return maxValIdx !== null ? cb(items[maxValIdx]) : null;
}
module.exports.arrMaxEleVal = arrMaxEleVal;

const arrMinEleIdx = (items, cb)=>{
  let minVal = 0;
  let minValIdx = 0;
  if(!items || items.length == 0) {
    return null;
  }
  items.forEach((item, i) => {
    let val = cb(item);
    if(val < minVal){
      minVal = val;
      minValIdx = i;
    }
  });
  return minValIdx;
}
module.exports.arrMinEleIdx = arrMinEleIdx;

const arrMinEleVal = (items, cb)=>{
  let minValIdx = arrMinEleIdx(items, cb);
  return minValIdx !== null ? cb(items[minValIdx]) : null;
}
module.exports.arrMinEleVal = arrMinEleVal;

//// show //////////////////////////////////////////////////////////////////////
// const show = (arr, title = "")=>{
//   console.log('Array(' + title + ')=', arr.length);
//   arr.forEach(item=>{
//       console.log('item=', item);
//   })
// }
// module.exports.show = show

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