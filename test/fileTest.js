const { nfa, fileUtil } = require('../util')
const testUtil = new (require('../util/TestUtil'))(false);

const test = () => {
  console.log('fileTest.test');
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


  let json =  fileUtil.readJsonSync(path1);
  // console.log('json', json);
  testUtil.handleRs('readJsonSync', `222`, nfa.gov(json, null, 0, 'value'), path1);

  testUtil.showAllRs();
}
module.exports.test = test