
// const fs = require("fs");
// const path = require("path");
// const glob = require("glob");
const nfa = require("../util/nfa");

const test = async () => {
  // let startTs = Date.now();
  // console.log(`timeUsedMs=` + (Date.now() - startTs));

  // console.log(rsToXls(rs));
  // console.log(`rs=`, rs);
};
exports.test = test;

var staticData = {};
exports.staticData = staticData;

const check = (txt, options = {}) => {
  // let { isWin = null } = options;
  let rs = {};
  let hasLf = txt.includes("\n");
  let result = "Nothing";
  if(hasLf){
    let hasCrlf = txt.includes("\r\n");
    console.log(`hasCrlf=${hasCrlf}`);
    if(hasCrlf){
      var count1 = (temp.match(/\r/g) || []).length;
      var count2 = (temp.match(/\r\n/g) || []).length;
      if(count1 == count2){
        result = "CRLF";
      }else{
        result = "Both";
      }
    }else{
      result = "LF";
    }
  }

  display = txt.replaceAll("\n", "LF\n");
  display = display.replaceAll("\rLF\n", "CRLF\r\n");
  
  rs.result = result;
  rs.display = display;

  return rs;
};
exports.check = check;
