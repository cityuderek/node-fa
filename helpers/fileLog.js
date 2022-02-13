// const { nfa, fileUtil, networkUtil } = require('../util');
const fs = require('fs');

let modData = {
  path: null,
  useConsoleLog: false,
};

const test = () => {
  setVal("main", "name", "fish");
  console.log("getVal_main_name", getVal("main", "name"));
  console.log("getVal_main_xxx", getVal("main", "xxx"));
  console.log("getVal_xxx_xxx", getVal("xxx", "xxx"));
};
exports.test = test;

//// Cache Helper /////////////////////////////////////////////////////////
const init = (path, useConsoleLog = false) => {
  modData.path = path;
  modData.useConsoleLog = useConsoleLog;
};
module.exports.init = init;

const logd = (txt) => {
  fs.appendFileSync(modData.path, txt + "\n");
};
module.exports.logd = logd;
