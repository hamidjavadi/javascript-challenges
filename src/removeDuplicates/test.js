const { removeDuplicates } = require("./solution")

test('Remove Duplicates', () => {
  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 4]);
  const result2 = removeDuplicates([10, "s", 10, -2, 6, "s", "wb", "wb", '|', 4]);

  expect(result).toStrictEqual([1, 2, 3, 4])
  expect(result2).toStrictEqual([10, "s", -2, 6, "wb", '|', 4])
})