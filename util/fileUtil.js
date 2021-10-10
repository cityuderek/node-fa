const fs = require('fs');
const path = require('path');
const glob = require("glob");
const jsonUtil = require('./jsonUtil');
const dtUtil = require('./dtUtil');
const objUtil = require('./objUtil');
const strUtil = require('./strUtil');
const arrUtil = require('./arrUtil');
const nodeUtil = require('./nodeUtil');

const globAsync = nodeUtil.promisify(glob);

//// read file ////////////////////////////////////////////////////////////////
const readFileSync = (filepath, encoding = 'utf8', defVal = "")=>{
  if(existsSync(filepath)){
    return fs.readFileSync(filepath, 'utf8');
  }
  return defVal;
}
exports.readFileSync = readFileSync;

const readJsonSync = (filepath, encoding = 'utf8', defVal = null)=>{
  if(existsSync(filepath)){
    return jsonUtil.parseJson(fs.readFileSync(filepath, 'utf8'), defVal);
  }
  return defVal;
}
exports.readJsonSync = readJsonSync;

const readAllLinesSync = (filepath, options)=>{
    let ctt = fs.readFileSync(filepath, 'utf8');
    let lines = arrayOfLines = ctt.match(/[^\r\n]+/g);

    return lines;
}
exports.readAllLinesSync = readAllLinesSync;

const readCsSync = (filepath, options)=>{
    const parse = require('csv-parse/lib/sync')
    let cnt = objUtil.gov(options, 0, 'cnt');
    let skip = objUtil.gov(options, 0, 'skip');
    let ctt = fs.readFileSync(filepath, 'utf8');
    let records = parse(ctt, {
        columns: true,
        skip_empty_lines: true
    })
    if(cnt > 0){
        records = records.splice(skip, cnt)

    }else if(cnt < 0){
        records = records.splice(records.length - skip + cnt, -cnt)

    }else if(skip > 0){
        records = records.splice(skip)
    }
    return records;
}
exports.readCsSync = readCsSync;

const readTsvSync = (filepath, options = {})=>{
  let {isObj = true, maxCnt = 0, skip = 0} = options;
  let lines = readAllLinesSync(filepath);
  // console.log(`filepath=${filepath}, lines=${lines.length}, isObj=${isObj}, maxCnt=${maxCnt}, skip=${skip}, options=`, options);

  // console.log('lines=', lines);
  let arr = [];
  if(isObj){
    let headers = lines[0].split("\t");
    headers = strUtil.strCamel(headers);
    // console.log('headers=', headers);
    if(maxCnt > 0){
      lines = lines.slice(1 + skip, maxCnt + 1 + skip);
    }else{
      lines = lines.slice(1 + skip);
    }
    lines.map(line=>{
      let obj = arrUtil.kVArrToObj(headers, line.split("\t"));
      // console.log('obj=', obj);
      arr.push(obj);
    })

  }else{
    if(maxCnt > 0){
      lines = lines.slice(0 + skip, maxCnt + skip);
    }
    lines.map(line=>{
      let obj = line.split("\t");
      // console.log('obj=', obj);
      arr.push(obj);
    })
  }
  return arr;
}
exports.readTsvSync = readTsvSync


//// write file ////////////////////////////////////////////////////////////////
const writeFileSync = (path, ctt)=>{
  if(typeof ctt === 'object'){
    ctt = JSON.stringify(ctt);
  }
  fs.writeFileSync(path, ctt);
};
exports.writeFileSync = writeFileSync;

const writeJsonSync = (path, json)=>{
  ctt = JSON.stringify(json);
  fs.writeFileSync(path, ctt);
};
exports.writeJsonSync = writeJsonSync;

//// file ////////////////////////////////////////////////////////////////
const existsSync = (path)=>{
  return fs.existsSync(path);
}
exports.existsSync = existsSync;

const getFileStat = function(filepath) {
  let fileInfo = fs.statSync(filepath);

  if(filepath){
     fileInfo.exists = fs.existsSync(filepath);
     fileInfo.created_at = dtUtil.formatDtm(fileInfo.ctime);
     fileInfo.modified_at = dtUtil.formatDtm(fileInfo.mtime);
  }

  return fileInfo;
}
exports.getFileStat = getFileStat;

const showFileInfo = function(filepath, title = "file") {
  let fileInfo = getFileStat(filepath);
  console.log(`${title}; path=${filepath} fileInfo=` + jsonUtil.stringifyJson(fileInfo));
}
exports.showFileInfo = showFileInfo;

const showFileSmry = function(filepath, title = "file") {
  let fileInfo = getFileStat(filepath);
  let smry = `${title}; path=${filepath}, exists=${fileInfo.exists}, size=${fileInfo.size}, created_at=${fileInfo.created_at}, updated_at=${fileInfo.updated_at}`;
  console.log(smry);
}
exports.showFileSmry = showFileSmry;

//// path ////////////////////////////////////////////////////////////////
exports.joinPath = path.join;

//// dir ////////////////////////////////////////////////////////////////
const mkdirSync = (dir)=>{
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }
}
exports.mkdirSync = mkdirSync;

const listFiles = async (dirPath)=>{
  if (!dirPath.includes("*")){
    dirPath = path.join(p, "**");
  }
  let rs = await globAsync(dirPath);
  return rs;
}
exports.listFiles = listFiles;

const listFilesSync = (dirPath)=>{
  if (!dirPath.includes("*")){
    dirPath = path.join(p, "**");
  }
  let rs = glob.sync(dirPath);
  return rs;
}
exports.listFilesSync = listFilesSync;

const searchFileSync = (dirPath, filename)=>{
  let pattern = path.join(dirPath, "**", filename);
  let paths = glob.sync(pattern);

  return arrUtil.arrFirst(paths);
}
exports.searchFileSync = searchFileSync;