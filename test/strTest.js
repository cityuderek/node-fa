const { nfa, testUtil } = require('../util')

const test = () => {
  console.log('strTest.test');
  testUtil.setShowAll(0);
  testUtil.resetRs();
  let str1 = 'Aa Bb C Ddd Eee';
  let str2 = 'aa bb c ddd eee';
  let str3 = 'aa-bb-c-ddd-eee';
  let str4 = 'aa_bb_c_ddd_eee';
  let str5 = 'AA BB C DDD EEE';
  let strSnake = 'aa_bb_c_ddd_eee'; // two_words
  let strConstant = 'AA_BB_C_DDD_EEE'; // SCREAMING_SNAKE_CASE, MACRO_CASE, CONSTANT_CASE
  let strDash = 'aa-bb-c-ddd-eee';  // kebab-case, dash-case, lisp-case, slug
  let strCamel = 'aaBbCDddEee';   // (lower) camelCase, dromedaryCase
  let strStudly = 'AaBbCDddEee';  // PascalCase,Upper Camel Case,StudlyCase
  let strTitle = 'Aa Bb C Ddd Eee';

  let expVals = [strSnake, strConstant, strDash, strCamel, strStudly, strTitle];
  let strFuncs = [nfa.strSnake, nfa.strConstant, nfa.strDash, nfa.strCamel, nfa.strStudly, nfa.strToTitle];
  
  let str6 = 'aa bb CC  dd-ee';

  // $arr['snake'] = snake("fish-apple");
  // $arr['slug'] = slug("fish-apple");
  // $arr['camel'] = camel("fish-apple");
  // $arr['studly'] = studly("fish-apple");
  // $arr['to_title'] = to_title("fish-apple");

  // testUtil.testFunc(nfa.strCamelize, 'aaBbCcDdEe', null, str1);
  // testUtil.testFunc(nfa.strUnderscore, 'aa_bb_cc_dd_ee', null, str1);
  // testUtil.testFunc(nfa.strCamelize, 'aaBbCcDdEe', null, str2);
  // testUtil.testFunc(nfa.strUnderscore, 'aa_bb_cc_dd_ee', null, str2);
  // testUtil.testFunc(nfa.isEqual, false, null, moment('2021-09-01'), moment('2021-01-06'));

  // console.log(`str=${str1}, nfa.lcfirst=${nfa.lcfirst(str1)}`);
  // console.log(`str=${str1}, nfa.lcfirst` + str1.charAt(0));

  const execFunc = (strFuncs, expVals, sInput)=>{
    strFuncs.map((func, i)=>{
      testUtil.testFunc(func, expVals[i], null, sInput);
    });
    // console.log(`str=${str}, nfa.strSnake=${nfa.strSnake(str)}`);
    // console.log(`str=${str}, nfa.strDash=${nfa.strDash(str)}`);
    // console.log(`str=${str}, nfa.strCamel=${nfa.strCamel(str)}`);
    // console.log(`str=${str}, nfa.strStudly=${nfa.strStudly(str)}`);
    // console.log(`str=${str}, nfa.strToTitle=${nfa.strToTitle(str)}`);
  }
  execFunc(strFuncs, expVals, str1);
  execFunc(strFuncs, expVals, str2);
  execFunc(strFuncs, expVals, str3);
  execFunc(strFuncs, expVals, str4);
  execFunc(strFuncs, expVals, str5);
  // execFunc(strFuncs, expVals, str1);
  // execFunc(str1);
  // execFunc(str2);
  // execFunc(str3);
  // execFunc(str4);
  // execFunc(str5);
  // execFunc(str6);

  testUtil.showAllRs();
}
module.exports.test = test