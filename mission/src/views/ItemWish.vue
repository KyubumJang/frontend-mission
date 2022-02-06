<template>
  <Header class="item-list-header" />
    <main>
      <h3 class="w3-container w3-left ">찜 목록</h3>
      <div class="w3-row item-wish-main" data-test="item-wish-page">
        <ItemListItem
          v-for="item in items"
          :name="item.name"
          :description="item.description"
          :price="item.price"
          :original_price="item.original_price"
          :product_no="item.product_no"
          :key="item.name"
          :img="item.image"
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
  getItemWish,
} from '../api/Item';
// getItemByItemNo, getItemWish, getItemInfo, getCartItem,
export default {
  name: 'ItemWishPage',
  components: {
    Header,
    ItemListItem,
    ItemListNav,
  },
  data() {
    return {
      loading: false,
      items: null,
      error: null,
    };
  },
  methods: {
    async fetchData() {
      this.error = null;
      this.items = null;
      this.loading = true;
      try {
        const res = await getItemWish();
        this.loading = false;
        this.items = res.data.items;
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
.item-wish-main {
  padding-bottom: 60px;
}

.item-list {
  position: relative;
  overflow-y: scroll;
}
.item-list-header {
  margin-bottom: 50px
}
</style>
