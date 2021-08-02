// module.exports = () => {
//   // ...
// };
const path = require('path');
const fs = require('fs');
const { resolve } = require('path');

const routeFile = ('C:\\BOG002-md-links\\archivos\\prueba.md');
const routeDir = ('C:\\BOG002-md-links\\archivos')

const absolute = path.isAbsolute(routeFile);
// console.log('la ruta es ' + absolute)


function readFiles(route){
  return new Promise ((resolve,reject) => {
    fs.readFile(route, 'utf8', function(err, data) {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  })
}

readFiles(routeFile)
.then((response)=>{
  console.log(response)
})
.catch((err)=>{
  console.log(err)
})

// const extFile = path.extname(routeFile);
// console.log('el archivo es de extension'+ extFile)

function readDirectory(route){
  return new Promise((resolve, reject)=>{
    fs.readdir(route, 'utf-8', function(err,files){
      if (err) {
        return reject(err);
      }
      resolve(files);
    })
  })
}

readDirectory(routeDir)
.then((response)=>{
  console.log(response)
})
.catch((err)=>{
  console.log(err)
})


