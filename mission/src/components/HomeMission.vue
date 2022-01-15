<template>
  <div class="home-input">
    <h2>리팩토링 전 코드: 기능 동작, 잘못된 테스트 코드</h2>
    <input v-model="message" placeholder="" />
    <button v-on:click="rotateMessage">제출</button>
    <button v-on:click="NotificationEvent">알림</button>
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  name: 'HomeMission',
  data() {
    return {
      message: this.message,
      counter: 0,
    };
  },
  methods: {
    rotateMessage() {
      this.message = this.message.slice(1) + this.message[0];
    },
    notificationEvent() {
      this.counter += 1;
      // eslint-disable-next-line
      alert(`${this.message} ${this.counter}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #42b983;
}
</style>
