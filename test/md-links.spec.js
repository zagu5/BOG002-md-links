//const mdLinks = require('../index.js');
const functions = require ('../functions.js');
const link = ('https://http.cat/');


describe('getHttpRequest', () => {

  it('is a function', () => {
    expect(typeof functions.getHttpRequest).toBe('function')
  });

  it('Deberia traer el status', async () => {
    return await functions.getHttpRequest({href: (link)}).then (data => {
      expect(data.href).toBe('https://http.cat/');
      expect(data.status).toBe(200);
      expect(data.statusText).toBe('OK')
    })

  })
});
