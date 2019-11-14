<template>
  <div class='login'>
      <!-- 使用elementui中的组件 白色卡片el-card -->
      <el-card class='login-card'>
          <!-- 头部图标 -->
        <div class="title">
            <img src="../../assets/img/logo_index.png" alt="">
        </div>
        <!-- 中部表单 -->
        <!-- 表单容器 （表单域）中可放各种类型的表单空件-->
        <!-- model属性要绑定表单数据对象element规定 -->
        <el-form style="margin-top:20px" :model="loginForm" :rules="loginrules" ref="loginobj">
            <!--表单中的每一项-->
            <el-form-item prop="mobile">
                <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
            </el-form-item>
             <el-form-item prop="code">
                <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:65%"></el-input>
                <el-button plain style="float:right">发送验证码</el-button>
            </el-form-item>
             <el-form-item prop="agree">
                 <el-checkbox v-model="loginForm.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
            </el-form-item>
             <el-form-item>
                <el-button type="primary" style="width:100%" @click="onlogin">登入</el-button>
            </el-form-item>
        </el-form>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 表单数据是个对象
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        agree: false // 是否同意
      },
      //   自动校验规则对象
      loginrules: {
        //   key(要校验的字段名):value（数组=>规则对象=>多条或一条或没有）
        mobile: [
          { required: true, message: '请输入您的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码' }
        ],
        agree: [
          { validator: function (rule, value, callback) {
            // rule 代表当前规则，value代表当前值（true或false），callback回调函数
            if (value) {
              // 通过校验
              callback()
            } else {
              callback(new Error('您必须同意我们的协议'))
            }
          } }
        ]
      }
    }
  },
  methods: {
    //   手动校验
    onlogin () {
      // validate  是一个方法 => 方法中传入的一个函数 两个校验参数  是否校验成功/未校验成功的字段
      this.$refs.loginobj.validate(isok => {
        if (isok) {
        //   如果是正确的则继续下一步，调用接口
          this.$axios({
            url: '/authorizations',
            data: this.loginForm,
            method: 'post'
          }).then(res => {
            // console.log(res)  获得token令牌
            // 存入本地，放入前端的缓存中
            window.localStorage.setItem('user-token', res.data.data.token)
            // 登入成功，跳转到主页，编程式导航
            this.$router.push('/home')
          }).catch(() => {
            this.$message({
              message: '登入失败，后端错误',
              type: 'warning'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.login {
    background-image:url("../../assets/img/login_bg.jpg");
    height: 100vh;
    background-size:cover;
    display:flex;
    justify-content: center;
    align-items: center;

    .login-card{
        width: 440px;
        height: 340px;
        background-color: #fff;

        .title {
            text-align: center;
            img {
                height: 45px;
            }
        }
    }
}
</style>
