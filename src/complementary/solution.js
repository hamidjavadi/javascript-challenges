function complementary(arr = [], target) {
  const map = {}

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (complement in map) {
      return [map[complement], i]
    }

    map[arr[i]] = i;
  }
}

module.exports = {
  complementary
}