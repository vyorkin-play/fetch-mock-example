import assert from 'assert';
import fetchMock from 'fetch-mock';

describe('fetch-mock', () => {
  it('mocks simplest http get request', (done) => {
    fetchMock.mock('http://ya.ru', 301);
    fetch('http://ya.ru').then(res => {
      console.log('value');
      expect(fetchMock.calls().length).to.equal(1);
      expect(res.status).to.equal(301);
      fetchMock.restore();
      done();
    });
  });
});
