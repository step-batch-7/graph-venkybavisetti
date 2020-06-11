const assert = require('chai').assert;
const { bfs } = require('../src/graph');
const data = require('../src/data.json');

describe('bfs', function () {
  it('should return true when path exists', function () {
    assert.isTrue(bfs(data, 'jj', 'aa'));
  });
  it('should return false when path not exists', function () {
    assert.isNotTrue(bfs(data, 'bb', 'jj'));
  });

  it('should give true for non-adjacent and connected nodes in recursive graph', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['b', 'b'],
      ['c', 'a'],
    ];
    assert.isTrue(bfs(pairs.slice(), 'a', 'a'));
  });
});
