<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HomeMission />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import HomeMission from '@/components/HomeMission.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    HomeMission,
  },
};
</script>
