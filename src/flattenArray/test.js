const { flattenArray } = require("./solution")

describe('flattenArray challenge', () => {
  test('flattenArray([1, [2, [3, 4]], 5]) => [1, 2, 3, 4, 5]', () => {
    expect(flattenArray([1, [2, [3, 4]], 5])).toStrictEqual([1, 2, 3, 4, 5])
  })
})