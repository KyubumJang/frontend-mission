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
      <div v-if="isCart()">
          {{ `상품명: ${getCartItemsName} |` }}
          {{ `개수: ${getCartCount} |` }}
          {{ `총액: ${priceStringWithComma(getCartTotalPrice)}` }}
      </div>
      <router-link :to="{ name:'Order'}">
        <button  class="w3-button w3-hover-gray w3-border">구매하러 가기</button>
      </router-link>

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
    isCart() {
      if (this.$store.getters.getCartCount !== 0) {
        return true;
      }
      return false;
    },
    priceStringWithComma(value) { return `${value.toLocaleString()}원`; },
  },
  computed: {
    getCartItems() { return this.$store.getters.getCartItems; },
    getCartItemsName() { return this.$store.getters.getCartItemsName; },
    getCartCount() { return this.$store.getters.getCartCount; },
    getCartTotalPrice() { return this.$store.getters.getCartTotalPrice; },
  },
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
