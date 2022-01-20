// 유닛테스트 [INPUT]
const inputMessage = {
  print: true,
  notPrint: false,
};
describe('input란에 메세지를 작성하면', () => {
  test('input란의 값이 출력된다.', () => {
    expect(inputMessage.print).toBeTruthy();
  });

  test('input란의 값이 출력되지 않는다.', () => {
    expect(inputMessage.notPrint).toBeFalsy();
  });
});
