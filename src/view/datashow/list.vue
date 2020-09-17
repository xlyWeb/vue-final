<template>
  <div class="list-box">
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="input-box">
          <el-date-picker v-model="date" type="date" size="large" placeholder="选择日期"></el-date-picker>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="input-box">
          <el-input placeholder="请输入姓名" v-model="name" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="input-box">
          <el-input placeholder="请输入地址" v-model="address" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="input-box">
          <el-input placeholder="请输入年龄" v-model="age" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="input-box">
          <el-input placeholder="请输入工作" v-model="job" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="input-box">
          <el-input placeholder="请输入手机号" v-model="phone" />
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
          <el-button type="primary" @click="add()">清空</el-button>
        </div>
      </el-col>
    </el-row>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      :highlight-current-row="true"
    >
      <el-table-column type="selection"></el-table-column>
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
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :center="false"
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import list from "@/common/data/list";
import { getConsumerList } from "@/api/request";
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      date: "",
      name: "",
      address: "",
      age: "",
      job: "",
      phone: "",
      pageIndex:1,
      pageSize:10,
      dialogVisible: false,
    };
  },
  created() {
    // this.tableData = list;
    let data = {
      pageIndex:this.pageIndex,
      pageSize: this.pageSize
    }
    getConsumerList(data).then((res) => {
      this.tableData = res.data.consumer;
      console.log(res, "===");
    });
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    search() {
      let data = {
        date: this.date,
        name: this.name,
        address: this.address,
        age: this.age,
        job: this.job,
        phone: this.phone,
        pageIndex:this.pageIndex,
        pageSize: this.pageSize
      };
      getConsumerList(data).then((res) => {
        this.tableData = res.data.consumer;
        console.log(res, "--");
      });
    },
    add() {
      // this.dialogVisible = true;
      this.$router.push('/data-addList')
    },
    submit() {
      this.dialogVisible = false;
    },
    handleClose() {
      console.log("关闭前");
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
    .el-date-editor.el-input, .el-date-editor.el-input__inner{
      width: 140px;
    }
  }
}
</style>