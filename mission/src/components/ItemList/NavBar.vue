<template>
  <div class="nav-bar">
    <!-- 컴포넌트화를 위한 방법 찾는 중입니다. -->
    <!-- <NavItem :image="navigation.homeImage" :title="navigation.homeTitle" /> -->
    <div class="home-nav">
      <img data-test="home-image" src="@/assets/images/home.svg" />
      <div data-test="home-title">{{ navigation.homeTitle }}</div>
    </div>
    <div class="like-nav">
      <img data-test="like-image" src="@/assets/images/like.svg" />
      <div data-test="like-title">{{ navigation.likeTitle }}</div>
    </div>
    <div class="cart-nav">
      <img data-test="cart-image" src="@/assets/images/cart.svg" />
      <div data-test="cart-title">{{ navigation.cartTitle }}</div>
    </div>
    <div class="mypage-nav">
      <img data-test="mypage-image" src="@/assets/images/myPage.svg" />
      <div data-test="mypage-title">{{ navigation.myPageTitle }}</div>
    </div>
  </div>
</template>

<script>
// import NavItem from './NavItem.vue';

export default {
  name: 'NavBar',
  // components: { NavItem },
  data() {
    return {
      navigation: {
        homeImage: '@/assets/images/home.svg',
        homeTitle: '홈',
        likeImage: '@/assets/images/like.svg',
        likeTitle: '찜',
        cartImage: '@/assets/images/cart.svg',
        cartTitle: '장바구니',
        myPageImage: '@/assets/images/mypage.svg',
        myPageTitle: '마이 페이지',
      },
    };
  },
};
</script>

<style>
.nav-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  position: fixed;
  width: 390px;
  height: 70px;
  left: 0px;
  top: 774px;
}
</style>
