const functions = require('./functions.js');
const routeFile = ('C:\\BOG002-md-links\\archivos\\prueba.md');

function mdLinks(path){
  return new Promise ((resolve, reject) => {
    const routeVerify = functions.routeAbsolute((path));
    resolve(routeVerify)
  })
}


// mdLinks(routeFile)
// .then(links => {
//   console.log(links)
// })
// .catch(console.error);

module.exports = { mdLinks }
