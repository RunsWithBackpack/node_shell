var fs = require('fs');

module.exports= {

	pwd: process.stdin.on('data', function (data) {

	  var cmd = data.toString().trim(); 
	  var output = "";
	  if (cmd === "pwd"){
	  	output = process.argv[1];

	
	  }
	  process.stdout.write(output);
	  process.stdout.write('\nprompt > ');
  }),

	ls: process.stdin.on('data', function (data) {

	  var cmd = data.toString().trim(); 
	  var output = "";
	  if (cmd === "ls"){

		fs.readdir('.', function(err, files) {
		  if (err) throw err;
		  files.forEach(function(file) {
		   process.stdout.write(file.toString() + "\n");
		  })
		  process.stdout.write("prompt > ");
		})
	 }}),

	echo: process.stdin.on('data', function (data) {

	  var cmd = data.toString().trim(); 
	  var output = "";
	  if (cmd.slice(0,4) === "echo"){
	  	output = cmd.slice(5);
	  }
	  process.stdout.write(output);
	  process.stdout.write('\nprompt > ');

	 })

	cat: process.stdin.on('data', function (data) {

	  var cmd = data.toString().trim(); 
	  var output = "";
	  if (cmd.slice(0,3) === "cat"){
	  	var arg = cmd.slice(4);
	  // 	var destination = process.argv[1]+"/"+arg;
	  }
	  fs.readFile(arg, function(err, data){
	  	if (err) throw err;
	  	process.stdout.write(data);
	  	process.stdout.write('\nprompt > ');
	  })

	  console.log('dfdsf')
	  console.log('dfdsf')
	  console.log('dfdsf')
}