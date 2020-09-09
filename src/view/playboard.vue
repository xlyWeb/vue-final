<template>
  <div class="board-box">
    <div class="box-menu">
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="#000"
        text-color="#fff"
        active-text-color="#00FF7F"
        style="height:100vh"
        :collapse-transition="false"
        router
        :unique-opened="true"
      >
        <el-menu-item index="/" >
          <img :style="logoStyle" :src="imgList.logo" alt srcset />
          <span :style="logoText">管理系统</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">可视化</span>
          </template>
          <el-submenu index="2">
            <span slot="title">地图</span>
            <el-menu-item index="map-baidu">百度地图</el-menu-item>
            <el-menu-item index="map-gaode">高德地图</el-menu-item>
            <el-menu-item index="map-tengxun">腾讯地图</el-menu-item>
          </el-submenu>
          <el-menu-item index="1-2">大屏</el-menu-item>
          <el-submenu index="1-4">
            <span slot="title">ECHARTS</span>
            <el-menu-item index="echarts-category">折线</el-menu-item>
            <el-menu-item index="echarts-bar">柱状图</el-menu-item>
            <el-menu-item index="1-4-3">饼图</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">表格操作</span>
          </template>
          <el-menu-item index="2-1">导入 / 导出</el-menu-item>
          <el-menu-item index="2-1">pdf</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">添加 / 表单</span>
          </template>
          <el-menu-item index="operater-add">添加</el-menu-item>
          <el-menu-item index="2-1">编辑</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">数据展示</span>
          </template>
          <el-menu-item index="data-stage">阶段展示</el-menu-item>
          <el-menu-item index="data-gannt">gannt</el-menu-item>
          <el-menu-item index="data-list">列表展示</el-menu-item>
          <el-menu-item index="data-msg">信息展示</el-menu-item>
        </el-submenu>        
      </el-menu>
    </div>
    <div class="content">
      <div class="ope-icon">
        <i class="el-icon-s-fold" v-if="!isCollapse" @click="fold"></i>
        <i class="el-icon-s-unfold" v-if="isCollapse" @click="unfold"></i>
        <Nav />
      </div>
      <img class="con-img" v-if="showRoute" :src="imgList.manage" alt srcset />
      <router-view style="padding:20px" v-if="!showRoute"/>
    </div>
  </div>
</template>
<script>
import Nav from "@/components/nav.vue";
export default {
  components: {
    Nav,
  },
  data() {
    return {
      isCollapse: false,
      imgList: {
        manage: require("@/common/image/manage.jpg"),
        logo: require("@/common/image/logo.png"),
      },
      logoStyle: {
        width: "30px",
        height: "30px",
      },
      logoText: {
        fontSize: "16px",
        color: "#AFEEEE",
        textAlign: "center",
        lineHeight: "30px",
      },
      showRoute: false,
    };
  },
  watch: {
    '$route':{
      handler(to,from){
        console.log(to,from)
        if(to.path === '/'){
          this.showRoute = true
        }else {
          this.showRoute = false
        }
      },
      deep:true,
      immediate: true
    }
  },
 
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath, "open");
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath, "close");
    },
    fold() {
      this.isCollapse = true;
    },
    unfold() {
      this.isCollapse = false;
    },
  },
};
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.board-box {
  display: flex;
  .box-menu {
    display: flex;
    .el-menu-vertical-demo[data-v-7b155961]:not(.el-menu--collapse) {
      width: 150px;
    }
    .el-submenu .el-menu-item {
      min-width: 150px;
    }
    .el-submenu,
    .el-menu-item {
      text-align: left;
    }
  }
  .content {
    width: 100%;
    height: 100vh;
    background: palegreen;
    .con-img {
      width: 100%;
      height: calc(100vh - 50px);
    }
    .ope-icon {
      float: left;
      z-index: 1;
      display: flex;
      width: 100%;
      background: #778899;
      align-items: center;
      font-size: 30px;
    }
  }
}
</style>