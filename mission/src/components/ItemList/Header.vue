<template>
  <div class="header">
    <h2 class="header-title" data-test="header-title">{{ headerTitle }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['headerTitle'],
};
</script>

<style>
.header {
  position: absolute;
  width: 390px;
  height: 70px;
  left: 0px;
  top: 0px;
}
</style>
