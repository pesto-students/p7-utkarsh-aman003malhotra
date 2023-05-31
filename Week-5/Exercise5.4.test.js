const mathOperations = {
  sum: function (a, b) {
    return a + b;
  },
  diff: function (a, b) {
    return a - b;
  },
  product: function (a, b) {
    return a * b;
  },
};

test("Lets test the sum function", () => {
  expect(mathOperations.sum(4, 5)).toBe(9);
  expect(mathOperations.sum(-2, 4)).toEqual(2);
  expect(mathOperations.sum(0, 0)).toEqual(0);
});

test("Lets test the sum function", () => {
  expect(mathOperations.diff(7, 5)).toBe(2);
  expect(mathOperations.diff(-2, 4)).toEqual(-6);
  expect(mathOperations.diff(0, 0)).toEqual(0);
});

test("Lets test the sum function", () => {
  expect(mathOperations.product(4, 5)).toBe(20);
  expect(mathOperations.product(-2, 4)).toEqual(-8);
  expect(mathOperations.product(0, 5)).toEqual(0);
});
