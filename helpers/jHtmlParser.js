// const log = require('../util/log')('jHtmlParser')

let $ = null;

const showCnt = (ele, selector)=>{
  let eles = ele.find(selector);
  console.log(`eles(${selector})=${eles.length}`);
  return eles.length;
};
exports.showCnt = showCnt;

const firstText = (ele, selector, defVal = '')=>{
  const ele2 = firstJ(ele, selector);
  return ele2 ? ele2.text() : defVal;
};
exports.firstText = firstText;

const firstHtml = (ele, selector, defVal = '')=>{
  const ele2 = firstJ(ele, selector);
  return ele2 ? ele2.html() : defVal;
};
exports.firstHtml = firstHtml;

const firstJ = (ele, selector)=>{
  const $ = getJquery();
  let eles = ele.find(selector);
  // console.log(`eles(${selector})=${eles.length}`);
  return eles.length > 0 ? $(eles[0]) : null;
};
exports.firstJ = firstJ;

const first = (ele, selector)=>{
  let eles = ele.find(selector);
  // console.log(`eles(${selector})=${eles.length}`);
  return eles.length > 0 ? eles[0] : null;
};
exports.first = first;

const cnt = (ele, selector)=>{
  let eles = ele.find(selector);
  return eles.length;
};
exports.first = first;

const getJquery = ()=>{
  if(!$){
    let jsdom = require('jsdom');
    let dom = new jsdom.JSDOM();
    let window = dom.window;
    // let document = window.document;
    $ = require('jquery')(window);
  }

  return $;
};
exports.getJquery = getJquery;
