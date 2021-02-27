const nfa = require('./nfa');

const test = () => {
  console.log(__filename + '.test');
  // testUtil.testFunc(Math.round, 123, null, 123.456);
}
module.exports.test = test

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