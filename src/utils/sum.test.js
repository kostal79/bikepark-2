import sum from "./sum";

describe('summ test', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  test('minus', () => {
    expect(sum(-1, -1)).toBe(-2);
  });

})