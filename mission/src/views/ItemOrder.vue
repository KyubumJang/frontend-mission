<template>
  <Header class="item-order-header" />
    <main>
      <h3 class="w3-container w3-left">주문하기</h3>
      <div class="w3-container w3-col item-order-main" data-test="item-order-page">
          <div class="order-summary" data-test="item-order-summary">
              {{`${getCartItemsName} 포함 ${getCartCount}건
              ${priceStringWithComma(getCartTotalPrice)}`}}
          </div>
          <form class="w3-col order-info">
              <label class="w3-left" data-test="order-name">주문자명</label>
              <input class="w3-input w3-border order-name" type="text" id="input">
              <label class="w3-left" data-test="order-phone-number">전화번호</label>
              <input class="w3-input w3-border order-phone-number" type="text" id="input">
              <label class="w3-left" data-test="order-address">수령주소</label>
              <input class="w3-input w3-border order-address" type="text" id="input">
          </form>
          <div class="delivery-way">
            <div class="w3-left" data-test="delivery-title">배송 방법</div>
            <div class="w3-row">
                <div class="w3-left delivery-container">
                    <input class="w3-radio" type="radio" name="deliver-way" value="parcel" checked>
                    <label>택배</label>
                </div>
                <div class="w3-left delivery-container">
                    <input class="w3-radio" type="radio" name="deliver-way" value="quick">
                    <label>퀵 배송</label>
                </div>
            </div>
          </div>
          <div class="payment-way">
            <div class="w3-left" data-test="payment-title">결제 방법</div>
            <div class="w3-row">
              <button class="w3-btn w3-round w3-border w3-medium" style="width:50%">
                  <i class="fas fa-credit-card" />
                  <div>신용/체크카드</div>
              </button>
              <button class="w3-btn w3-round w3-border w3-medium" style="width:50%">
                  <i class="fas fa-money-bill" />
                  <div>계좌이체</div>
              </button>
            </div>
          </div>
      </div>
      <div class="w3-container w3-center">
        <router-link :to="{ name: 'OrderComplete' }">
          <button  class="w3-button w3-hover-gray w3-border">주문하기</button>
        </router-link>
      </div>

    </main>
    <ItemListNav />
</template>

<script>
import Header from '@/components/ItemList/Header.vue';
import ItemListNav from '@/components/ItemList/Nav.vue';

export default {
  name: 'ItemOrderPage',
  components: {
    Header,
    ItemListNav,
  },
  data() {},
  methods: {
    priceStringWithComma(value) { return `${value.toLocaleString()}원`; },
  },
  computed: {
    getCartItems() { return this.$store.getters.getCartItems; },
    getCartItemsName() {
      return this.$store.getters.getCartItemsName;
    },
    getCartCount() {
      return this.$store.getters.getCartCount;
    },
    getCartTotalPrice() { return this.$store.getters.getCartTotalPrice; },

  },
};
</script>

<style>
.item-order-main {
    padding-bottom: 60px;
}

.item-order-header {
    margin-bottom: 50px;
}

.order-summary {
    margin-bottom: 20px;
}
.order-info .delivery-way .payment-way {
    font-size: medium;
}

#input {
    margin-bottom: 20px;
}

.delivery-way {
    margin-bottom: 20px;
}

.delivery-container {
    margin-right: 20px;
}
</style>
