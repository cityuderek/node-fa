// import { signUpValidation, loginValidation } from "~/utils/inputValidation";

// const rmSpecialChars = (str)=>{
//   if(!str) return "";
//   return str.replace(/ /g, '_').replace(/[^a-zA-Z0-9_]/g, '').toLowerCase();
// }

// console.log('load strUtil');

//// string ////////////////////////////////////////////////////////////////////

const isEmptyStr = (str)=>{
  return !isNonEmptyStr(str);
};
exports.isEmptyStr = isEmptyStr;

const isNonEmptyStr = (str)=>{
  return typeof str === 'string' && str.length > 0;
};
exports.isNonEmptyStr = isNonEmptyStr;

const showStr = (str, title = 'str')=>{
  if(str === null){
    console.log(`${title} is null`);

  }else{
    let len = str.length;
    console.log(`${title}(${len})="${str}"`);
  }
};
exports.showStr = showStr;

const rmLineNDblSpace = (str)=>{
  return str.replace(/[\t\r\n]/g, ' ').replace(/ +/g, ' ').trim();
};
exports.rmLineNDblSpace = rmLineNDblSpace;

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
    data.map(str=>{
      arr.push(camelize(str));
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

const rmSpecialChars = (str, replacement = '')=>{
  return str.replace(/[^a-zA-Z0-9_]/g, replacement)
}
exports.rmSpecialChars = rmSpecialChars;

const rmSpace = (str, replacement = '')=>{
  return str.replace(/ /g, replacement)
}
exports.rmSpace = rmSpace;