<template>
  <div class="item-list-item w3-container">
    <div class="w3-panel">
      <router-link :to="{ name:'Item', params: {id: product_no}}">
        <img data-test="item-image" class="w3-round-large" :src="img" />
      </router-link>
    </div>
      <div class="w3-container price-container">
        <div class="w3-left discount" v-if="isDiscounted" data-test="discount-rate">
            {{ displayDiscountRate }}
        </div>
        <div class="w3-left price" data-test="discount-price">
          {{ priceWithComma }}
        </div>
      </div>
      <div class="w3-container w3-left info-container">
        <div class="info-name" data-test="item-name">{{ name }}</div>
        <div data-test="item-description">{{ description }}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: {
    name: { type: String, default: '' },
    price: { type: Number, default: 0 },
    img: {
      type: String,
      default: 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/suit-1.png',
    },
    original_price: { type: Number, default: -1 },
    description: { type: String, default: '' },
    discount_rate: { type: Number, default: null },
    product_no: { type: String, defualt: '' },
  },
  computed: {
    priceWithComma() {
      return `${this.price.toLocaleString()}원`;
    },
    isDiscounted() {
      return this.original_price !== -1;
    },
    displayDiscountRate() {
      const rate = ((this.original_price - this.price) / this.original_price) * 100;
      return `${rate.toFixed(0)}%`;
    },
  },
};
</script>

<style>
img {
  border: 1px solid black;
  width: 100%;
}

.discount {
  padding-right: 5px;
  color: red;
  font-weight: bold;
}

.price {
  font-weight: bold;
}

.info-container {
  color: gray;
}

.info-container > .info-name {
  font-weight: bold;
}
.info-name {
  display: flex;
}
</style>
