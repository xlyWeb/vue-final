<template>
  <div class="add-box">
    <p>新增</p>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      size="medium "
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" maxlength="10" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="日期" prop="time">
        <el-date-picker
          v-model="ruleForm.time"
          align="right"
          type="date"
          style="width: 100%;"
          placeholder="选择日期"
          format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item label="工作" prop="job">
        <el-input v-model="ruleForm.job"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
    </el-form>
    <div class="oper">
      <el-button type="primary" @click="submit()">提交</el-button>
      <el-button>取消</el-button>
    </div>
  </div>
</template>
<script>
import { addConsumerList } from "@/api/request";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        time: "",
        address: "",
        age: "",
        job: "",
        phone: "",
        password: "",
      },
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        date: [
          {
            type: "date",
            required: true,
            message: "请输入日期",
            trigger: "blur",
          },
        ],
        address: [{ required: true, message: "请输入地址", trigger: "blur" }],
        age: [{ required: true, message: "请输入年纪", trigger: "blur" }],
        job: [{ required: true, message: "请输入工作", trigger: "blur" }],
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
      },
    };
  },
  methods: {
    submit() {
      console.log(this.ruleForm, "--");
      addConsumerList(this.ruleForm).then((res) => {
        console.log(res);
        if (res.status === "success") {
          this.$router.push("/data-list");
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.add-box {
  width: 500px;
  margin: 0 auto;
}
</style>