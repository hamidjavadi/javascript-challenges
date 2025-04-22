const { isPalindrome } = require("./solution")

test('String is a palindrome', () => {
  expect(isPalindrome("racecar")).toBe(true)
  expect(isPalindrome('hello')).toBe(false)
})