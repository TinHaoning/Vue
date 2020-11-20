<template>
  <div>
      <div class="detailItem">
          <img :src="detailitem.img" alt="" style="width:100%">
          <p>{{detailitem.name}}</p>
      </div>
  </div>
</template>

<script>
export default {
  props: ["detailitem"],
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.detailItem{
    p{
        font-size: 3.2vw;
    }
}
</style>
