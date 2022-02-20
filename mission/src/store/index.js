import { createStore } from 'vuex';

export default createStore({
  state: {
    cart_total_price: 0,
    cart_items: [],
  },
  getters: {
    getCartItemsName(state) {
      if (state.cart_items.length === 0) {
        const name = '';
        return name;
      }
      return state.cart_items[0].name;
    },
    getCartCount(state) {
      return state.cart_items.length;
    },
    getCartTotalPrice(state) {
      return state.cart_total_price;
    },
    getCartItems(state) {
      return state.cart_items;
    },
  },
  mutations: {
    addCartItem(state, items) {
      state.cart_items.push(items);
    },
    setTotalPrice(state, price) {
      state.cart_total_price += price;
    },
  },
  actions: {},
  modules: {},
});
