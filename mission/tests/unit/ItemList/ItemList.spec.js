import { mount } from '@vue/test-utils';
import ItemListPage from '@/views/ItemList.vue';
import ItemListItem from '@/components/ItemList/Item.vue';

const dataItemList = [
  {
    name: '핏이 좋은 수트',
    price: 198000,
    display_price: '198,000원',
    description: '아주 잘 맞는 수트',
  },
];
describe('ItemListPage', () => {
  it('renders ItemListPage', () => {
    const wrapper = mount(ItemListPage);
    expect(wrapper.find('[data-test="item-list-page"').exists()).toBe(true);
  });

  // ItemList 컴포넌트
  it('renders multiple Item Component', () => {
    const wrapper = mount(ItemListPage, {
      data() {
        return { items: dataItemList };
      },
    });
    const itemWrapper = wrapper.findAllComponents(ItemListItem);

    for (let i = 0; i < dataItemList.length; i += 1) {
      const currentItemWrapper = itemWrapper[i];

      // expect(currentItemWrapper.get('[data-test="item-name"]').text()).toEqual(
      //   dataItemList[i].name,
      // );
      // expect(currentItemWrapper.get('[data-test="item-price"]').text()).toEqual(
      //   dataItemList[i].display_price,
      // );
      // expect(currentItemWrapper.get('[data-test="item-description"]').text()).toEqual(
      //   dataItemList[i].description,
      // );
    }
  });
});
