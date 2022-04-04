const objUtil = require("./objUtil");

//// get 1 /////////////////////////////////////////////////////////////////////
const arrFirst = (arr, defVal = null) => {
  if (!Array.isArray(arr) || arr.length === 0) return defVal;
  return arr[0];
};
module.exports.arrFirst = arrFirst;

const arrLast = (arr, defVal = null) => {
  if (!Array.isArray(arr) || arr.length === 0) return defVal;
  return arr[arr.length - 1];
};
module.exports.arrLast = arrLast;

const arrGetN = (arr, i, defVal = null) => {
  if (!Array.isArray(arr) || arr.length <= i) return defVal;
  return arr[i];
};
module.exports.arrGetN = arrGetN;

//// get N /////////////////////////////////////////////////////////////////////
const arrFirstN = (arr, n) => {
  return arr.slice(0, n);
};
module.exports.arrFirstN = arrFirstN;

const arrLastN = (arr, n) => {
  return arr.splice(arr.length - n);
};
module.exports.arrLastN = arrLastN;

const arrSkipFirstN = (arr, n) => {
  return arr.slice(n);
};
module.exports.arrSkipFirstN = arrSkipFirstN;

//// new ///////////////////////////////////////////////////////////////////////
const newArrA2z = (isLowerCase = true) => {
  var arr = [];
  let baseAscii = isLowerCase ? 97 : 65;
  for (let i = 0; i < 26; i++) {
    arr.push(String.fromCharCode(i + baseAscii));
  }
  return arr;
};
module.exports.newArrA2z = newArrA2z;

//// check /////////////////////////////////////////////////////////////////////
const isEmptyArr = (obj) => !isNonEmptyArr(obj);
module.exports.isEmptyArr = isEmptyArr;

const isNonEmptyArr = (obj) => Array.isArray(obj) && obj.length > 0;
module.exports.isNonEmptyArr = isNonEmptyArr;

//// array /////////////////////////////////////////////////////////////////////
const fixArrLen = (arr, targetLen, fillValue) => {
  if (arr.length > targetLen) {
    return arr.slice(0, targetLen);
  } else if (arr.length < targetLen) {
    return [...arr, ...Array(targetLen - arr.length).fill(fillValue)];
  }

  return arr;
};
module.exports.fixArrLen = fixArrLen;

const pushIfNotNull = (arr, item) => {
  if (item !== null) arr.push(item);
};
module.exports.pushIfNotNull = pushIfNotNull;

const kVArrToObj = (keys, vals) => {
  let obj = {};
  keys.forEach((key, i) => {
    obj[key] = vals[i];
  });
  return obj;
};
module.exports.kVArrToObj = kVArrToObj;

const arrInsertAt = (arr, val, index) => {
  arr.splice(index, 0, val);
};
module.exports.arrInsertAt = arrInsertAt;

const arrFindRank = (arr, field, val, isAsc = true) => {
  let i = -1;
  arr.some((el, index) => {
    if ((isAsc && el[field] > val) || (!isAsc && el[field] < val)) {
      i = index;
      return true;
    }
    return false;
  });
  return i;
};
module.exports.arrFindRank = arrFindRank;

const newArr = (arraySize, val) => {
  let arr = [];
  if (objUtil.isObj(val)) {
    while (arraySize--) arr.push(objUtil.clone(val));
  } else {
    // while(arraySize--) arr.push(val);
    arr = Array(arraySize).fill(val);
  }

  return arr;
};
module.exports.newArr = newArr;

const arrClone = (arr) => {};
module.exports.arrClone = arrClone;

//// filter //////////////////////////////////////////////////////////////////////
const arrFilter = (arr, keys) => {
  if (!Array.isArray(keys)) {
    keys = [keys];
  }
  return arr.filter((ele) => keys.some((ele2) => ele2 === ele));
};
module.exports.arrFilter = arrFilter;

const arrFilterNot = (arr, keys) => {
  if (!Array.isArray(keys)) {
    keys = [keys];
  }
  return arr.filter((ele) => !keys.some((ele2) => ele2 === ele));
};
module.exports.arrFilterNot = arrFilterNot;

const arrFilterNull = (arr) => {
  if (!Array.isArray(keys)) {
    return [];
  }
  return arr.filter((ele) => ele !== null);
};
module.exports.arrFilterNull = arrFilterNull;

//// remove all occurence
const arrRemoveEle = (arr, value) => {
  return arr.filter((ele) => ele !== value);
};
exports.arrRemoveEle = arrRemoveEle;

//// remove first occurence only
const arrRemoveEle1 = (arr, value, returnNullIfNotExist = false) => {
  var index = arr.indexOf(value);
  if (index !== -1) {
    arr = JSON.parse(JSON.stringify(arr)); // clone array
    arr.splice(index, 1);
    return arr;
  }
  return returnNullIfNotExist ? null : arr;
};
exports.arrRemoveEle1 = arrRemoveEle1;

const arrRemoveIfEmptyStr = (arr) => {
  return arr.filter((ele) => ele !== "");
};
exports.arrRemoveIfEmptyStr = arrRemoveIfEmptyStr;

const arrUnique = (arr) => {
  // console.log('arr', arr);
  // if(isUniqueFunc === null){
  //   isUniqueFunc = (arr, index) => {
  //     return arr.indexOf(arr[index]) === index;
  //   }
  // }
  // return arr.filter(isUniqueFunc);
  return [...new Set(arr)];
};
exports.arrUnique = arrUnique;

//// search //////////////////////////////////////////////////////////////////////
const indexOfVal = (arr, key, value) => {
  let i = 0;
  for (const item of arr) {
    // console.log(`i=${i}, value=${value}, item=${item[key]}`);
    if (item[key] === value) return i;
    i++;
  }
  return -1;
};
module.exports.indexOfVal = indexOfVal;

const arrContains = (arr, val) => {
  return arr.some((ele) => ele === val);
};
module.exports.arrContains = arrContains;

const arrMaxEleIdx = (items, cb) => {
  let maxVal = 0;
  let maxValIdx = 0;
  if (!items || items.length == 0) {
    return null;
  }
  items.forEach((item, i) => {
    let val = cb(item);
    if (val > maxVal) {
      maxVal = val;
      maxValIdx = i;
    }
  });
  return maxValIdx;
};
module.exports.arrMaxEleIdx = arrMaxEleIdx;

const arrMaxEleVal = (items, cb) => {
  let maxValIdx = arrMaxEleIdx(items, cb);
  return maxValIdx !== null ? cb(items[maxValIdx]) : null;
};
module.exports.arrMaxEleVal = arrMaxEleVal;

const arrMinEleIdx = (items, cb) => {
  let minVal = 0;
  let minValIdx = 0;
  if (!items || items.length == 0) {
    return null;
  }
  items.forEach((item, i) => {
    let val = cb(item);
    if (val < minVal) {
      minVal = val;
      minValIdx = i;
    }
  });
  return minValIdx;
};
module.exports.arrMinEleIdx = arrMinEleIdx;

const arrMinEleVal = (items, cb) => {
  let minValIdx = arrMinEleIdx(items, cb);
  return minValIdx !== null ? cb(items[minValIdx]) : null;
};
module.exports.arrMinEleVal = arrMinEleVal;

//// sort //////////////////////////////////////////////////////////////////////
const arrSort = (arr, key, isAsc = false) => {
  if (isAsc) {
    arr.sort((obj1, obj2) => {
      if (obj1[key] == obj2[key]) return 0;
      return obj1[key] > obj2[key] ? 1 : -1;
    });
  } else {
    arr.sort((obj1, obj2) => {
      if (obj1[key] == obj2[key]) return 0;
      return obj1[key] > obj2[key] ? -1 : 1;
    });
  }

  return arr;
};
module.exports.arrSort = arrSort;

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
  console.log("Array(" + title + ")=", arr.length);
  let showCnt = 0;
  arr.forEach((item, i) => {
    let isShow = !cond || cond(item);
    if (isShow) {
      console.log(`item(${i})=`, item);
      showCnt++;
    }
  });
  if (cond) {
    if (showCnt === arr.length) {
      console.log(`fulfillCnt/all=all`);
    } else {
      console.log(`fulfillCnt/all=${showCnt}/${arr.length}`);
    }
  }
};
module.exports.showArr = showArr;

//// other /////////////////////////////////////////////////////////////////////
const arrRandVal = (arr) => {
  if (!arr) return null;
  let idx = Math.floor(Math.random() * arr.length);

  return arr[idx];
};
module.exports.arrRandVal = arrRandVal;
