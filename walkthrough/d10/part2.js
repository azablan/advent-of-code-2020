const fs = require('fs').promises;

const readLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
  const lines = await readLines();
  const numbers = lines.map(Number);
  const sorted = numbers.sort((a, b) => a - b);
  const last = sorted[sorted.length - 1];
  const input = [ 0, ...sorted, last + 3];
  return numWays(input);
};


const numWays = (array, i = 0, memo = {}) => {
  if (i in memo)
    return memo[i];

  if (i === array.length - 1)
    return 1;
  
  let total = 0;

  if (array[i + 1] && ((array[i + 1] - array[i]) <= 3))
    total += numWays(array, i + 1, memo);
  
  if (array[i + 2] && ((array[i + 2] - array[i]) <= 3))
    total += numWays(array, i + 2, memo);

  if (array[i + 3] && ((array[i + 3] - array[i]) <= 3))
    total += numWays(array, i + 3, memo);

  memo[i] = total;
  return total;
};


solve().then(console.log); // 8099130339328