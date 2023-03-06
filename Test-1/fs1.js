const {writeFileSync, readFileSync}=require('fs')

const createfile1=writeFileSync('./my-Folder/my-fsfile.js','This file is created using fs module')
//console.log('File created')
const readfile=readFileSync('./my-Folder/my-fsfile.js','utf8')
console.log(readfile)
