//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const addDestinationsInQueue = function (pairs, queue, visited, destination) {
  pairs.forEach((transport) => {
    if (
      transport[0] === destination &&
      !visited.includes(transport[1]) &&
      !queue.includes(transport[1])
    ) {
      queue.push(transport[1]);
    }
  });
};

const checkSourceAndTarget = function (pairs, source, target) {
  const result = pairs.some((transport) => {
    return transport[1] === source;
  });
  return result;
};

const bfs = function (pairs, source, target) {
  if (source === target && !checkSourceAndTarget(pairs, source, target))
    return false;
  let queue = [];
  let visited = [];
  addDestinationsInQueue(pairs, queue, visited, source);
  while (queue.length) {
    let destination = queue.shift();
    if (destination === target) return true;
    visited.push(destination);
    addDestinationsInQueue(pairs, queue, visited, destination);
  }
  return false;
};

module.exports = { bfs };
