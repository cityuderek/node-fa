

//// dir ////////////////////////////////////////////////////////////////
const mkdirSync = (dir)=>{
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }
}
exports.mkdirSync = mkdirSync;