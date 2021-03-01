
let folder = '/'

const test = ()=>{
  const { URL } = require('url');
  const md5 = require('md5');
  const myURL = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

  let origin = myURL.origin;
  let path = myURL.pathname + myURL.search;
  
  console.log('myURL', myURL);
  console.log('origin', encodeURIComponent(origin));
  console.log('path', md5(path));
};
exports.test = test;

const setFolder = (newFolder)=>{
  folder = newFolder;
};
exports.setFolder = setFolder;

const writeFileSync = async(path, ctt)=>{
  const fs = require('fs');
  await fs.writeFileSync(path, ctt);
};
exports.writeFileSync = writeFileSync;

const writeCtt = async (url, ctt)=>{
  let filepath = getFilePath(url);
  // console.log('filepath=', filepath);
  // folder = newFolder;
  await writeFileSync(filepath, ctt);
};
exports.writeCtt = writeCtt;

const showPath = (url)=>{
  let filepath = getFilePath(url);
  console.log(`url=${url}, filepath=${filepath}`);
};
exports.showPath = showPath;

const mkdirSync = (dir)=>{
  const fs = require('fs');
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }
}

const getFilePath = (sUrl)=>{
  const md5 = require('md5');
  const url = new URL(sUrl);
  // let origin = url.origin;
  let path = url.pathname + url.search;
  // console.log('myURL', myURL);
  // console.log('origin', encodeURIComponent(origin));
  // console.log('path', md5(path));
  let folder2 = folder + '/' + encodeURIComponent(url.origin);
  mkdirSync(folder2);
  return folder2 + '/' + md5(path) + '.txt';
};
exports.getFilePath = getFilePath;

const readCtt = (url)=>{
  // folder = newFolder;
  return null;
};
exports.setFolder = setFolder;
