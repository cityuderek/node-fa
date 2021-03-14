const objUtil = require('./objUtil')

//// array /////////////////////////////////////////////////////////////////////
const fixArrLen = (arr, targetLen, fillValue) =>{
  if(arr.length > targetLen){
    return arr.slice(0, targetLen);

  }else if(arr.length < targetLen){
    return [...arr, ...Array(targetLen - arr.length).fill(fillValue)];
  }

  return arr;
}

const pushIfNotNull = (arr, item)=>{
  if(item !== null) arr.push(item);
};
module.exports.pushIfNotNull = pushIfNotNull;

const kVArrToObj = (keys, vals)=>{
  let obj = {};
  keys.map((key, i)=>{
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
  arr.map(item=>{
      console.log('item=', item);
  })
}
module.exports.show = show


const showArr = (arr, title = undefined, options = {}) => {
  const { cond } = options;
  console.log('Array(' + title + ')=', arr.length);
  let showCnt = 0;
  arr.map((item, i)=>{
    let isShow = !cond || cond(item);
    if(isShow){
      console.log(`item(${i})=`, item);
      showCnt++;
    }
  });
  if(cond){
    if(showCnt == arr.length){
      console.log(`fulfillCnt/all=all`);

    }else{
      console.log(`fulfillCnt/all=${showCnt}/${arr.length}`);
    }
  }
};
module.exports.showArr = showArr
// module.exports = { kVArrToObj }