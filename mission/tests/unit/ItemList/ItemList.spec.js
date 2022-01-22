import { mount } from '@vue/test-utils';
import ItemListPage from '@/views/ItemList.vue';

describe('ItemListPage', () => {
  it('renders ItemListPage', () => {
    const wrapper = mount(ItemListPage);
    expect(wrapper.find('#item-list-page').exists()).toBe(true);
  });

  // 헤더 컴포넌트
  it('renders Header Component', () => {
    const wrapper = mount(ItemListPage);
    expect(wrapper.find('#header').exists()).toBe(true);
  });

  it('ItemListPage headerTitle equal Header Component headerTitle', () => {
    const testHeaderTitle = 'My Shopping Mall';

    const wrapper = mount(ItemListPage, {
      data() {
        return {
          headerTitle: testHeaderTitle,
        };
      },
    });
    expect(wrapper.find('[data-test="header-title"').text()).toBe(testHeaderTitle);
  });
});
