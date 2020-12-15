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
    methods:{
        handlerulg() {
            const rue = new RegExp(this.rule)
            // console.log(rue); 
            if(rue.test(this.content)) {
                // console.log('正则校验成功');
                this.$emit('inputChange',this.content)
            }
        }
    },
    watch:{
        content(){
            this.handlerulg()
            // console.log('监听成功');
        }
    }

  }
</script>

<style scoped lang='scss'>

</style>
