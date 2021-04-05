const Tesseract = require('tesseract.js')
const fs = require('fs')
const loading =  require('loading-cli');
async function ocr (x, y) {
    const load = loading("loading text!!").start()
    load.frame(["\\", "|", "/", "–",]);
    load.color = 'white';
    load.text = 'Loading';
    await Tesseract.recognize(
        x,
        'eng',
        {  }
      ).then(function ({ data: { text } }) {
        fs.writeFile(y, text, function (err) {});
        load.stop()
        console.log("Successfully wrote to file.");
      })
}
module.exports =  {
    ocr
}