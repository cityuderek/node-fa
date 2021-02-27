const nfa = require('./nfa')
const fsp = require('fs').promises

const test = () => {
  console.log(__filename + '.test');
  let pathCsv1 = "/Users/derek/Dropbox/invest/data/btcusd_yh/btcusd_r20140917-20210218_yh_d20210219.csv"
  let pathTxt1 = "/Users/derek/Dropbox/testingFile/txt/txt1.txt"
  
  // testUtil.testFunc(Math.round, 123, null, 123.456);

  fsp.stat( pathTxt1).then(console.log);

  fsp.readFile(pathTxt1).then(data => {
    console.log('ctt=' + data);
  });
}
module.exports.test = test