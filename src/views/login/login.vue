<template>
  <div class="background">
    <div id="login">
      <h2 class="loginbox-title">外卖点餐后台管理系统</h2>
      <div class="g-bd">
        <el-form
          :model="loginForm"
          :rules="loginrules"
          ref="loginForm"
          label-width="80px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="name">
            <el-input type="text" prefix-icon="el-icon-user" v-model="loginForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" prefix-icon="el-icon-lock" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')"
            >立即登录</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        name: "",
        password: ""
      },
      loginrules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message:"请输入密码",trigger: "blur"}]
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
            this.$router.push("home")
        } else {
          this.$message.error('请正确填写用户名和密码');
          return false;
        }
      });
    },
  },
};
</script>

<style>
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("../../assets/login_bg.jpg");
  background-size: cover;
}
#login {
  width: 400px;
  height: 400px;
  top: 110px;
  right: 20%;
  position: absolute;
  background-color: rgb(255, 255, 255);
  margin-left: 55%;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
}

.loginbox-title {
  padding: 40px 0 0;
  color: #333;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
}
h2 {
  display: block;
  font-weight: bold;
}
.g-bd {
  width: 400px;
  height: 282px;
  overflow: visible;
  position: relative;
  border-radius: 4px;
  background: #fff;
}

.el-form-item {
  margin-top: 40px;
  margin-right: 70px;
}
.el-button--primary {
  width: 250px;
  margin-left: 80px;
  margin-top: 20px;
}
</style>
