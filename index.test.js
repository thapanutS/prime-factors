const { getPrimeFactors, checkPrimeFactors, findPrimeFactorCount } = require("./index.js");

test("getPrimeFactors (หาตัวประกอบเฉพาะจากจํานวนต่างกันที่กำหนด) 🛠️", () => {
  expect(getPrimeFactors(595)).toEqual([5, 7, 17]);
  expect(getPrimeFactors(525)).toEqual([3, 5, 7]);
  expect(getPrimeFactors(255)).toEqual([3, 5, 17]);
});

test("checkPrimeFactors (ตรวจสอบจำนวนตัวประกอบเฉพาะว่าเท่ากับจํานวนต่างกันที่กำหนดหรือไม่) 🛠️", () => {
  expect(checkPrimeFactors(555, 2)).toBe(false);
  expect(checkPrimeFactors(555, 3)).toBe(true);
  expect(checkPrimeFactors(55, 2)).toBe(true);
  expect(checkPrimeFactors(644, 4)).toBe(false);
});

test('findConsecutiveNumbersWithFourPrimeFactors หาลำดับจำนวนที่ถูกต้อง', () => {
    expect(findPrimeFactorCount(4)).toBe(134043);
});
