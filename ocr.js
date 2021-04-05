#!/usr/bin/env node
const argv = require('yargs').argv
const ocr = require("./index.js").ocr
ocr(argv.img, argv.file)