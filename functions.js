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

// extrayendo links con el metodo map
function getLinks(route, dataFile){
  const getLink = markdownLinkExtractor(dataFile, true)
  //console.log(getLink)
    const links = getLink.map(link => {
      const fileLink = {
        file: route,
        href: link.href,
        text: link.text,
       };
       return fileLink
      })
    console.log(links)
}
getLinks(routeFile, markdown)

function getHttpRequest(linkUrl){
  axios
  .get(linkUrl)
  .then((response) => {
    {
    console.log('Status: ',response.status)
    console.log('Message: ',response.statusText)
    }
  })
  .catch((error) => {
    if(error.response){
      console.log(error.response.status);
    } else{
      console.log('Ha ocurrido un error: ', error.message)
    }
  })
} getHttpRequest('https://http.cat/')


