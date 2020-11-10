<template>
    <div>
        <div class="LoginTop">
            <div></div>
            <div>{{Toptitle}}</div>
            <div></div>
        </div>
    </div>
</template>

<script>


export default {
    props:['Toptitle']
  }
</script>

<style scoped lang='scss'>
.LoginTop{
    height: 50px;
    background-color: white;
    display: flex;
    div{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4.444vw;
    }
}
</style>
