const nfa = require('./nfa');

const test = () => {
  console.log(__filename + '.test');
  // testUtil.testFunc(Math.round, 123, null, 123.456);
}
module.exports.test = test

//// array /////////////////////////////////////////////////////////////////////
const showArr = (arr, title = undefined) => {
  console.log('Array(' + title + ')=', arr.length);
  arr.map(item=>{
      console.log('item=', item);
  })
};
module.exports.showArr = showArr

const pushIfNotNull = (arr, item)=>{
  if(item !== null) arr.push(item);
};
module.exports.pushIfNotNull = pushIfNotNull;

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
  if(nfa.isObj(val)){
      while(arraySize--) arr.push(nfa.clone(val))

  }else{
      while(arraySize--) arr.push(val);
  }

  return arr;
}
module.exports.newArr = newArr

const show = (arr, title = "")=>{
  console.log('Array(' + title + ')=', arr.length);
  arr.map(item=>{
      console.log('item=', item);
  })
}
module.exports.show = show

// module.exports = { kVArrToObj }