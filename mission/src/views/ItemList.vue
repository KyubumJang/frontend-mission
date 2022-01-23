<template>
  <div class="item-list" id="item-list-page">
    <Header id="header" :headerTitle="headerTitle" />
    <!-- v-for로 해결할 수 있을 듯 하지만 일단 구현부터 하기로 판단하였습니다. -->
    <!-- 이 아래 class="two-col" 아이템 리스트를 컴포넌트로 만들 수 있을 듯 한데 방법을 모르겠습니다. -->
    <div class="item-wrapper" id="item-wrapper">
      <div class="two-col">
        <Item
          :price="item[0].price"
          :original_price="item[0].original_price"
          :name="item[0].name"
          :description="item[0].description"
        />
        <Item
          :price="item[1].price"
          :original_price="item[1].original_price"
          :name="item[1].name"
          :description="item[1].description"
        />
      </div>
      <div class="two-col">
        <Item
          :price="item[0].price"
          :original_price="item[0].original_price"
          :name="item[0].name"
          :description="item[0].description"
        />
        <Item
          :price="item[1].price"
          :original_price="item[1].original_price"
          :name="item[1].name"
          :description="item[1].description"
        />
      </div>
      <div class="two-col">
        <Item
          :price="item[0].price"
          :original_price="item[0].original_price"
          :name="item[0].name"
          :description="item[0].description"
        />
        <Item
          :price="item[1].price"
          :original_price="item[1].original_price"
          :name="item[1].name"
          :description="item[1].description"
        />
      </div>
      <div class="two-col">
        <Item
          :price="item[0].price"
          :original_price="item[0].original_price"
          :name="item[0].name"
          :description="item[0].description"
        />
        <Item
          :price="item[1].price"
          :original_price="item[1].original_price"
          :name="item[1].name"
          :description="item[1].description"
        />
      </div>
      <div class="two-col">
        <Item
          :price="item[0].price"
          :original_price="item[0].original_price"
          :name="item[0].name"
          :description="item[0].description"
        />
        <Item
          :price="item[1].price"
          :original_price="item[1].original_price"
          :name="item[1].name"
          :description="item[1].description"
        />
      </div>
    </div>
    <Nav id="nav" />
  </div>
</template>

<script>
import Header from '@/components/ItemList/Header.vue';
import Item from '@/components/ItemList/Item.vue';
import Nav from '@/components/ItemList/NavBar.vue';

export default {
  name: 'ItemListPage',
  components: {
    Header,
    Item,
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

<style>
.item-list {
  position: relative;
  overflow-y: scroll;
}
.item-wrapper {
  padding-top: 70px;
  padding-bottom: 70px;
}
.two-col {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
