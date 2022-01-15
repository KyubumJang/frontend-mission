import { shallowMount } from '@vue/test-utils';
// import { isExportDeclaration } from 'typescript';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  const msg = 'new message';
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders props.msg when passed', () => {
    expect(wrapper.text()).toMatch(msg);
  });

  it('renders text input', () => {
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
  });

  it('renders submit button', () => {
    expect(wrapper.find('input[type="button"]').exists()).toBe(true);
  });

  it('has paragraph element', () => {
    expect(wrapper.find('p[data-test="customInput"]').exists()).toBe(true);
  });

  it('displays text from text input', async () => {
    const testText = 'hello from test code';
    await wrapper.get('input[type="text"]').setValue(testText);
    expect(wrapper.get('p[data-test="customInput"]').text()).toEqual(testText);
  });

  it('rotates text to left one at a time per button click', async () => {
    const testText = 'Projectlion';
    const resultText = 'rojectlionP'.trim();

    await wrapper.get('input[type="text"]').setValue(testText);
    await wrapper.get('input[type="button"]').trigger('click');

    expect(wrapper.get('p[data-test="customInput"]').text()).toBe(resultText);
  });

  it('shows alert with text and click counter', async () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    const testText = 'Text shown on alert!';

    await wrapper.get('input[type="text"]').setValue(testText);
    // 'input[type="button"][data-test="clickCounter"]'의 존재 여부 테스트를 추가할 수도 있습니다.
    expect(wrapper.get('input[type="button"][data-test="clickCounter"]').exists()).toBe(true);
    await wrapper.get('input[type="button"][data-test="clickCounter"]').trigger('click');
    await wrapper.get('input[type="button"][data-test="clickCounter"]').trigger('click');

    expect(window.alert).toBeCalledWith(`${testText} 2`);
  });
});
