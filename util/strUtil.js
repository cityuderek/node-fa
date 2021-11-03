const arrUtil = require('./arrUtil');

//// handle empty /////////////////////////////////////////////////////////////////////
const ifStrEmpty = (obj, defVal = "", prepend = "", append = "")=>{
  if(obj === null) return defVal;
  if(typeof(obj) === 'undefined') return defVal;
  if(obj === "") return defVal;
  return prepend + obj + append;
};
exports.ifStrEmpty = ifStrEmpty;

const isStr = (str)=>str !== null && str !== undefined && str !== str;    // str !== str check NaN
exports.isStr = isStr;

const isEmptyStr = (str, matchType = true)=>{
  return !isNonEmptyStr(str, matchType);
};
exports.isEmptyStr = isEmptyStr;

const isNonEmptyStr = (str, matchType = true)=>{
  if(matchType){
    return typeof str === 'string' && str.length > 0;
  }

  if(str === null || str === undefined || str !== str) return false;
  return (str + '').length > 0;
};
exports.isNonEmptyStr = isNonEmptyStr;

//// check /////////////////////////////////////////////////////////////////////
const containsStr = (str, needle)=>{
  return str.includes(needle);
}
exports.containsStr = containsStr;

//// count /////////////////////////////////////////////////////////////////////
const countOccurrence = (str, regex)=>{
  return (str.match(regex) || []).length;
}
exports.countOccurrence = countOccurrence;

//// split /////////////////////////////////////////////////////////////////////
const split = (str, seperator, targetLen) =>{
  let strs = str.split(seperator);
  return arrUtil.fixArrLen(strs, targetLen, '');
}
exports.split = split;

const splitLine = (str) =>{
  return str.split(/\r?\n/);
}
exports.splitLine = splitLine;

const cutStrBefore = (str, key, n = 1) =>{
  // console.log('str', str);
  // const regex = new RegExp("(.*" + key + "){" + n + "}(.+)");
  // const rs = regex.exec(str);
  // // console.log(`exec`, regex, str);
  // // console.log('str', str);
  // console.log('rs', rs);
  // return rs ? rs[n] : "";

  // let rs = new RegExp("(.*c){" + i + "}(.+)").exec(str);
  // str = rs ? rs[i] : "";
  if(str === null) return "";
  const regex = new RegExp(".*" + key);
  while(n > 0 && str !== ""){
    str = str.replace(regex, "");
    n--;
  }
  return str;
  // console.log(`str2`, str.replace(/.*\n/, ""));
}
exports.cutStrBefore = cutStrBefore;

//// concat ////////////////////////////////////////////////////////////////////
const concat = (str1, str2, seperator = ', ') =>{
  const isNonEmptyStr1 = isNonEmptyStr(str1, false);
  const isNonEmptyStr2 = isNonEmptyStr(str2, false);
  if(!isNonEmptyStr1 && !isNonEmptyStr2) return "";
  if(!isNonEmptyStr1) return str2;
  if(!isNonEmptyStr2) return str1;
  return str1 + seperator + str2;
}
exports.concat = concat;

//// format ////////////////////////////////////////////////////////////////////
const ucwords = (data)=>{
  data = data.toLowerCase();
  return data.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
  	function(s){
  	  return s.toUpperCase();
	});
};
exports.ucwords = ucwords;

const lcfirst = (data)=>{
  if(!data || data.length < 1){
    return data;
  }
  return data.charAt(0).toLowerCase() + data.substr(1);
};
exports.lcfirst = lcfirst;

const strCamel = (data)=>{
  if(Array.isArray(data)){
    let arr = [];
    data.forEach(str=>{
      arr.push(strCamel(str));
    })
    return arr;
  }

  return lcfirst(strStudly(data));
}
exports.strCamel = strCamel;

const strStudly = (data)=>{
  return ucwords(data.replace(/[-_]/g, ' ')).trim()
    .replace(/ /g, '');
};
exports.strStudly = strStudly;

const strSnake = (data)=>{
  return data.replace(/[- ]+/g, '_')
    .replace(/(?<=\d)(?=[A-Za-z])|(?<=[A-Za-z])(?=\d)|(?<=[a-z])(?=[A-Z])/g, '_')
    .toLowerCase();
};
exports.strSnake = strSnake;

const strConstant = (data)=>{
  data = strSnake(data);
  return data.toUpperCase();
};
exports.strConstant = strConstant;

const strDash = (data)=>{
  data = data.replace(/[_ ]+/g, '-');
  data = data.replace(/(?<=\d)(?=[A-Za-z])|(?<=[A-Za-z])(?=\d)|(?<=[a-z])(?=[A-Z])/g, '-');
  return data.toLowerCase();
};
exports.strDash = strDash;

const strUnderscore = (data)=>{
  return data.replace(/[ -]+/g, '_').replace(/[^a-zA-Z0-9_]/g, '').trim().toLowerCase();
}
exports.strUnderscore = strUnderscore;

const strToTitle = (data)=>{
  data = strDash(data)
  return ucwords(data.replace(/[-_]/g,' '));
};
exports.strToTitle = strToTitle;

//// Special character ////////////////////////////////////////////////////////////////////
const rmSpecialChars = (str, replacement = '')=>{
  return str.replace(/[^a-zA-Z0-9_]/g, replacement)
}
exports.rmSpecialChars = rmSpecialChars;

const rmSpace = (str, replacement = '')=>{
  return str.replace(/ /g, replacement)
}
exports.rmSpace = rmSpace;

const newLine = ()=>{
  return process.platform === "win32" ? "\r\n" : "\n";
}
exports.newLine = newLine;

//// Line operation ////////////////////////////////////////////////////////////////////
const rmLineNDblSpace = (str)=>{
  return str.replace(/[\t\r\n]/g, ' ').replace(/ +/g, ' ').trim();
};
exports.rmLineNDblSpace = rmLineNDblSpace;

//// show ////////////////////////////////////////////////////////////////////
const showStrArr = (strs, title = "strArr", options = {})=>{
  let { hasIdx = false, hasLen = true } = options;
  let sTmp = [];
  sTmp.push(`${title}` + (hasLen ? `(len=${strs.length})` : ""));
  strs.forEach((str, idx)=>{
    if(hasIdx){
      sTmp.push(`${idx}: ${str}`);
    }else{
      sTmp.push(str);
    }
  });
  let msg = sTmp.join(newLine());
  console.log(msg);
  return msg;
};
exports.showStrArr = showStrArr;

//// String information ////////////////////////////////////////////////////////////////////
const showStr = (str, title = 'str')=>{
  if(str === null){
    console.log(`${title} is null`);

  }else{
    let len = str.length;
    console.log(`${title}(${len})="${str}"`);
  }
};
exports.showStr = showStr;

const strLen = (str)=>{
  if(typeof(str) === 'string') return str.length;
  return 0;
};
exports.strLen = strLen;

//// Regex /////////////////////////////////////////////////////////////////////
const strWildcardStr2RegexStr = (str)=>{
  str = str.replaceAll('.', "\\.");
  str = str.replaceAll('*', '.*');
  return `^${str}$`;
};
exports.strWildcardStr2RegexStr = strWildcardStr2RegexStr;

//// other ////////////////////////////////////////////////////////////////////