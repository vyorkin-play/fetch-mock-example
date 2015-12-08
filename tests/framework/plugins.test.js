
describe('karma plugins', () => {
  it ('exposes "expect" globally', () => {
    assert.equal(typeof expect, 'function');
  });

  it ('exposes "should" globally', () => {
    assert.equal(typeof should, 'object');
  });

  it ('has chai-as-promised helpers', () => {
    const pass = new Promise(res => res('test'));
    const fail = new Promise((res, rej) => rej());

    return Promise.all([
      expect(pass).to.be.fulfilled,
      expect(fail).to.not.be.fulfilled
    ]);
  });
});

