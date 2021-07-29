// module.exports = () => {
//   // ...
// };
const path = require('path');

//  const ruta = ('/prueba.md')

const absolute = path.isAbsolute('//prueba.md');
console.log('la ruta es ' + absolute)
