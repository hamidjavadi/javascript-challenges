const { findMax } = require("./solution")

describe('findMax Big(O) challenge', () => {
  test('findMax([1, 5, 2, 9, 3]) => 9', () => {
    expect(findMax([1, 5, 2, 9, 3])).toBe(9)
  })

  test('findMax([-1, 10, -10, 10, 13]) => 13', () => {
    expect(findMax([-1, 10, -10, 10, 2])).toBe(10)
  })
})