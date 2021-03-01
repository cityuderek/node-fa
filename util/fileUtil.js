const fs = require('fs')
const { nfa } = require('./nfa')

const readFileSync = (path, encoding = 'utf8')=>{
  return fs.readFileSync(path, 'utf8');
}
exports.readFileSync = readFileSync

const readAllLines = (path, options)=>{
    let ctt = fs.readFileSync(path, 'utf8');
    let lines = arrayOfLines = ctt.match(/[^\r\n]+/g);

    return lines;
}
exports.readAllLines = readAllLines

const readCsv = (path, options)=>{
    const parse = require('csv-parse/lib/sync')
    let cnt = nfa.gov(options, 0, 'cnt');
    let skip = nfa.gov(options, 0, 'skip');
    let ctt = fs.readFileSync(path, 'utf8');
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

const readTsv = (path, options = {})=>{
  let {isObj = true, maxCnt = 0, skip = 0} = options;
  let lines = readAllLines(path);
  // let isObj = nfa.ovEquals(options, true, 'isObj');
  // let cnt = nfa.gov(options, 0, 'cnt');
  // let skip = nfa.gov(options, 0, 'skip');
  // console.log(`path=${path}, lines=${lines.length}, isObj=${isObj}, maxCnt=${maxCnt}, skip=${skip}, options=`, options);

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