var fs = require('fs');
var consoleRead = require('readline-sync');

function readLines(input, findIP) {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      findIP(line);
      index = remaining.indexOf('\n');
    }
  });

  input.on('end', function() {
    if (remaining.length > 0) {
        findIP(remaining);
    }
  });
}

function findIP(data) {
        //dataIP = data.match(/([0-9]{1,3}[\.]){3}[0-9]{1,3}/);
        dataIP = data.match(/(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/g);
        if (dataIP !== null ){
            //dataIP.replace(/\s/, /\n/);
            //fs.appendFileSync('./samba.rnd/outT.txt', dataIP + '\n'); 
            fs.appendFileSync('./samba.rnd/output.txt', dataIP + '\n'); 
            //fs.createWriteStream('outT.txt', dataIP);
            //console.log('Line: ' + dataIP);
        }
}

var file = consoleRead.question('Название файла: ');

//var input = fs.createReadStream('./samba.rnd/samba.7.txt');
var input = fs.createReadStream(file);
readLines(input, findIP);
