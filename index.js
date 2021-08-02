// module.exports = () => {
//   // ...
// };
const path = require('path');
const fs = require('fs');
const { resolve } = require('path');

const routeFile = ('C:\\BOG002-md-links\\archivos\\prueba.md');
const routeDir = ('C:\\BOG002-md-links\\archivos')

function isAbsolute(route){
  return new Promise((resolve, reject)=>{
    const isAbsolute = path.isAbsolute(route);
    resolve(isAbsolute)
  })
}

isAbsolute(routeFile)
.then((response)=>{
  console.log('La ruta es: ' + response)
})
.catch((err)=>{
  console.log(err)
})

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
  //console.log(response)
  console.log('El contenido del archivo es: ' + response)
})
.catch((err)=>{
  console.log(err)
})

function extFiles(route){
  return new Promise((resolve, reject)=>{
    const extFile = path.extname(route);
    resolve(extFile)
  })
}

extFiles(routeFile)
.then((response)=>{
  console.log('El archivo es de extension: ' + response)
})
.catch((err)=>{
  console.log(err)
})

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
  //console.log(response)
  console.log('Este directorio contiene los archivos: ' + response)
})
.catch((err)=>{
  console.log(err)
})
