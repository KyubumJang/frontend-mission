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

  // NAV 컴포넌트
  it('renders NavBar Component', () => {
    const wrapper = mount(ItemListPage);
    expect(wrapper.find('#nav').exists()).toBe(true);
  });

  it('renders home image, home text', () => {
    const testHomeTitle = '홈';
    const wrapper = mount(ItemListPage);
    expect(wrapper.find('[data-test="home-title"]').text()).toBe(testHomeTitle);
  });
  it('renders home image, home text', () => {
    const testLikeTitle = '찜';
    const wrapper = mount(ItemListPage);
    expect(wrapper.find('[data-test="like-title"]').text()).toBe(testLikeTitle);
  });
  it('renders home image, home text', () => {
    const testCartTitle = '장바구니';
    const wrapper = mount(ItemListPage);
    expect(wrapper.find('[data-test="cart-title"]').text()).toBe(testCartTitle);
  });
  it('renders home image, home text', () => {
    const testMyPageTitle = '마이 페이지';
    const wrapper = mount(ItemListPage);
    expect(wrapper.find('[data-test="mypage-title"]').text()).toBe(testMyPageTitle);
  });
});
