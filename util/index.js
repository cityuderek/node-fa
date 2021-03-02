// exports.printMsg = function() {
//   console.log("This is a message from the demo package");
// }
// export * as dtUtil from "~/helpers/strUtil"
// export * as strUtil from "~/helpers/supplierHelper"
const arrUtil = require('./arrUtil')
const dtUtil = require('./dtUtil')
const fileUtil = require('./fileUtil')
const jsonUtil = require('./jsonUtil')
const objUtil = require('./objUtil')
const mathUtil = require('./mathUtil')
const networkUtil = require('./networkUtil')
const nfa = require('./nfa')
const strUtil = require('./strUtil')
const tblUtil = require('./tblUtil')
const testUtil = require('./testUtil')

module.exports = { 
    arrUtil, 
    dtUtil, 
    fileUtil,
    jsonUtil,
    objUtil, 
    mathUtil, 
    networkUtil,
    nfa,
    strUtil, 
    tblUtil,
    testUtil,
}