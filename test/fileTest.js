const { nfa, testUtil, fileUtil } = require('../util')

const test = () => {
  console.log('nfaTest.test');
  testUtil.resetRs();
  // testUtil.testFunc(Math.round, 123, null, 123.456);
  let path1 = './test/fixtures/file/json1.json';
  let ctt =  fileUtil.readFileSync(path1);
  // console.log('ctt', ctt);
  testUtil.handleRs('readFileSync', `[
    {
        "name": "Wavy", 
        "value": "222"
    }, 
    {
        "name": "Jenny", 
        "value": "333"
    }
]
`, ctt, path1);

  testUtil.showAllRs();
}
module.exports.test = test