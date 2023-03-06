const { dirname } = require('path')
const cityfunction=require('./city-function')
const names=require('./citynames')

cityfunction(names.city)
console.log(`__dirname`)