const $ = require("jquery");

const test = () => {
  let startTs = Date.now();
  console.log(`timeUsedMs=` + (Date.now() - startTs));
  var url = "https://www.trademe.co.nz/a/marketplace/toys-models/lego-building-toys/lego/bricks-building-pieces/listing/3311167925";

  axios.get(url)
  .then((response) => {
    var ctt = response.data;
    var doc = $('<html>').html(ctt);
    
    console.log('a_len=' + doc.find('a').length);
  });
};
exports.test = test;

const findByText = (doc, txt) => {
  for (var key of Object.keys(cfg)) {
      let proj = cfg[key];
      console.log(key + " -> " + cfg[key])
  }
};
exports.findByText = findByText;

const getText = (doc, selector, defVal = "") => {
  let ele = doc.find(selector);
  // console.log(`ele=${ele.length}`);
  return ele.text();
};
exports.getText = getText;

const getLen = (doc, selector) => {
  return doc.find(selector).length
};
exports.getLen = getLen;

const getEleCnt = (doc, selector) => {
  let eles = doc.find(selector);
  // console.log(`eles=${eles.length}`);
  return eles.length;
};
exports.getEleCnt = getEleCnt;
