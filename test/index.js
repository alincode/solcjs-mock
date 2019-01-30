const mock = require('../src')
const chai = require('chai');
chai.should();

describe('index', () => {
  it('mock', async () => {
    mock();
  });
});