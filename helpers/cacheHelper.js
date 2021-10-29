// const { nfa, fileUtil, networkUtil } = require('../util');

let modData = {
  data: {}
}

const test = ()=>{
  setVal("main", "name", "fish");
  console.log('getVal_main_name', getVal("main", "name"));
  console.log('getVal_main_xxx', getVal("main", "xxx"));
  console.log('getVal_xxx_xxx', getVal("xxx", "xxx"));
};
exports.test = test;

//// Cache Helper /////////////////////////////////////////////////////////
const setVal = (group, key, val)=>{
  if(typeof modData.data[group] !== 'undefined'){
    modData.data[group] = {};
  }
  modData.data[group][key] = val;
}
module.exports.setVal = setVal;

const getVal = (group, key, defVal = null)=>{
  if(typeof modData.data[group][key] !== 'undefined'){
    return modData.data[group][key];
  }
  return defVal;
}
module.exports.getVal = getVal;
