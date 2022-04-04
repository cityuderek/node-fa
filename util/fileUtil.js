const fs = require("fs");
const pathMod = require("path");
const glob = require("glob");
const jsonUtil = require("./jsonUtil");
const dtUtil = require("./dtUtil");
const objUtil = require("./objUtil");
const strUtil = require("./strUtil");
const arrUtil = require("./arrUtil");
const nodeUtil = require("./nodeUtil");
const devUtil = require("./devUtil");

const globAsync = nodeUtil.promisify(glob);

//// read file ////////////////////////////////////////////////////////////////
const readFileSync = (filepath, encoding = "utf8", defVal = "") => {
  if (fileExistsSync(filepath)) {
    return fs.readFileSync(filepath, "utf8");
  }
  return defVal;
};
exports.readFileSync = readFileSync;

const readJsonSync = (filepath, encoding = "utf8", defVal = null) => {
  if (fileExistsSync(filepath)) {
    return jsonUtil.parseJson(fs.readFileSync(filepath, "utf8"), defVal);
  }
  return defVal;
};
exports.readJsonSync = readJsonSync;

const readAllLinesSync = (filepath, options) => {
  let ctt = fs.readFileSync(filepath, "utf8");
  let lines = (arrayOfLines = ctt.match(/[^\r\n]+/g));

  return lines;
};
exports.readAllLinesSync = readAllLinesSync;

const readCsSync = (filepath, options) => {
  const parse = require("csv-parse/lib/sync");
  let cnt = objUtil.gov(options, 0, "cnt");
  let skip = objUtil.gov(options, 0, "skip");
  let ctt = fs.readFileSync(filepath, "utf8");
  let records = parse(ctt, {
    columns: true,
    skip_empty_lines: true,
  });
  if (cnt > 0) {
    records = records.splice(skip, cnt);
  } else if (cnt < 0) {
    records = records.splice(records.length - skip + cnt, -cnt);
  } else if (skip > 0) {
    records = records.splice(skip);
  }
  return records;
};
exports.readCsSync = readCsSync;

const readTsvSync = (filepath, options = {}) => {
  let { isObj = true, maxCnt = 0, skip = 0 } = options;
  let lines = readAllLinesSync(filepath);
  // console.log(`filepath=${filepath}, lines=${lines.length}, isObj=${isObj}, maxCnt=${maxCnt}, skip=${skip}, options=`, options);

  // console.log('lines=', lines);
  let arr = [];
  if (isObj) {
    let headers = lines[0].split("\t");
    headers = strUtil.strCamel(headers);
    // console.log('headers=', headers);
    if (maxCnt > 0) {
      lines = lines.slice(1 + skip, maxCnt + 1 + skip);
    } else {
      lines = lines.slice(1 + skip);
    }
    lines.map((line) => {
      let obj = arrUtil.kVArrToObj(headers, line.split("\t"));
      // console.log('obj=', obj);
      arr.push(obj);
    });
  } else {
    if (maxCnt > 0) {
      lines = lines.slice(0 + skip, maxCnt + skip);
    }
    lines.map((line) => {
      let obj = line.split("\t");
      // console.log('obj=', obj);
      arr.push(obj);
    });
  }
  return arr;
};
exports.readTsvSync = readTsvSync;

//// write file ////////////////////////////////////////////////////////////////
const writeFileSync = (path, ctt) => {
  if (typeof ctt === "object") {
    ctt = JSON.stringify(ctt);
  }
  fs.writeFileSync(path, ctt);
};
exports.writeFileSync = writeFileSync;

const writeJsonFileSync = (path, json, space = 0) => {
  ctt = space > 0 ? JSON.stringify(json, null, space) : JSON.stringify(json);
  fs.writeFileSync(path, ctt);
};
exports.writeJsonFileSync = writeJsonFileSync;

const writeBase64FileSync = (filepath, data) => {
  data = data.replace(/^data:image\/png;base64,/, "");
  prepareParentDir(filepath);
  // console.log(`filepath; filepath=${filepath}`);
  fs.writeFileSync(filepath, data, 'base64');
};
exports.writeBase64FileSync = writeBase64FileSync;

//// file info ////////////////////////////////////////////////////////////////
const fileExistsSync = (path) => {
  return fs.existsSync(path);
};
exports.fileExistsSync = fileExistsSync;

const getFileStat = function (filepath) {
  let fileStat = {};
  if (fs.existsSync(filepath)) {
    fileStat = fs.statSync(filepath);
    fileStat.exists = fs.existsSync(filepath);
    fileStat.created_at = dtUtil.formatDtm(fileStat.ctime);
    fileStat.modified_at = dtUtil.formatDtm(fileStat.mtime);
  } else {
    fileStat.path = filepath;
    fileStat.exists = false;
    fileStat.size = 0;
    fileStat.ctime = 0;
    fileStat.mtime = 0;
    fileStat.ctimeMs = 0;
    fileStat.mtimeMs = 0;

    fileStat.created_at = "";
    fileStat.modified_at = "";
  }

  return fileStat;
};
exports.getFileStat = getFileStat;

const fileSize = function (filepath) {
  let fileStat = getFileStat(filepath);

  return fileStat.size;
};
exports.fileSize = fileSize;

const showFileInfo = function (filepath, title = "file") {
  let fileInfo = getFileStat(filepath);
  console.log(
    `${title}; path=${filepath} fileInfo=` + jsonUtil.stringifyJson(fileInfo)
  );
};
exports.showFileInfo = showFileInfo;

const showFileSmry = function (filepath, title = "file") {
  let fileInfo = getFileStat(filepath);
  let smry = `${title}; path=${filepath}, exists=${fileInfo.exists}, size=${fileInfo.size}, created_at=${fileInfo.created_at}, updated_at=${fileInfo.updated_at}`;
  console.log(smry);
};
exports.showFileSmry = showFileSmry;

//// dir ////////////////////////////////////////////////////////////////
const mkdirSync = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};
exports.mkdirSync = mkdirSync;

const readDirSync = (dirPath, options) => {
  // console.log(`dirPath=${dirPath}`, options);
  let {
    isRecursive = false,
    ignore = [],
    pattern,
    patternRegex,
    isDirOnly = false,
    isFileOnly = false,
    limit = 0,
  } = options;
  let paths = [];
  let incFile = !isDirOnly;
  let incDir = !isFileOnly;
  let regex = null;
  let bCont = true;
  try {
    let allFiles = fs.readdirSync(dirPath, { withFileTypes: true });
    if (pattern && !patternRegex) {
      patternRegex = nfa.strWildcardStr2RegexStr(pattern);
    }
    if (patternRegex) {
      // console.log(`patternRegex=${patternRegex}`);
      regex = new RegExp(patternRegex, "i");
    }

    allFiles.map((file) => {
      let name = file.name;
      if (!ignore || !arrUtil.arrContains(ignore, name)) {
        let fullpath = path.join(dirPath, name);
        let isDirectory = file.isDirectory();
        if (isDirectory) {
          if (incDir) {
            if (!regex || regex.test(name)) {
              paths.push(fullpath);
              if (limit > 0 && paths.length >= limit) {
                bCont = false;
              }
            }
          }
          if (isRecursive) {
            let paths2 = readDirSync(fullpath, options);
            paths = paths.concat(paths2);
            if (limit > 0 && paths.length >= limit) {
              bCont = false;
            }
          }
        } else {
          if (incFile) {
            if (!regex || regex.test(name)) {
              paths.push(fullpath);
              if (limit > 0 && paths.length >= limit) {
                bCont = false;
              }
            }
          }
        }
      }
    });

    if (limit > 0 && paths.length > limit) {
      paths = arrUtil.arrFirstN(paths, limit);
    }
  } catch (ex) {}

  return paths;
};
exports.readDirSync = readDirSync;

const listFiles = async (dirPath) => {
  if (!dirPath.includes("*")) {
    dirPath = path.join(p, "**");
  }
  let rs = await globAsync(dirPath);
  return rs;
};
exports.listFiles = listFiles;

const listFilesSync = (dirPath) => {
  if (!dirPath.includes("*")) {
    dirPath = path.join(p, "**");
  }
  let rs = glob.sync(dirPath);
  return rs;
};
exports.listFilesSync = listFilesSync;

const searchFilesSync = (dirPath, filename, exceptDirs = null) => {
  let pattern = path.join(dirPath, "**", filename);

  let options = {
    dot: true,
  };
  if (arrUtil.isNonEmptyArr(exceptDirs)) {
    options.ignore = exceptDirs.map((dir) => `**/${dir}/**`);
  }

  devUtil.varDump(pattern, "pattern");
  devUtil.varDump(options, "options");
  try {
    let paths = glob.sync(pattern, options);
    return paths;
  } catch (ex) {}
  return [];
};
exports.searchFilesSync = searchFilesSync;

const searchFileSync = (dirPath, options) => {
  // let paths = searchFilesSync(dirPath, filename, exceptDirs); //// slow
  options.isFileOnly = true;
  options.isRecursive = true;
  options.limit = 1;
  let paths = readDirSync(dirPath, options);
  // console.log(`dirPath=${dirPath}, filename=${filename}, pattern=${pattern}, paths=${paths.length}`);
  return arrUtil.arrFirst(paths);
};
exports.searchFileSync = searchFileSync;

const fileMd5Sync = (path) => {
  const md5File = require("md5-file");
  try {
    return md5File.sync(path);
  } catch (ex) {}
  return null;
};
exports.fileMd5Sync = fileMd5Sync;

const isParentDirExistSync = (path) => {
  return isDirSync(pathMod.dirname(path));
};
exports.isParentDirExistSync = isParentDirExistSync;

const isDirSync = (path) => {
  try {
    let stat = fs.statSync(path);
    return stat.isDirectory();
  } catch (ex) {}
  return false;
};
exports.isDirSync = isDirSync;

const isFileSync = (path) => {
  try {
    let stat = fs.statSync(path);
    return stat.isFile();
  } catch (ex) {}
  return false;
};
exports.isFileSync = isFileSync;

const prepareDir = (dirPath) => {
  // let stat1 = await fs.statSync(path);
  let isDirectory = isDirSync(dirPath);
  // console.log(`stat1,`, stat1);
  // console.log(`dirPath=${dirPath}, isDirectory=${isDirectory}`);
  if (!isDirectory) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  // let rs = fs.isDirectory(dirPath);
  // showFileInfo(dirPath, "dirPath");
  // console.log(`dirPath=${dirPath}, rs=${rs}`);
};
exports.prepareDir = prepareDir;

const prepareParentDir = (path) => {
  prepareDir(pathMod.dirname(path));
};
exports.prepareParentDir = prepareParentDir;
