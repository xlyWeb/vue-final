<template>
  <div class="nav-box">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        我是管理员
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>退出</el-dropdown-item>
        <el-dropdown-item>注销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <img class="head-img" :src="headImg" alt srcset />
  </div>
</template>
<script>
export default {
  data() {
    return {
      headImg: require("@/common/image/head.jpg"),
    };
  },
};
</script>
<style lang="less" scoped>
.nav-box {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 50px;
  .head-img {
    width: 30px;
    height: 30px;
  }
  .el-dropdown {
    margin-right: 10px;
  }
}
.el-dropdown-menu {
  left: 1262px !important;
}
</style>