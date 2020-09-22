<template>
  <div class="list-box">
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="input-box">
          <el-date-picker v-model="searchData.date" type="date" size="large" placeholder="选择日期"></el-date-picker>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="input-box">
          <el-input placeholder="请输入姓名" v-model="searchData.name" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="input-box">
          <el-input placeholder="请输入地址" v-model="searchData.address" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="input-box">
          <el-input placeholder="请输入年龄" v-model="searchData.age" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="input-box">
          <el-input placeholder="请输入工作" v-model="searchData.job" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="input-box">
          <el-input placeholder="请输入手机号" v-model="searchData.phone" />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2">
        <div class="input-box">
          <el-button type="primary" @click="search">搜索</el-button>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="input-box">
          <el-button type="primary" @click="add()">增加</el-button>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="input-box">
          <el-button type="primary" @click="clearInput()">清空</el-button>
        </div>
      </el-col>
    </el-row>
    <el-table
      v-loading="loading"
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      :highlight-current-row="true"
    >
      <el-table-column label="日期" align="center">
        <template slot-scope="scope">{{ scope.row.time }}</template>
      </el-table-column>
      <el-table-column prop="username" label="姓名" align="center"></el-table-column>
      <el-table-column prop="address" label="地址" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="age" label="年纪" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="job" label="工作" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="phone" label="手机" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="goAdd(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteUser(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageTotal"
    ></el-pagination>
  </div>
</template>
<script>
import list from "@/common/data/list";
import { getConsumerList, deleteConsumerList } from "@/api/request";
export default {
  data() {
    return {
      tableData: [],
      searchData: {
        date: "",
        name: "",
        address: "",
        age: "",
        job: "",
        phone: "",
      },

      pageIndex: 1,
      pageSize: 10,
      pageTotal: 0,
      dialogVisible: false,
      loading: false,
      currentPage4: 1,
    };
  },
  created() {
    // this.tableData = list;
    let data = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
    };
    this.initData(this.searchData, data)
  },
  methods: {
    initData(arr, page) {
      let data = {
        ...arr,
        ...page,
      };
      this.loading = true;
      getConsumerList(data).then((res) => {
        this.loading = false;
        this.tableData = res.data.consumer;
        this.pageTotal = res.data.page.total;
      });
    },
    search() {
      let page = {
        pageIndex:this.pageIndex,
        pageSize: this.pageSize
      }
      this.initData(this.searchData, page)
    },
    add() {
      this.$router.push("/data-addList");
    },
    goAdd(id) {
      console.log(id);
      this.$router.push({
        path: "/data-addList",
        query: {
          id,
        },
      });
    },
    deleteUser(id) {
      let dt = {
        id,
      };
      deleteConsumerList(dt).then((res) => {
        if (res.status === "success") {
          this.search();
          this.$message("删除成功");
        }
      });
    },
    clearInput() {
      for (const key in this.searchData) {
        this.searchData[key] = "";
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style lang="less" scoped>
.list-box {
  width: 90%;
  margin: 50px auto;
  .el-row {
    margin-bottom: 20px;
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 140px;
    }
  }
}
</style>