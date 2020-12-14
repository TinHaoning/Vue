<template>
  <div class="home">
    <nav-bar></nav-bar>
    <!-- swipeable滑动切换 -->
    <div>
      <div></div>
      <van-tabs v-model="active" swipeable sticky animated>
        <van-tab
          v-for="(item, index) in category"
          :key="index"
          :title="item.title"
        >
          <van-list
            v-model="item.loading"
            :finished="item.finished"
            finished-text="我也是有底线的"
            @load="onLoad"
          >
            <div class="detailparent">
              <cover
                class="detailitem"
                :detailitem="categoryitem"
                v-for="(categoryitem, categoryindex) in item.list"
                :key="categoryindex"
              />
            </div>
          </van-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/Navbar.vue'
import cover from "./cover";

export default {
  data() {
    return {
      category: [],
      active: 0,
    }
  },
  components: {
    NavBar,
    cover
  },
  methods: {
    // 获取分类列表菜单
    async selectCategory() {
      const res = await this.$http.get('/category')
      console.log(res)
      // this.category = res.data
      this.changeCategory(res.data)
    },
    //改造数据
    changeCategory(data) {
      const category1 = data.map((item, index) => {
        item.list = []
        item.page = 0
        item.finished = false
        item.loading = true
        item.pagesize = 8
        return item
      })
      this.category = category1
      this.selectArticle()
    },
    // 获取文章的数据
    async selectArticle() {
      const categoryitem = this.categoryitem()
      const res = await this.$http.get('/detail/' + categoryitem._id, {
        params: {
          page: categoryitem.page,
          pagesize: categoryitem.pagesize,
        },
      })
      categoryitem.list.push(...res.data)
      categoryitem.loading = false
      if(res.data.length < categoryitem.pagesize) {
          categoryitem.finished = true
      }
    },
    onLoad() {
      const categoryitem = this.categoryitem()
      setTimeout(() => {
        categoryitem.page += 1
        this.selectArticle()
      },1000)
    },
    categoryitem() {
      const categoryitem = this.category[this.active]
      // console.log(categoryitem);
      return categoryitem
    },
  },
  watch: {
    active() {
      // this.categoryitem()
      this.selectArticle()
    },
  },
  created() {
    this.selectCategory()
  },
}
</script>

<style lang="less">
.home {
  background-color: white;
  .detailparent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .detailitem {
      margin: 5px 0;
      width: 45%;
    }
  }
}
</style>