<template>
    <div class="user-article">
        <div>
            <span>动态</span>
            <span>视频</span>
        </div>
        <div></div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    }
};
</script>

<style lang="less" scoped>
.user-article{
    display: flex;
    align-items: center;
    background-color: white;
    height: 42px;
    padding: 0 11px;
    border-top: 1px solid #ddd;
    span{
        margin: 0 8px ;
        color:#777;
    }
}

</style>
