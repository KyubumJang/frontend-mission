<template>
  <Header class="item-list-header" />
    <main>
      <div class="w3-row item-list-main" data-test="item-list-page">
        <ItemListItem
          v-for="item in items"
          :name="item.name"
          :description="item.description"
          :price="item.price"
          :original_price="item.original_price"
          :key="item.name"
          :product_no="item.product_no"
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
  getItem,
} from '../api/Item';

export default {
  name: 'ItemListPage',
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
        const res = await getItem();
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
.item-list-main {
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
