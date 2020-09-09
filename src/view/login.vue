<template>
  <div class="login-page">
    <p class="title">一起来玩玩</p>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      size="small"
    >
      <el-form-item label="账号" prop="name">
        <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import addData from "@/util/storage";
export default {
  data() {
    let validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号,默认账号为admin"));
      }
      callback();
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码，默认密码为admin"));
      }
      callback();
    };
    return {
      ruleForm: {
        name: "admin",
        pass: "admin",
      },
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
 
  methods: {
    submitForm(formName) {
      // console.dir(this.$refs[formName].validate(valid))
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 设置登录token 时间+随机数
          let dateNum = new Date().getTime();
          let random = Math.random().toFixed(5) * 100000;
          let token = `${dateNum + random}`;
          console.log(token);
          setTimeout(() => {
            this.$router.push("/");
          }, 500);
          addData("token", token);
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 973px;
  background-image: url("../common/image/login.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  .demo-ruleForm {
    width: 25%;
    margin: 5% auto;
    .el-form-item {
      /deep/.el-form-item__label {
        font-size: 16px;
        color: #fff;
      }
      .el-button {
        width: 60%;
      }
    }
  }
  .title {
    font-size: 25px;
    color: aqua;
    margin-top: 20%;
    text-align: center;
    margin-left: 60px;
  }
}
</style>