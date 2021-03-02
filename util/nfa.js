const _ = require('lodash');

// console.log('load nfa');

module.exports = {
  ...require('./arrUtil'),
  ...require('./dtUtil'),
  ...require('./jsonUtil'),
  ...require('./mathUtil'),
  ...require('./objUtil'),
  ...require('./strUtil')
}

// const arrUtil = require('./arrUtil');
// const dtUtil = require('./dtUtil');
// const mathUtil = require('./mathUtil');
// const objUtil = require('./objUtil');
// const strUtil = require('./strUtil');
// console.log('arrUtil', arrUtil);
// module.exports = {
//   ...arrUtil,
//   ...dtUtil,
//   ...mathUtil,
//   ...objUtil,
//   ...strUtil,
// }

//// date ////////////////////////////////////////////////////////////////////

// module.exports = {clone, isObj, isNonEmptyObj, gov, equals}

// const {strUtil} = require('./util');

// console.log('node-fa');
// console.log('underscore=' + strUtil.underscore('Aaa BB'));