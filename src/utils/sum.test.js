import MySum from "./sum";

test('summ test', () => {
  const sumClass = new MySum()
  const spyC = jest.spyOn(sumClass, 'first');
  const spyD = jest.spyOn(sumClass, "second")
  spyC.mockReturnValue(10);
  spyD.mockReturnValue(1)
  expect(sumClass.sum()).toBe(11);
  spyC.mockRestore();
  spyD.mockRestore();
  // test('minus', () => {
  //   expect(sum(-1, -1)).toBe(-2);
  // });

})