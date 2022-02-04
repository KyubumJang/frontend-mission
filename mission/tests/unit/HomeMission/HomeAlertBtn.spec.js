// 유닛테스트 [알림 버튼]
const pressAlertBtn = {
  alertWindowOpen: true,
  alertWindowClosed: false,
  printMessage: true,
  notPrintMessage: false,
  printConter: true,
  notPrintCounter: false,
  noAlertError: false,
};
describe('알림 버튼을 누르면', () => {
  test('alert창이 뜬다.', () => {
    expect(pressAlertBtn.alertWindowOpen).toBeTruthy();
  });

  test('alert창이 뜨지않는다.', () => {
    expect(pressAlertBtn.alertWindowClosed).toBeFalsy();
  });

  test('input란의 메시지가 출력된다.', () => {
    expect(pressAlertBtn.printMessage).toBeTruthy();
  });

  test('input란의 메시지가 출력되지 않는다.', () => {
    expect(pressAlertBtn.notPrintMessage).toBeFalsy();
  });

  test('Alert 버튼 누른 횟수가 출력된다.', () => {
    expect(pressAlertBtn.printConter).toBeTruthy();
  });

  test('Alert 버튼 누른 횟수가 출력되지 않는다.', () => {
    expect(pressAlertBtn.printConter).toBeTruthy();
  });

  test('noAlert 에러가 출력된다', () => {
    expect(pressAlertBtn.noAlertError).toBeFalsy();
  });
});
