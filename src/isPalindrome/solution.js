function isPalindrome(str) {
  return str.split('').reverse().join('') === str
}

module.exports = {
  isPalindrome
}