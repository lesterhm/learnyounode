var fs = require('fs');
var buff = fs.readFile(process.argv[2], function(error, data){
  if(error) throw error;
  console.log(data.toString().match(/\n/g).length);
});