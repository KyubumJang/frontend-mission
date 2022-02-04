<template>
  <div class="header" :class="{ 'header--hidden': !showHeader }">
    <h2 class="header-title" data-test="header-title">{{ headerTitle }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['headerTitle'],
  data() {
    return {
      showHeader: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', this.onScroll);
    const viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    viewportMeta.content = 'width=device-width, initial-scale=1';
    document.head.appendChild(viewportMeta);
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showHeader = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 390px;
  height: 70px;
  left: 0px;
  top: 0px;
  background: #fff;
  position: fixed;
  transition: all 0.3s ease;
  transform: translate3d(0, 0, 0);
}
.header.header--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>
