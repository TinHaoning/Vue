<template>
  <div @click="$router.push('/detail/'+detailitem.id+'')">
    <div class="detailItem">
      <div class="imgparent">
        <img :src="detailitem.img" alt="" style="width:100%;height:27.778vw">
        <div class="bottom">
          <div class="icon-play2">
            <span class="video icon-play2">77</span>
          </div>
          <div class="icon-file-text">
            <span class="comment icon-file-text">{{!detailitem.commentlen ? 66 : detailitem.commentlen}}</span>
          </div>
        </div>
      </div>
      <p>{{detailitem.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['detailitem'],
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.detailItem {
  p {
    font-size: 3.2vw;
    padding: 3px 0;
  }
}
.imgparent {
  position: relative;
  .bottom{
      padding: 0 10px;
      margin-bottom: 5px;
      position: absolute;
      bottom: 2px;
      background: linear-gradient(0deg,rgba(0,0,0,85),transparent);
      justify-content: space-between;
      color: white;
      display: flex;
      left: 0;
      right: 0;
  }
}
</style>
