<template>
  <nav id="item-list-nav">
    <ul>
      <router-link :to="{ name:'Home'}">
        <li><i class="fas fa-home" /><span>홈</span></li>
      </router-link>
      <router-link :to="{ name:'Wish'}">
      <li><i class="fas fa-heart" /><span>찜</span></li>
       </router-link>
      <router-link :to="{ name:'Cart'}">
      <li><i class="fas fa-shopping-cart" /><span>장바구니</span></li>
       </router-link>
      <router-link :to="{ name:'Info'}">
      <li><i class="fas fa-user" /><span>마이 페이지</span></li>
       </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'ItemListNav',
};
</script>

<style scoped>
#item-list-nav ul {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 0;
  z-index: 100;
  height: 50px;
  margin-bottom: 0px;
  text-align: center;
  background-color: white;
  border-top: 1px solid lightslategray;
}

#item-list-nav ul li {
  display: inline-block;
  width: 25%;
  margin-left: auto;
  margin-right: auto;
  font-size: small;
  margin-top: 10px;
}

#item-list-nav ul li span {
  display: block;
}
</style>
