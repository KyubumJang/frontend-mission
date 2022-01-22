import { mount } from '@vue/test-utils';
import Header from '@/components/ItemList/Header.vue';

describe('Header', () => {
  const wrapper = mount(Header);
  it('renders Header', () => {
    expect(wrapper.find('.header').exists()).toBe(true);
  });
  it('renders header title', () => {
    expect(wrapper.find('.header-title').exists()).toBe(true);
  });
});
