<template>
  <div id="item-list-page">
    <Header id="header" :headerTitle="headerTitle" />
    <Nav id="nav" />
  </div>
</template>

<script>
import Header from '@/components/ItemList/Header.vue';
import Nav from '@/components/ItemList/NavBar.vue';

export default {
  name: 'ItemListPage',
  components: {
    Header,
    Nav,
  },
  data() {
    return {
      headerTitle: 'My Shopping Mall',
      item: [
        {
          item_no: 1,
          item_image: '',
          price: 20000,
          original_price: 40000,
          name: 'product 1',
          description: 'description 1',
        },
        {
          item_no: 2,
          item_image: '',
          price: 40000,
          original_price: 40000,
          name: 'product 2',
          description: 'description 2',
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style></style>
