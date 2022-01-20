// 유닛테스트 [검색 버튼]
const pressSearchBtn = {
  rotate: true,
  notRotate: false,
  wrongRotate: false,
};
describe('검색 버튼을 누르면', () => {
  test('문자열이 회전한다.', () => {
    expect(pressSearchBtn.rotate).toBeTruthy();
  });

  test('문자열이 회전하지 않는다.', () => {
    expect(pressSearchBtn.notRotate).toBeFalsy();
  });

  test('문자열이 잘못 회전한다.', () => {
    expect(pressSearchBtn.wrongRotate).toBeFalsy();
  });
});
