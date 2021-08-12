const path = require('path');
const fs = require('fs');
const { resolve } = require('path');
const { readFileSync } = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const axios = require('axios');

const routeFile = ('C:\\BOG002-md-links\\archivos\\prueba.md');
const routeDir = ('C:\\BOG002-md-links\\archivos')
const markdown = readFileSync(routeFile, {encoding: 'utf8'});


function isAbsolute(route){
  return new Promise((resolve)=>{
    const isAbsolute = path.isAbsolute(route)? route : path.resolve(route);
    resolve(isAbsolute)
  })
}

isAbsolute(routeFile)
.then((response)=>{
  //console.log('La ruta es: ' + response)
})
.catch((err)=>{
  //console.log(err)
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
  //console.log('El contenido del archivo es: ' + response)
})
.catch((err)=>{
  //console.log(err)
})

function extFiles(route){
  return new Promise((resolve, reject)=>{
    const extFile = path.extname(route);
    resolve(extFile)
  })
}

extFiles(routeFile)
.then((response)=>{
  // console.log('El archivo es de extension: ' + response)
})
.catch((err)=>{
  // console.log(err)
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
  //console.log('Este directorio contiene los archivos: ' + response)
})
.catch((err)=>{
  //console.log(err)
})

// extrayendo links con el metodo map
function getLinks(route, dataFile){
  const getLink = markdownLinkExtractor(dataFile, true)
  //console.log(getLink)
  return getLink.map(link => ({
      file: route,
      href: link.href,
      text: link.text,
    })
  )
}
 //console.log(getLinks(routeFile, markdown))

// recibir un array de objetos y hacer peticion http para conocer el status de la pagina
function getHttpRequest(linkUrl){
  //console.log(linkUrl)
  return new Promise ((resolve) => {
    axios
    .get(linkUrl.href)
    .then((response) => {
      resolve (
      {
      href: linkUrl.href,
      text: linkUrl.text,
      file: linkUrl.file,
      status: response.status,
      statusText: response.statusText
      })
    })
    .catch(error =>
         resolve({
          href: linkUrl.href,
          text: linkUrl.text,
          file: linkUrl.file,
          status: 404,
          statusText: 'Fail'
        })
    )
  })
}

getHttpRequest(
   {
    href: 'https://http.ca/',
    text: 'texto',
    file: 'ruta del archivo'
 })
.then((resp)=> {
 // console.log(resp)
})

//'https://http.cat/'


// function mdLinks(path, options){
//   const
// }

// function getLinks(route, dataFile){
//   const getLink = markdownLinkExtractor(dataFile, true)
//   // console.log(getLink)
//   //console.log('este es getLink', getLink)
//   const links = []
//     getLink.forEach(link => {
//       // console.log(getLink.href)
//       const fileLink = {
//         file: route,
//         href: link.href,
//         text: link.text,
//       };
//       links.push(fileLink)
//       //console.log (links)
// });
// return links
// }
// console.log(getLinks(routeFile, markdown))

