
const showTbl = (param1, options)=>{
  let {title = ""} = options;
  let str = toString(param1, options);
  let titleLine = (title ? title + "": "Table") + ` (${param1.length})\n`;
  console.log(titleLine + str);
};
exports.showTbl = showTbl;

const toString = (param1, options)=>{
  let { defVal = "", seperator = '\t', ignores = []} = options;
  let str = "";
  const getHeadLine = (keys)=>{
    let line = "";
    keys.forEach(key=>{
      line += (line ? seperator : "") + key;
    })
    return line + "\n";
  }
  const getObjLine = (obj, keys)=>{
    let line = "";
    let val;
    keys.forEach(key=>{
      val = obj[key] === null ? defVal: obj[key];
      line += (line ? seperator : "") + val;
    })
    return line + "\n";
  }
  if(Array.isArray(param1)){
    if(param1.length > 0){
      let line = "";
      let keys = Object.keys(param1[0]);
      if(ignores.length > 0){
        keys = keys.filter(key => ignores.indexOf(key) < 0)
      }
      str = getHeadLine(keys);
  
      param1.forEach(obj=>{
        str += getObjLine(obj, keys);
      })
    }

  }else{
    let line = "";
    let keys = Object.keys(param1);
    str = getHeadLine(keys);
    str = getObjLine(param1, keys);
  }

  return str;
};
exports.toString = toString;
