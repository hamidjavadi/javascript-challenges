function countVowels(str = '') {
  const regex = /[aeiou]/gi;

  return str.match(regex)?.length || 0;
}

module.exports = {
  countVowels
}