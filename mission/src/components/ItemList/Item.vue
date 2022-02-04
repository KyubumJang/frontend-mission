<template>
  <div class="item-list-item">
    <img data-test="item-image" src="@/assets/images/product.svg" />
    <div class="item-info">
      <div class="item-discount" v-if="isDiscounted()">
        <div class="dicount-rate" data-test="discount-rate">{{ discountRate }}</div>
        <div class="dicount-price" data-test="discount-price">
          {{ priceStringWithComma(price) }}
        </div>
      </div>
      <div v-else>
        <div data-test="original-price">{{ priceStringWithComma(original_price) }}</div>
      </div>
      <div data-test="item-name">{{ name }}</div>
      <div data-test="item-description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  // 'item_image'를 어떻게 처리해야할지 고민해볼 것
  props: ['price', 'original_price', 'name', 'description'],
  methods: {
    isDiscounted() {
      if (this.price !== this.original_price) {
        return true;
      }
      return false;
    },
    priceStringWithComma(value) {
      return `${value.toLocaleString()}원`;
    },
  },
  computed: {
    discountRate() {
      const rate = 100 - (this.price / this.original_price) * 100;
      console.log(rate);
      return `${rate}%`;
    },
  },
};
</script>

<style>
.item-list-item {
  margin-bottom: 1em;
}
.item-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.item-discount {
  display: flex;
  flex-direction: row;
}
.dicount-rate {
  color: #ff0000;
  margin-right: 1em;
}
</style>
