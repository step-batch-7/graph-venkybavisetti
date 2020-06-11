//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const addDestinationsInQueue = function (
  pairs,
  queue,
  visited,
  destination,
  target
) {
  visited.push(destination);
  pairs.forEach((transport) => {
    if (
      destination === target ||
      (transport[0] === destination &&
        !visited.includes(transport[1]) &&
        !queue.includes(transport[1]))
    ) {
      queue.push(transport[1]);
    }
  });
};

const checkItself = function (pairs, source, target) {
  return pairs.some((transport) => {
    return transport[1] === source;
  });
};

const bfs = function (pairs, source, target) {
  if (source === target && !checkItself(pairs, source, target)) {
    return false;
  }
  let queue = [];
  let visited = [];
  addDestinationsInQueue(pairs, queue, visited, source, target);
  while (queue.length) {
    let destination = queue.shift();
    if (destination === target) return true;
    addDestinationsInQueue(pairs, queue, visited, destination, target);
  }
  return false;
};

module.exports = { bfs };
