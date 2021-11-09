const { URL } = require('url');
const md5 = require('md5');
const { nfa, fileUtil, networkUtil } = require('../util');

let folder = '/'

const test = ()=>{
  const myURL = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

  let origin = myURL.origin;
  let path = myURL.pathname + myURL.search;
  
  console.log('myURL', myURL);
  console.log('origin', encodeURIComponent(origin));
  console.log('path', md5(path));
};
exports.test = test;

//// network function /////////////////////////////////////////////////////////
const httpGet = async (url)=>{
  let rs = readCtt(url);
  if(rs === null){
    rs = await networkUtil.httpGet(url);
    if(rs !== null && rs !== ""){
      writeCtt(url, rs);
    }

  }else{
    // console.log(`httpGet url=${url}, rs="${rs}"`);
    let rsTmp = JSON.parse(rs);
    if(rsTmp !== null){
      rs = rsTmp;
    }
  }
  return rs;
}
module.exports.httpGet = httpGet;

const getJson = async (url)=>{
  let rs = readCtt(url);
  if(rs === null){
    rs = await networkUtil.getJson(url);
    if(rs !== null && rs !== ""){
      writeCtt(url, rs);
    }

  }else{
    // console.log(`getJson url=${url}, rs="${rs}"`);
    rs = nfa.parseJson(rs);
  }
  return rs;
}
module.exports.getJson = getJson;

/////////////////////////////////////////////////////////
const setFolder = (newFolder)=>{
  folder = newFolder;
};
exports.setFolder = setFolder;

const getFolder = ()=>{
  return process.env.NFA_PROJ_PROPERTY_FODLER || folder;
}
exports.getFolder = getFolder;

const readCtt = (url)=>{
  let filepath = getFilePath(url);
  return fileUtil.readFileSync(filepath, 'utf8', null);
};

const writeCtt = async (url, ctt)=>{
  let filepath = getFilePath(url);
  // console.log('filepath=', filepath);
  await fileUtil.writeFileSync(filepath, ctt);
};

const showPath = (url)=>{
  let filepath = getFilePath(url);
  console.log(`url=${url}, filepath=${filepath}`);
};
exports.showPath = showPath;

const getFilePath = (sUrl)=>{
  const md5 = require('md5');
  const url = new URL(sUrl);
  // let origin = url.origin;
  let path = url.pathname + url.search;
  // console.log('myURL', myURL);
  // console.log('origin', encodeURIComponent(origin));
  // console.log('path', md5(path));
  let folder2 = folder + '/' + encodeURIComponent(url.origin);
  fileUtil.mkdirSync(folder2);
  return folder2 + '/' + md5(path) + '.txt';
};
exports.getFilePath = getFilePath;
