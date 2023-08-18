
const fs = require('fs');

console.log("Welcome to node ");

fs.writeFile("file.txt","hello iqra",(err) => {
    if(err) throw err;
    console.log('saved!');
});
console.log("welcome");