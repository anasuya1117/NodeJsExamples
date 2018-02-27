var fs = require('fs');

fs.rename('newSample.txt', 'sample.txt', function (err) {
  if (!err)
    console.log('renamed complete');
  else
    console.log(err);
});

fs.readFile('/etc/no.such.file', function (err, data) {
  if (err) throw err;
  console.log(data.toString());
});