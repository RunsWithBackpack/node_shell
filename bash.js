
var commands = require("./commands");

var userCommand = 'pwd';

commands.pwd;

// console.log(process);

process.stdout.write('prompt > ');


// The stdin 'data' event fires after a user types in a line
//process.stdin.on('data', function (data) {

  // var cmd = data.toString().trim(); 
  // var output = "";
  // if (cmd === "pwd"){
  // 	output = process.argv[1];
  // } 
  // if (cmd === "date"){
  // 	output = (new Date()).toString();
  // } 


  // remove the newline

  //process.stdout.write(output);
  //process.stdout.write('\nprompt > ');

//});
 // console.log(process.argv);


