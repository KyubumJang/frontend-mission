<template>
  <div id="item-list-page">
    <Header id="header" :headerTitle="headerTitle" />
  </div>
</template>

<script>
import Header from '@/components/ItemList/Header.vue';

export default {
  name: 'ItemListPage',
  components: {
    Header,
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
      navigation: [
        {
          image: '',
          title: '홈',
        },
        {
          image: '',
          title: '찜',
        },
        {
          image: '',
          title: '장바구니',
        },
        {
          image: '',
          title: '마이 페이지',
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style></style>
