const ocrCommandLineTool = require("./index.js").ocr
async function getText (imagepath) {
    var mytext = await ocrCommandLineTool(imagepath)
    console.log(mytext)
}
getText("example.png")