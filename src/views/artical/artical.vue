<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>全部图文</span>
      </div>

      <el-form ref="form" label-width="80px">
        <el-form-item label="文章状态">
          <el-radio-group v-model="filterform.status">
            <el-radio label="全部"></el-radio>
            <el-radio label="草稿"></el-radio>
            <el-radio label="待审核"></el-radio>
            <el-radio label="待通过"></el-radio>
            <el-radio label="审核失败"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道列表">
          <el-select placeholder="请选择活动区域" v-model="filterform.channel_id">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间选择">
          <el-date-picker
            v-model="rangedate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>



    <!-- 文章列表 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>共找到{{ totalcount }}条符合条件的内容</span>
      </div>
     <el-table
        :data="articles"
        style="width: 100%"
        v-loading="loading"
        >
        
        <el-table-column
          prop="cover"
          label="封面"
          width="180">
             <template slot-scope="scope">
            <img width="50" :src="scope.row.cover.images[0]">
          </template>
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态">
            <template slot-scope="scope">
            <el-tag
              :type="articleStatus[scope.row.status].type"
            >{{ articleStatus[scope.row.status].lable }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="pubdate"
          label="发布日期">
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作">
           <template>
            <el-button type="danger" size="mini">删除</el-button>
            <el-button type="primary" size="mini">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
  </el-card>
<!-- 文章列表 -->





  <!-- 分页 -->
  <!--
      分页组件：
      它默认按照 10 条每页划分页码
      total 用来指定一共有多少条数据
      background 背景色
      layout 用来控制布局
     -->
  <el-pagination
     background
     layout="prev, pager, next"
     :total="totalcount"
     @current-change="onPageChange"
     :disabled="loading" 
     >
 </el-pagination>
 <!-- 分页 -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      filterform: {
        status: "",
        channel_id: "",
        begin_pubdate: "",
        end_pubsate: ""
      },
      rangedate: "",
      articles: [], // 文章数据列表
    articleStatus:[
      {
        type:'',
        lable:'草稿'
      },
        {
        type:'',
        lable:'待审核'
      },
        {
        type:'',
        lable:'审核通过'
      },
        {
        type:'',
        lable:'审核失败'
      },
        {
        type:'',
        lable:'已删除'
      }
    ],
    total:0,
    loading:true,
    totalcount:0 //总计录数

    }
  },

  created (){
   
   // 初始化的时候加载第 1 页数据
    this.loadArticles(1)
  },
  methods:{
    // 如果 page 就使用传递的，如果没传，默认就是 1
       loadArticles (page=1) {
         this.loading=true
      // 在我们的项目中，除了 /login 接口不需要 token，其它所有的接口都需要提供 token 才能请求
      // 否则后端返回 401 错误
      // 我们这里的后端要求把 token 放到请求头中
      const token = window.localStorage.getItem('user-token')

      this.$axios({
        method: 'GET',
        url: '/articles',
        headers: { // 添加请求头
          // 名字: 值
          // 后端要求把 token 放到请求头中，使用一个名字叫：Authorization
          // 注意，token的格式要求：Bearer 用户token
          // 注意！！！Bearer有个空格，多了少了都不行
          Authorization: `Bearer ${token}`
        },
         // Query 参数使用 params 传递
         params:{
           page,//页码
           per_page:10 //// 每页大小，后端按照默认 10 条每页
         }
      }).then(res => {
        console.log(res)
        // 更新文章列表数组
        this.articles = res.data.data.results
        // 更新总计入数
        this.totalcount=res.data.data.total_count
      }).catch(err => {
        console.log(err, '获取数据失败')
      }).finally(()=>{
        this.loading=false
      })
    },
     onPageChange (page) {
      // 请求加载指定页码的文章列表
      this.loadArticles(page)
    }
  }
}
</script>

<style lang="less" scoped>
.article {
  .box-card {
    margin-bottom: 20px;
  }
}
</style>
