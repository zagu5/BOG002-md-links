const path = require('path');
const fs = require('fs');
const { resolve } = require('path');
const { readFileSync } = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const axios = require('axios');

const routeFile = ('C:\\BOG002-md-links\\archivos\\prueba.md');
const routeDir = ('C:\\BOG002-md-links\\archivos')
const markdown = readFileSync(routeFile, {encoding: 'utf8'});

// verificando si la ruta es absoluta
function routeAbsolute(route){
  return new Promise((resolve)=>{
    const isAbsolute = path.isAbsolute(route)? route : path.resolve(route);
    resolve(isAbsolute)
  })
}

routeAbsolute(routeFile)
.then((response)=>{
  //console.log('La ruta es: ' + response)
})
.catch((err)=>{
  //console.log(err)
})

// leyendo el contenido de un archivo
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

// Averiguando la extension de un archivo
function extFiles(route){
  return new Promise((resolve, reject)=>{
    const extFile = path.extname(route);
    resolve(extFile)
  })
}

extFiles(routeFile)
.then((response)=>{
  //console.log('El archivo es de extension: ' + response)
})
.catch((err)=>{
   //console.log(err)
})

// Leyendo el contenido de un directorio
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

// extrayendo links
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

//  peticion http para conocer el status de la pagina
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
  //console.log(resp)
})

//'https://http.cat/'


function mdLinks(path, options){
  return new Promise ((resolve, reject) => {
    const routeVerify = routeAbsolute(path);
    resolve(routeVerify)
  })
}

mdLinks(routeFile, false)
.then(links => {
  console.log(links)
})
.catch(console.error)




module.exports = { routeAbsolute, readFiles, extFiles, readDirectory, getLinks, getHttpRequest }
