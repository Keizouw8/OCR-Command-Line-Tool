const Tesseract = require('tesseract.js')
const fs = require('fs')
const loading =  require('loading-cli');
async function ocr (x, y) {
    const load = loading("loading text!!").start()
    load.frame(["\\", "|", "/", "–"]);
    load.color = 'yellow';
    load.text = ' Loading';
    var bruh = await Tesseract.recognize(
        x,
        'eng',
        {  }
      ).then(async function ({ data: { text } }) {
        if(typeof y == "string"){
          await fs.writeFile(y, text, function (err) {});
          await fs.unlinkSync('eng.traineddata')
          console.log("\nSuccessfully wrote to file.");
        } else {
          console.log("\n")
          await fs.unlinkSync('eng.traineddata')
          return text
        }
      })
    load.stop()
    return bruh
}
module.exports =  {
    ocr
}