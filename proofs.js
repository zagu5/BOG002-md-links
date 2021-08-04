const { readFileSync } = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');

const routeFile = ('C:\\BOG002-md-links\\archivos\\prueba.md');
const markdown = readFileSync(routeFile, {encoding: 'utf8'});

// const links = markdownLinkExtractor(markdown, false);
// links.forEach(link => console.log(link));

// const details = markdownLinkExtractor(markdown, true);
// details.forEach(detail => console.log(detail));

function getLinks(route, dataFile){
  const getLink = markdownLinkExtractor(dataFile, true)
  // console.log(getLink)
  // console.log('este es getLink', getLink)
  const links = []
    getLink.forEach(link => {
      // console.log(getLink.href)
      const fileLink = {
        file: route,
        href: link.href,
        text: link.text,
      };
      links.push(fileLink)
      console.log (links)
});
return links
}
// getLinks(routeFile, markdown)


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


// recibir un array de ibjetos y hacer peticion http para conocer el status de la pagina (axios,fetch)
