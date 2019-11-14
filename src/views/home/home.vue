<template>
  <div>
   <el-container>
     <!-- 左侧 -->
  <el-aside class="left">
    <!-- 左侧导航上边图片 -->
    <div class="menu-title" style="background-color:#2e2f32">
      <img src="../../assets/img/logo_admin.png" alt="">
    </div>
    <!-- 左侧导航 -->
    <el-menu background-color=" #353b4e" text-color=" #adafb5" active-text-color="#ffd04b" style="width:221px">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">内容管理</template>
        <el-menu-item index="2-1">发布文章</el-menu-item>
        <el-menu-item index="2-2">内容列表</el-menu-item>
        <el-menu-item index="2-3">评论列表</el-menu-item>
        <el-menu-item index="2-4">素材管理</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">粉丝管理</template>
        <el-menu-item index="2-1">图文数据</el-menu-item>
        <el-menu-item index="2-2">粉丝概况</el-menu-item>
        <el-menu-item index="2-3">粉丝画像</el-menu-item>
        <el-menu-item index="2-4">粉丝列表</el-menu-item>
      </el-submenu>

      <el-menu-item index="4">账户信息</el-menu-item>
    </el-menu>
  </el-aside>
<!-- 头部和中间 -->
  <el-container>
   <layout-header></layout-header>

  </el-container>
</el-container>
  </div>
</template>

<script>
import layoutheader from '../../components/layout-header.vue'
export default {

  components: {
    'layout-header': layoutheader
  }
}
</script>
<style lang="less" scope>
.left {
  background-color: #353b4e;
  width: 220px!important;
  height: 100vh;
overflow: hidden!important;
.menu-title {
  padding:20px;
  text-align: center;
  img {
    height: 30px;
  }
}
}

</style>
