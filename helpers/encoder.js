
const fs = require("fs");
const path = require("path");
const glob = require("glob");
const nfa = require("../util/nfa");

const test = async () => {
  let str = "backslash\\slash/newLineRN\r\nnewLineN\ndoubleQuote\"singleQuote'fftab	ffff";

  console.log("escape_getSqlStrOptions=" + escape(str, getSqlStrOptions()));
  console.log("escape_getJsonStrOptions=" + escape(str, getJsonStrOptions()));
  // console.log(`rs=`, rs);
};
exports.test = test;

var staticData = {};
exports.staticData = staticData;

//// TODO html encode
//// TODO URL encode

const escape = (str, options = {}) => {
  let {isSlash, isNewLine, isSingleQuote, isDoubleQuote, isSingleQuote2, isDoubleQuote2, isBackSlash, isTab} = options;
  
  if(isSlash){
    str = str.replaceAll("\\", "\\\\");
  }
  if(isNewLine){
    str = str.replaceAll("\r\n", "\\r\\n");
    str = str.replaceAll("\n", "\\n");
  }
  if(isSingleQuote){
    str = str.replaceAll("'", "\\'");
  }else if(isSingleQuote2){
    str = str.replaceAll("'", "''");
  }
  if(isDoubleQuote){
    str = str.replaceAll("\"", "\\\"");
  }else if(isDoubleQuote2){
    str = str.replaceAll("\"", "\"\"");
  }
  if(isBackSlash){
    str = str.replaceAll("/", "\\/");
  }
  if(isTab){
    str = str.replaceAll("\t", "\\t");
  }

  return str;
};
exports.escape = escape;

const unescape = (str, options = {}) => {
  let {isSlash, isNewLine, isSingleQuote, isDoubleQuote, isSingleQuote2, isDoubleQuote2, isBackSlash, isTab} = options;
  
  if(isTab){
    str = str.replaceAll("\\t", "\t");
  }
  if(isBackSlash){
    str = str.replaceAll("\\/", "/");
  }
  if(isDoubleQuote){
    str = str.replaceAll("\\\"", "\"");
  }else if(isDoubleQuote2){
    str = str.replaceAll("\"\"", "\"");
  }
  if(isSingleQuote){
    str = str.replaceAll("\\'", "'");
  }else if(isSingleQuote2){
    str = str.replaceAll("''", "'");
  }
  if(isNewLine){
    str = str.replaceAll("\\r\\n", "\r\n");
    str = str.replaceAll("\\n", "\n");
  }
  if(isSlash){
    str = str.replaceAll("\\\\", "\\");
  }

  return str;
};
exports.unescape = unescape;

const getSqlStrOptions = () => {
  let options = {};
  options.isNewLine = true;
  options.isSingleQuote = true;

  return options;
};
exports.getSqlStrOptions = getSqlStrOptions;

const getJsonStrOptions = () => {
  let options = {};
  options.isNewLine = true;
  options.isDoubleQuote = true;

  return options;
};
exports.getJsonStrOptions = getJsonStrOptions;
