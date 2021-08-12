//const mdLinks = require('../index.js');
const getHttpRequest = require ('../proofs.js');
const link = ('https://http.cat/');


describe('getHttpRequest', () => {

  it('is a function', () => {
    expect(typeof getHttpRequest).toBe('object')
  });

  it('Deberia traer el status', async () => {
    return await getHttpRequest({href: (link)}).then (data => {
      expect(data.href).toBe('https://http.cat/')
    })

  })
});
