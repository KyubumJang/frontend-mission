import { mount } from '@vue/test-utils';
import Item from '../../../src/components/ItemList/Item.vue';

describe('Item', () => {
  const testPrice = 20000;
  const testOriginalPrice = 40000;
  const testName = 'product 1';
  const testDescription = 'description 1';
  it('renders Item', () => {
    const wrapper = mount(Item, {
      propsData: {
        price: testPrice,
        original_price: testOriginalPrice,
        name: testName,
        description: testDescription,
      },
    });
    expect(wrapper.get('div[data-test="item-name"]').exists()).toBe(true);
    expect(wrapper.get('div[data-test="item-description"]').exists()).toBe(true);
  });
});
