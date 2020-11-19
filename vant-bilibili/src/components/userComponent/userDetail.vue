<template>
  <div class="userDetail">
    <!-- 头像、粉丝关注获赞、编辑资料btn -->
    <div>
      <!-- 头像 -->
      <div><img class="user_img" src="@/assets/default_img.jpg" alt="" /></div>
      <!-- 粉丝关注获赞、编辑资料btn -->
      <div class="user_edit">
        <div>
          <p>
            <span class="user_num">0</span>
            <span class="user_text">粉丝</span>
          </p>
          <span class="ver_line"></span>
          <p>
            <span class="user_num">54</span>
            <span class="user_text">关注</span>
          </p>
          <span class="ver_line"></span>
          <p>
            <span class="user_num">0</span>
            <span class="user_text">获赞</span>
          </p>
        </div>
        <div>
          <div class="user_editBtn">编辑资料</div>
        </div>
      </div>
    </div>
    <!-- 昵称、个人签名 -->
    <div>
      <h2>Kingsman</h2>
      <p>这个人很懒，什么都没写</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.userDetail {
  background-color: white;
  padding: 0 3.2vw;
  > div:nth-child(1) {
    display: flex;
    .user_img {
      margin-right: 5.333vw;
      height: 22.667vw;
      width: 22.667vw;
      border-radius: 50%;
    }
    .user_edit {
      flex: 1;
      // 竖线
      .ver_line {
        height: 6.133vw;
        border: 0.267vw solid #d0d0d0;
        border-radius: 50%;
        transform: -50%;
      }
      flex: 1;
      // 粉丝、关注、获赞
      div:nth-child(1) {
        display: flex;
        p {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-size: 3.467vw;
          // 粉丝、关注、获赞数量
          .user_num {
            font-size: 4.8vw;
          }
          // 粉丝、关注、获赞
          .user_text {
            color: #aaa;
          }
        }
      }
      // 编辑资料按钮
      div:nth-child(2) {
        padding: 3.467vw 5.333vw 0;
        .user_editBtn {
          color: #fb7a9f;
          border: 0.267vw solid;
          padding: 0.8vw;
          border-radius: 1.333vw;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  >div:nth-child(2) {
      h2 {
          margin: 10px 0 3px 0;
          font-weight: 400;
      }
      p {
          color: #aaa;
          padding: 0;
          margin:8px 0 0;
          font-size: 13px;
      }
  }
}
</style>
