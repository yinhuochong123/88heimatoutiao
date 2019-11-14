<template>

      <el-row style="width:100%">
        <el-col :span="10">
            <!-- 左侧 -->
            <i class="el-icon-s-fold" style="font-size:30px;vertical-align: middle"></i>
            <span style="margin-left:10px">江苏传智播客教育科技股份有限公司</span>
        </el-col>
            <!-- 右侧 -->
        <el-col style="float:right" :span="4">
            <!-- 头像 -->
            <img src="../assets/img/avatar.jpg" alt="" style="vertical-align: middle;border-radius:50%" >
            <!-- 下拉菜单 -->
             <el-dropdown trigger="click">
             <span style="margin-left:10px">水若寒宇</span>
             <el-dropdown-menu slot="dropdown">
               <el-dropdown-item>账户信息</el-dropdown-item>
               <el-dropdown-item>git地址</el-dropdown-item>
               <el-dropdown-item>退出</el-dropdown-item>
             </el-dropdown-menu>
            </el-dropdown>
        </el-col>
      </el-row>

</template>

<script>
export default {

}
</script>

<style>
div {vertical-align: }
</style>
