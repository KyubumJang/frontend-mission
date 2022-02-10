<template>
  <header
  class="w3-container" id="item-list-header">
    <div class="header" :class="{ 'header--hidden': !showHeader }">
      <h3>My Shopping Mall</h3>
    </div>
  </header>
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
  width: 100%;
  height: 50px;
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

#item-list-header div {
  margin-left: auto;
  display: flex;
  align-items: center;
}
</style>
