<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>테스트 코드 작성 후 개발하는 방식으로 리팩토링</h2>
    <input type="text" v-model="customInput" />
    <input type="button" value="제출" @click="rotateCustomInput" />
    <input type="button" data-test="clickCounter" value="알림" @click="showClickedInfo" />
    <p data-test="customInput">{{ customInput }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      customInput: '',
      clickCounter: 0,
    };
  },
  methods: {
    rotateCustomInput() {
      const currentText = this.customInput;
      this.customInput = `${currentText.substring(1)}${currentText[0]}`;
    },
    showClickedInfo() {
      this.clickCounter += 1;
      // eslint-disable-next-line no-alert
      alert(`${this.customInput} ${this.clickCounter}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
