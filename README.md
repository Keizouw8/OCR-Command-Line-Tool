# OCR Command Line Tool
OCR Command Line tool (OCR-CLT) is a global Node package that uses OCR technology to extract text from images. It is based on the Tesseract JS OCR library, so it is very efficient.

## Installation
Using npm to install CLI tool:
```shell
$ npm install -g npm
$ npm install -g ocr-command-line-tool
```
Using npm to install module:
```shell
$ npm install -g npm
$ npm install ocr-command-line-tool
```

## Example
In CLI:
```shell
$ ocr --img '<path to image>' --file '<save to file name>'
```
In NodeJS:
```js
const ocrCommandLineTool = require("ocr-command-line-tool").ocr
async function getText (imagepath) {
    var mytext = await ocrCommandLineTool(imagepath)
    console.log(mytext)
}
getText('<path to image>')
```

## Why OCR-CLT?
OCR-CLT text recognition easy with a simple command. Beyond this, most other competitors are made as API's, which come with hefty fees. Here, you can use the tool right from your own computer for free! Additionally you can take advantage of all the power your computer has.