<template>
  <div class="userinfo">
    <nav-bar />
    <img src="@/assets/bannerTop_new.png" class="backimg" />
    <user-detail :userInfo="model"/>
    <user-article/>
  </div>
</template>

<script>
import NavBar from "@/components/common/Navbar.vue";
import userDetail from "@/components/userComponent/userDetail.vue"
import userArticle from "@/components/userComponent/userArticle.vue"
export default {
  data() {
    return {
      model:{}
    };
  },
  components: {
    NavBar,
    userDetail,
    userArticle,
  },
  methods:{
    async userinfoData() {
      const res = await this.$http.get('/user/' + localStorage.getItem('id'))
      this.model = res.data[0]
      // console.log(res)
    },
  },
  created() {
    this.userinfoData()
  }
};
</script>

<style lang="less">
.userinfo {
  .backimg {
    height: 131px;
    width: 100%;
  }
}
</style>
