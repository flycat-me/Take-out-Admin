<template>
  <div>
    <div id="login">
      <h2 class="loginbox-title">用户名账号登录</h2>
      <div class="g-bd">
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="user"
        >
          <el-form-item label="名称">
            <el-input v-model="user.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-input v-model="user.password"></el-input>
          </el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
      return{
          labelPosition: 'right',
          user: {
              name: '',
              password:''
          }
      }
  },
  methods: {
      onSubmit(){
          this.$router.push('/home')
      }
  }
};
</script>

<style>
#login {
  width: 400px;
  height: 540px;
  background-color: gray;
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
  height: 302px;
  overflow: visible;
  position: relative;
  border-radius: 4px;
  background: #fff;
}
</style>
