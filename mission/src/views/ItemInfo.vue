/* eslint-disable vue/require-v-for-key */
<template>
  <div id="item-info-page">
    <div class="product-image">
      <img class="product" src="@/assets/images/dotShirt.jpg" />
    </div>
    <div class="product-detail">
      <div class="product-brand">
        <img class="brand-image" src="@/assets/images/brand.jpg" />
        <div class="brand-info">
          <div>{{ productBrand }}</div>
          <div class="brand-tag">
            <!-- eslint-disable-next-line vue/require-v-for-key -->
            <div class="brand-text" v-for="tag in tags">{{ tag }}</div>
          </div>
        </div>
        <div v-if="!isLove">
          <img class="star-button" v-on:click="click" src="@/assets/images/star.svg" />
        </div>
        <div v-else>
          <img class="star-button" v-on:click="click" src="@/assets/images/starFill.svg" />
        </div>
      </div>

      <div class="product-info">
        <div class="product-title">{{ productTitle }}</div>
        <div class="product-discount">
          <div class="product-onSale" v-if="onSale">
            <div class="discount-percent">{{ discountPricePercent }}</div>
            <div class="discount-price">{{ discountPrice }}</div>
          </div>
          <div class="original-price">{{ originalPrice }}</div>
        </div>
        <h2>상품 정보</h2>
        <h3>{{ productContent }}</h3>
        <img src="@/assets/images/slacks.jpg" />
        <p>{{ productSubContent }}</p>
      </div>
      <!-- 컴포넌트화 -->
      <div class="product-review" v-if="isReview">
        <h2>리뷰</h2>
        <div class="review-box">
          <div class="review-info">
            <div class="review-id">{{ reviewId }}</div>
            <div class="review-date">{{ reviewDate }}</div>
          </div>
          <div class="review-container">
            <div class="review-content">
              <p>{{ reviewTag[0] }}</p>
              <div class="reviewer-content">{{ reviewContent }}</div>
            </div>
            <div class="reviewer-image">
              <img class="review-img" src="@/assets/images/good.jpg" />
            </div>
          </div>
        </div>
        <footer class="buy-container">
          <button class="buy-button">{{ `${discountPrice} 구매}` }}</button>
        </footer>
      </div>
    </div>
    <ProductDetail />
    <Review />
  </div>
</template>

<script>
import ProductDetail from '@/components/ProductDetail.vue';
import Review from '@/components/Review.vue';

export default {
  name: 'ItemInfoPage',
  component: {
    ProductDetail,
    Review,
  },
  data() {
    return {
      product: 'clothes',
      productBrand: 'AND MORE',
      tags: ['#남성', '#셔츠', '#땡땡이'],
      isLove: false,
      productTitle: '예쁜 땡땡이 셔츠',
      onSale: true,
      originalPrice: '40,000원',
      discountPricePercent: '20%',
      discountPrice: '32,000원',
      productContent: '누구에게나 잘 어울리는 셔츠',
      productSubContent: '슬랙스와 입어보세요!',
      isReview: true,
      reviewId: 'jkb****',
      reviewDate: '2021-01-16',
      reviewTag: ['만족해요', '보통이에요', '별로에요'],
      reviewContent: '리뷰 내용',
      reviews: [],
    };
  },
  methods: {
    click() {
      this.isLove = !this.isLove;
      console.log(this.isLove);
    },
  },
  computed: {},
};
</script>

<style scoped>
.buy-container {
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 70px;
  width: 100%;
  background: grey;
  color: white;
  background-color: #fff;
}
.buy-button {
  position: absolute;
  width: 200px;
  height: 40px;
  left: 90px;
  top: 15px;
  background: #000000;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  border-radius: 5px;
}
.product-detail {
  display: flex;
  flex-direction: column;
}
.product-image {
  width: 390px;
  height: 390px;
  margin: 0;
}
.product-brand {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
}
.star-button {
  justify-content: flex-end;
  margin-left: 5rem;
  width: 45px;
  height: 45px;
}
.product-title {
  padding: 1rem;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
}
.brand-image {
  width: 45px;
  height: 45px;
  border-radius: 75px;
}
.brand-info {
  margin-left: 1.5rem;
  margin-right: 2rem;
  text-align: left;
}
.brand-tag {
  display: flex;
  flex-direction: row;
}
.brand-text {
  font-size: 14px;
  color: #b1b1b1;
}
.product-info {
  flex-direction: horizontal;
  flex-wrap: wrap;
}
.product-discount {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 1rem;
  align-items: center;
  justify-content: flex-start;
}
.product-onSale {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.discount-percent {
  font-size: 20px;
  color: #ff0000;
  margin-right: 1rem;
}
.discount-price {
  font-size: 20px;
  font-weight: bold;
  margin-right: 1rem;
}
.original-price {
  font-size: 14px;
  color: #b1b1b1;
  text-decoration: line-through;
}
.product-review {
  height: 250px;
}
.review-box {
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  margin: 1rem;
}
.review-info {
  display: flex;
  flex-direction: row;
}
.review-container {
  display: flex;
  flex-direction: row;
}
.review-id {
  font-size: 14px;
  margin-right: 1rem;
}

.review-date {
  font-size: 12px;
  color: #b1b1b1;
}
.reviewer-content {
  font-size: 14px;
  margin-left: 1rem;
}
.reviewer-image {
  display: flex;
  align-items: center;
  justify-self: flex-end;
  margin-left: 14rem;
}
.review-img {
  width: 45px;
  height: 45px;
}
h2 {
  font-size: 16px;
  display: flex;
  margin-left: 1rem;
}
h3 {
  font-size: 16px;
  display: flex;
  margin-left: 1rem;
}
p {
  display: flex;
  font-size: 18px;
  margin-left: 1rem;
}
img {
  width: 390px;
  height: 390px;
}
</style>
