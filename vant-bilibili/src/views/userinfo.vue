<template>
  <div class="userinfo">
    <nav-bar />
    <img src="@/assets/bannerTop_new.png" class="backimg" />
    <user-detail/>
  </div>
</template>

<script>
import NavBar from "@/components/common/Navbar.vue";
import userDetail from "@/components/userComponent/userDetail.vue"
export default {
  components: {
    NavBar,
    userDetail,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.userinfo {
  .backimg {
    height: 131px;
    width: 100%;
  }
}
</style>
