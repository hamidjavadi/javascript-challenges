function flattenArray(arr = []) {
  const result = []

  for (const arrItem of arr) {
    if (Array.isArray(arrItem)) {
      for (const item of flattenArray(arrItem)) {
        result.push(item)
      }
    } else {
      result.push(arrItem)
    }
  }

  return result
}

module.exports = {
  flattenArray
}