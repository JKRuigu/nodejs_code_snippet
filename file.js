const fs = require("fs");

/**
//BLOCKING CODE
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");
**/

// NON-BLOCKING CODE 

fs.readFile('input.txt',(err, data)=> {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended")