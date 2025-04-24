const { complementary } = require("./solution")

test('complementary', () => {
  expect(complementary([2, 7, 11, 15], 9)).toStrictEqual([0, 1])
})