const axios = require('axios');
const networkCacheHelper = require('../helpers/networkCacheHelper');

const getCtt = async (url)=>{
  let resp = await axios.get(url).catch(()=>null)
  if(resp && resp.data){
    let ctt = resp.data;
    networkCacheHelper.writeCtt(url, ctt);
    return ctt;
  }
  return '';
}