const { bfs } = require('./src/graph');
const data = require('./src/data.json');

const duplicate = [
  ['aa', 'bb'],
  ['bb', 'cc'],
  ['cc', 'aa'],
];
const main = function () {
  // console.log(`1) bb to jj`, bfs(data, 'bb', 'jj'));
  // console.log(`2) jj to aa`, bfs(data, 'jj', 'aa'));
  // console.log(`3) aa to hh`, bfs(data, 'aa', 'hh'));
  // console.log(`4) hh to ii`, bfs(data, 'hh', 'ii'));
  // console.log(`5) ii to ee`, bfs(data, 'ii', 'ee'));
  // console.log(`6) ee to mm`, bfs(data, 'ee', 'mm'));
  console.log(`7) mm to jj`, bfs(duplicate, 'aa', 'aa'));
};

main();
