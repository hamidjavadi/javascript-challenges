const { countVowels } = require("./solution")

describe('countVowels', () => {
  test('cat has 1 vowel', () => {
    expect(countVowels('cat')).toBe(1)
  })

  test('Hello World has 3 vowels', () => {
    expect(countVowels('Hello World')).toBe(3)
  })
})