<template>
  <div class="navbar">
    <div class="logo">
      <img src="@/assets/logo.png" @click="$router.push('/')" />
    </div>
    <div>
      <p>
        请输入内容搜索
        <van-icon class="ipt-icon" name="search" />
      </p>
    </div>
    <div>
      <img
        :src="imgUrl"
        alt=""
        @click="$router.push('/userinfo')"
        v-if="imgUrl"
      />
      <img
        src="@/assets/default_img.jpg"
        alt=""
        @click="$router.push('/login')"
        v-else
      />
      <p>下载app</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: "",
    };
  },
  methods: {
    async NavInit() {
      if (localStorage.getItem("token")) {
        const res = await this.$http.get("/user/" + localStorage.getItem("id"));
        // console.log(res);
        this.imgUrl = res.data[0].user_img;
      }
    },
  },
  mounted() {
    this.NavInit();
  },
};
</script>

<style lang="less" scoped>
.navbar {
  height: 12vw;
  background-color: #fff;
  display: flex;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24vw;
    img {
      width: 100%;
    }
  }
  div:nth-child(2) {
    flex: 1;
    display: flex;
    align-items: center;
    margin: 0 1.333vw;
    p {
      font-size: 3.2vw;
      line-height: 6.933vw;
      background-color: #f4f4f4;
      height: 6.133vw;
      position: relative;
      padding-left: 5.333vw;
      width: 100%;
      border-radius: 3.467vw;
      color: #aaa;
      .ipt-icon {
        position: absolute;
        left: 2.667vw;
        top: 50%;
        transform: translate(0, -40%);
        color: #aaa;
      }
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 6.4vw;
      height: 6.4vw;
    }
    p {
      padding: 0 2.667vw;
      margin: 0 2.133vw;
      background-color: #fb7299;
      color: #fff;
      font-size: 3.467vw;
      border-radius: 0.8vw;
    }
  }
}
</style>
