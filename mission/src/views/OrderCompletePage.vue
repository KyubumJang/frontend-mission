<template>
  <main>
    <div class="w3-container w3-center w3-col order-complete-main" data-test="order-complete-page">
        <div class="icon">
        <i class="fas fa-2x fa-check"></i>
        </div>
        <h3>주문이 완료되었습니다.</h3>
        <a href="http://localhost:8080/" class="w3-button w3-hover-gray w3-border">
        홈으로
        </a>

    </div>
  </main>
  <ItemListNav />
</template>

<script>

export default {
  name: 'OrderCompletePage',
  components: {
  },
  data() {},
  methods: {},
  computed: {},
};
</script>

<style>
.order-complete-main {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    padding-bottom: 60px;
}
</style>
