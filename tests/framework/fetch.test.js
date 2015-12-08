import fetchMock from 'fetch-mock';

describe('fetch-mock', () => {
  it('mocks simplest http get request', (done) => {
    fetchMock.mock('http://google.com', 301);
    fetch('http://google.com').then(res => {

      console.log('we never ever get here'); // <--

      expect(fetchMock.calls().length).to.equal(1);
      expect(res.status).to.equal(301);
      fetchMock.restore();
      done();
    });
  });
});
