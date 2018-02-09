        /*********solution 1********************/
// console.log("HELLO WORLD");

/*********solution 2********************/
// var result = 0
// console.log(process.argv);
// for (var i = 2; i < process.argv.length; i++){
//   result += Number(process.argv[i]);
// }
// console.log(result);

/*********solution 3********************/
// var fs = require('fs');
// var buf =fs.readFileSync(process.argv[2])
// var str = buf.toString();
// var rd = str.split('\n');
// console.log(rd.length - 1);

/*********solution 4********************/
// var fs = require('fs');
// fs.readFile(process.argv[2],function(err, content){
//   var lines=content.toString().split('\n').length-1
//   console.log(lines);
// })

/*********solution 5********************/
var fs = require('fs')
var path = require('path')
// console.log(process.argv);
var folder = process.argv[2]
var ext = '.' + process.argv[3]
// console.log(folder, ext);
fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function(file) {
      if (path.extname(file) === ext) {
          console.log(file)
      }
  })
})
