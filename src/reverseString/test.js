const { reverseString } = require("./solution")

test('Reverse a string', () => {
  const result = reverseString('hello');

  expect(result).toBe('olleh')
})