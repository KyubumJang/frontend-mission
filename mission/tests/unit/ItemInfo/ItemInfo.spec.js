import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  it('renders ItemInfoPage', () => {
    const wrapper = mount(ItemInfoPage);
    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });
});
