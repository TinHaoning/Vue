<template>
    <div>
    <!-- 头部标题 -->
    <login-top Toptitle="登录bilibili">
        <div slot="right" @click="$router.push('/register')" style="font-size:1.733vw">用户注册</div>
    </login-top>

    <!-- 用户名输入框 -->
    <login-text label="用户名"
    placeholder="请输入用户名"
    @inputChange="res => model.username = res"
    style="margin:4.167vw 0"    
    ></login-text>

    <!-- 密码输入框 -->
    <login-text label="密码"
    placeholder="请输入密码"
    type="password"
    @inputChange="res => model.password = res"    
    ></login-text>

    <!-- 登录按钮 -->
    <login-btn Btntext="登录" @registerSubmit="registerSubmit"></login-btn>
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
            model:{
                username:'',
                password:'',
            }
            
        }
    },
    methods:{
        async registerSubmit() {
            let rulg = /^.{6,16}/
            if(rulg.test(this.model.username) && rulg.test(this.model.password)){
                const res =  await this.$http.post('/login',this.model)
                // console.log(res);
                this.$msg.fail(res.data.msg)
                if(res.data.code == 301 || res.data.code == 302) {
                    return
                }
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('id', res.data.id)
                setTimeout(() => {
                    this.$router.push('/userinfo')
                },1000)
            }else{
                this.$msg.fail('格式不正确,请重新输入!')
            }
        }
    }
}
</script>

<style scoped lang='scss'>

</style>
