const { readFileSync, link } = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const routeFile = ('C:\\BOG002-md-links\\archivos\\prueba.md');

const markdown = readFileSync(routeFile, {encoding: 'utf8'});

// const links = markdownLinkExtractor(markdown, false);
// links.forEach(link => console.log(link));

// const details = markdownLinkExtractor(markdown, true);
// details.forEach(detail => console.log(detail));

const getLink = markdownLinkExtractor(markdown, true)
  // console.log('este es getLink', getLink)
  const links = []
    getLink.forEach(link => {
      // console.log(getLink.href)
      const fileLink = {
        file: routeFile,
        href: link.href,
        text: link.text,
      };
      links.push(fileLink)
      console.log (links)
});
return links



// extrayendo links con el metodo map
// const getLink = markdownLinkExtractor(markdown, true)
// const linkFile = [{
//       file: routeFile,
//       href: getLink.href,
//       text: getLink.text,
//      }];
//   const links = linkFile.map(link => link.href)
//   console.log(links)
