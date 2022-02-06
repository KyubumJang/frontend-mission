<template>
  <Header class="item-list-header" />
    <main>
      <div class="w3-row item-list-main" data-test="item-list-page" v-if="isDataExist()">
        <h3 class="w3-container w3-left ">마이 페이지</h3>
        <div class= "w3-col" >
          <div>이메일: {{Info.email}}</div>
          <div>아이디: {{Info.id}}</div>
          <div>유저 이름: {{Info.username}}</div>
        </div>
      </div>
    </main>
    <ItemListNav />
</template>

<script>
import Header from '@/components/ItemList/Header.vue';
import ItemListNav from '@/components/ItemList/Nav.vue';
import {
  getInfo,
} from '../api/User';
// getItemByItemNo, getItemWish, getItemInfo, getCartItem,
export default {
  name: 'UserInfoPage',
  components: {
    Header,
    ItemListNav,
  },
  data() {
    return {
      loading: false,
      Info: null,
      error: null,
    };
  },
  methods: {
    async fetchData() {
      this.error = null;
      this.Info = null;
      this.loading = true;
      try {
        const res = await getInfo();
        this.loading = false;
        this.Info = res.data;
      } catch (err) {
        this.error = err.toString();
      }
    },
    isDataExist() {
      if (this.Info) {
        return true;
      } return false;
    },
  },
  computed: {},
  created() {
    this.fetchData();
  },
};
</script>

<style>
.item-list-main {
  padding-bottom: 60px;
}

.item-list {
  position: relative;
  overflow-y: scroll;
}
.item-list-header {
  margin-bottom: 50px
}
</style>
