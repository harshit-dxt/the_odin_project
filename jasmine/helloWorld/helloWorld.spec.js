const helloWorld = require('./helloWorld.js');

describe('Hello World', function() {
  it('says hello world', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});