<template>
    <div class="btnwrap">
        <div class="LoginBtn">{{Btntext}}</div>
    </div>
</template>

<script>
export default {
    props: ['Btntext']
}
</script>

<style scoped lang='scss'>
.btnwrap {
    padding: 4.167vw 2.778vw;
    .LoginBtn {
        height: 12.5vw;
        background-color: #ff9db5;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4.444vw;
        border-radius: 6.25vw;
    }
}
</style>
