<template>
    <div>
    <!-- 头部标题 -->
    <login-top Toptitle="注册bilibili">
        <div slot="right" @click="$router.push('/login')" style="font-size:1.733vw">切换到登录</div>
    </login-top>

    <!-- 姓名输入框 -->
    <login-text label="姓名" 
    placeholder="请输入姓名"
    rule="^.{6,16}$"
    @inputChange="res => model.name = res"    
    style="margin:4.167vw 0">
    </login-text>

    <!-- 用户名输入框 -->
    <login-text label="用户名"
    placeholder="请输入用户名"
    rule="^.{6,16}$" 
    @inputChange="res => model.username = res"    
    ></login-text>

    <!-- 密码输入框 -->
    <login-text label="密码"
    placeholder="请输入密码"
    type="password"
    rule="^.{6,16}$"
    @inputChange="res => model.password = res"    
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
            model:{
                name: '',
                username:'',
                password:'',
            }
            
        }
    },
    methods:{
        async registerSubmit() {
            let rulg = /^.{6,16}/
            if(rulg.test(this.model.name) && rulg.test(this.model.username) && rulg.test(this.model.password)){
                const res =  await this.$http.post('/register',this.model)
                // console.log(res);
                this.$msg.fail(res.data.msg)
            }else{
                this.$msg.fail('格式不正确,请重新输入!')
            }
        }
    }
}
</script>

<style scoped lang='scss'>

</style>
