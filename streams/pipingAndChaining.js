var fs = require('fs');
var zlib = require('zlib');


var readableStream = fs.createReadStream('file1.txt');
var writableStream = fs.createWriteStream('file2.txt');

readableStream.pipe(writableStream);


// fs.createReadStream('file.txt.zip')
//   .pipe(zlib.createGunzip())
//   .pipe(fs.createWriteStream('output.txt'));