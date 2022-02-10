import { mount } from '@vue/test-utils';
import Header from '@/components/ItemList/Header.vue';

describe('Header', () => {
  const wrapper = mount(Header);
  test('renders ItemListHeader', () => {
    expect(wrapper.find('header#item-list-header').exists()).toBe(true);
    expect(wrapper.find('header#item-list-header div').exists()).toBe(true);
  });
  it('renders Header', () => {
    expect(wrapper.find('.header').exists()).toBe(true);
  });
});
