
const fs = require('fs');

var http = require('http');

// console.log("Welcome to node ");

// fs.writeFile("file.txt","hello iqra",(err) => {
//     if(err) throw err;
//     console.log('saved!');
// });
// console.log("welcome");


//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); 