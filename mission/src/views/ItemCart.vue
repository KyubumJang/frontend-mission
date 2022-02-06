<template>
  <Header class="item-list-header" />
    <main>
      <h3 class="w3-container w3-left ">카트 목록</h3>
      <div class="w3-row cart-main" data-test="cart-page">
        <ItemListItem
          v-for="cartItem in cartItems"
          :name="cartItem.name"
          :description="cartItem.description"
          :price="cartItem.price"
          :original_price="cartItem.original_price"
          :product_no="cartItem.product_no"
          :key="cartItem.name"
          :img="cartItem.image"
          class="w3-col s6"
          data-test="item"
          >
        </ItemListItem>
      </div>
    </main>
    <ItemListNav />
</template>

<script>
import Header from '@/components/ItemList/Header.vue';
import ItemListItem from '@/components/ItemList/Item.vue';
import ItemListNav from '@/components/ItemList/Nav.vue';
import {
  getCartItem,
} from '../api/Item';
// getItemByItemNo, getItemWish, getItemInfo, getCartItem,
export default {
  name: 'ItemCartPage',
  components: {
    Header,
    ItemListItem,
    ItemListNav,
  },
  data() {
    return {
      loading: false,
      cartItems: null,
      error: null,
    };
  },
  methods: {
    async fetchData() {
      this.error = null;
      this.cartItems = null;
      this.loading = true;
      try {
        const res = await getCartItem();
        this.loading = false;
        this.cartItems = res.data.cart_item;
      } catch (err) {
        this.error = err.toString();
      }
    },
  },
  computed: {},
  created() {
    this.fetchData();
  },
};
</script>

<style>
.item-list-header {
    margin-bottom: 50px
  }

.cart-main {
  padding-bottom: 60px;
}

.item-list {
  position: relative;
  overflow-y: scroll;
}
</style>
