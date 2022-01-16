import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  const wrapper = mount(ItemInfoPage);
  it('renders ItemInfoPage', () => {
    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });

  it('renders productImage', () => {
    expect(wrapper.find('product=image').exists()).toBe(true);
  });

  it('renders productImage', () => {
    expect(wrapper.find('product=image').exists()).toBe(true);
  });
});
