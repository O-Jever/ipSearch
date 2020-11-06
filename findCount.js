var fs = require('fs');
var consoleRead = require('readline-sync');

var file = consoleRead.question('Название файла: ');

var array = fs.readFile(file, function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    var result = {};
    
    array.forEach(function(a){
        result[a] = result[a] + 1 || 1;
        fs.appendFileSync('./samba.rnd/output.txt', result[a] + '\n'); 
    });
});

