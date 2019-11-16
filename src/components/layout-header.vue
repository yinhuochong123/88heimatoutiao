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
               <!-- 组件注册事件要加一个.native -->
               <el-dropdown-item @click.native='outlogin'>退出</el-dropdown-item>
             </el-dropdown-menu>
            </el-dropdown>
        </el-col>
      </el-row>

</template>

<script>
export default {
  methods: {
    outlogin () {
      this.$confirm('确认退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 删除token
        window.localStorage.removeItem('user-token')
        // 跳转到登入页
        this.$router.push('/login')
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    }
  }
}
</script>

<style>

</style>
