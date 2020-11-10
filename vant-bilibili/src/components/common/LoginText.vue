<template>
    <div>
    <van-field
    :label="label"
    :placeholder="placeholder"
    :type="type"
    :rule="rule"
    v-model="content"
     />
    </div>
</template>

<script>


export default {
    data() {
        return {
            content:'',
        }
    },
    props:['label','placeholder','type','rule'],
    watch:{
        content(){
            console.log('监听成功');
        }
    }

  }
</script>

<style scoped lang='scss'>

</style>
