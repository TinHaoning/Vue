<template>
    <div>
    <!-- 头部标题 -->
    <login-top Toptitle="注册bilibili"></login-top>

    <!-- 姓名输入框 -->
    <login-text label="姓名" 
    placeholder="请输入姓名"
    rule="^.{6,16}$"
    @inputChange="res => name = res"    
    style="margin:4.167vw 0">
    </login-text>

    <!-- 用户名输入框 -->
    <login-text label="用户名"
    placeholder="请输入用户名"
    rule="^.{6,16}$" 
    @inputChange="res => username = res"    
    ></login-text>

    <!-- 密码输入框 -->
    <login-text label="密码"
    placeholder="请输入密码"
    type="passward"
    rule="^.{6,16}$"
    @inputChange="res => password = res"    
    ></login-text>

    <!-- 注册按钮 -->
    <login-btn Btntext="注册" @registerSubmit="registerSubmit"></login-btn>
    </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginBtn.vue'

export default {
    components: {
        LoginTop,
        LoginText,
        LoginBtn,
    },
    data() {
        return {
            name: '',
            username:'',
            password:'',
        }
    },
    methods:{
        // successIpt(content) {
        //     console.log(content);
        // }
        registerSubmit() {
            // console.log('按钮被点击了');
            if(this.name && this.username && this.password) {
                // console.log('正则全都校验成功');
                this.$http.post('/register', {
                    name: this.name,
                    username: this.username,
                    password: this.password
                }).then(res => {
                    
                })
            }
        }
    }
}
</script>

<style scoped lang='scss'>

</style>
