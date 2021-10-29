
const writeTextToClipboard = (txt)=>{
  navigator.clipboard.writeText(txt);
};
exports.writeTextToClipboard = writeTextToClipboard;


const readTextFromClipboard = ()=>{ 
  return navigator.clipboard.readText();
}
exports.readTextFromClipboard = readTextFromClipboard;