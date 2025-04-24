function removeDuplicates(arr = []) {
  // The best way is [...new Set(arr)]

  const result = []

  for (const item of arr) {
    if (!result.includes(item)) {
      result.push(item)
    }
  }

  return result
}

module.exports = {
  removeDuplicates
}