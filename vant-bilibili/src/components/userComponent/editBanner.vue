<template>
    <div @click="bannerClick">
        <div class="editbanner">
            <span>{{left}}</span>
            <span><slot name="right"></slot></span>
        </div>
    </div>
</template>

<script>
export default {
    props:['left'],
    methods: {
        bannerClick() {
            this.$emit('bannerClick')
        }
    },
};
</script>

<style lang="less" scoped>
.editbanner{
    background-color:white;
    padding: 16px;
    color: #333;
    font-size: 15px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
