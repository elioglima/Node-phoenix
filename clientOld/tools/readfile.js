var fs = require('fs')


fs.readFile('orçamentos.png', function (err, data) {    
    fs.writeFile("results.json", data, function(err){
        console.log('The "data to append" was appended to file!');
    });
})