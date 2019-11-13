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
        <el-form style="margin-top:20px">
            <!--表单中的每一项-->
            <el-form-item>
                <el-input v-model="input" placeholder="请输入手机号"></el-input>
            </el-form-item>
             <el-form-item>
                <el-input v-model="input" placeholder="请输入验证码" style="width:65%"></el-input>
                <el-button plain style="float:right">发送验证码</el-button>
            </el-form-item>
             <el-form-item>
                 <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
            </el-form-item>
             <el-form-item>
                <el-button type="primary" style="width:100%">登入</el-button>
            </el-form-item>
        </el-form>
      </el-card>
  </div>
</template>

<script>
export default {

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
