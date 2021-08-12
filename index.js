const functions = require('./proofs');
const routeFile = ('C:\\BOG002-md-links\\archivos\\prueba.md');

function mdLinks(path){
  return new Promise ((resolve, reject) => {
    const routeVerify = functions.routeAbsolute((path.href));
    resolve(routeVerify)
  })
}


// mdLinks({
//   href: (routeFile),
//   // text: 'texto',
//   // file: 'ruta del archivo'
// })
// .then(links => {
//   console.log(links)
// })
// .catch(console.error);

module.exports = { mdLinks }
