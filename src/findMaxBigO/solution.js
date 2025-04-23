function findMax(numbers = []) {
  let max = -Infinity;

  for (const num of numbers) {
    if (num > max) max = num;
  }

  return max
}

module.exports = {
  findMax
}