const fs = require('fs')
const jsonUtil = require('./jsonUtil')
const objUtil = require('./objUtil')

//// read file ////////////////////////////////////////////////////////////////
const readFileSync = (filepath, encoding = 'utf8', defVal = "")=>{
  if(existsSync(filepath)){
    return fs.readFileSync(filepath, 'utf8');
  }
  return defVal;
}
exports.readFileSync = readFileSync

const readJsonSync = (filepath, encoding = 'utf8', defVal = null)=>{
  if(existsSync(filepath)){
    return jsonUtil.parseJson(fs.readFileSync(filepath, 'utf8'), defVal);
  }
  return defVal;
}
exports.readJsonSync = readJsonSync

const readAllLines = (filepath, options)=>{
    let ctt = fs.readFileSync(filepath, 'utf8');
    let lines = arrayOfLines = ctt.match(/[^\r\n]+/g);

    return lines;
}
exports.readAllLines = readAllLines

const readCsv = (filepath, options)=>{
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
exports.readCsv = readCsv

const readTsv = (filepath, options = {})=>{
  let {isObj = true, maxCnt = 0, skip = 0} = options;
  let lines = readAllLines(filepath);
  // let isObj = nfa.ovEquals(options, true, 'isObj');
  // let cnt = nfa.gov(options, 0, 'cnt');
  // let skip = nfa.gov(options, 0, 'skip');
  // console.log(`filepath=${filepath}, lines=${lines.length}, isObj=${isObj}, maxCnt=${maxCnt}, skip=${skip}, options=`, options);

  // console.log('lines=', lines);
  let arr = [];
  if(isObj){
    let headers = lines[0].split("\t");
    headers = strUtil.camelize(headers);
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
exports.readTsv = readTsv


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

//// dir ////////////////////////////////////////////////////////////////
const mkdirSync = (dir)=>{
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }
}
exports.mkdirSync = mkdirSync;