var fetchMock = require('fetch-mock');

describe('fetch-mock', () => {
  it('mocks simplest http get request', (done) => {
    fetchMock.mock('http://rambo.was.ere', 301);
    fetch('http://rambo.was.ere')
      .then(res => {
        expect(fetchMock.calls().matched.length).to.equal(1);
        expect(res.status).to.equal(301);
        fetchMock.restore();
        done();
      });
  });
});
