<template>
  <div style="line-height: 50px; display: flex">
    <div class="logobox">
      <img class="logoimg" src="../assets/img/logo.png" alt="" />
    </div>
    <div style="flex: 1; border-left: 1px solid white">
      <el-button class="buttonimg">
        <img
          class="showimg"
          :src="collapsed ? imgsq : imgshow"
          @click="toggle(collapsed)"
        />
      </el-button>
    </div>
    <div style="width: 100px">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar
            :size="30"
            :src="user.avatar"
            style="position: relative; top: 10px"
          ></el-avatar>
          {{ user.nickName }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userCenter">个人中心</el-dropdown-item>
          <el-dropdown-item command="logout">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      collapsed: true,
      imgshow: require("../assets/img/show.png"),
      imgsq: require("../assets/img/sq.png"),
      // user: {},
      user: {
        avatar: require("../assets/img/loginUser.png"),
        nickName: "admin",
      },
    };
  },
  methods: {
    // 退出登录
    handleCommand(command) {
      if (command === "logout") {
        this.$confirm("退出登录, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            setTimeout(() => {
              //点击退出系统后将清除用户信息
              sessionStorage.setItem("username","")
              this.$router.push({ path: "/login" });
              this.$message({
                type: "success",
                message: "已退出登录!",
              });
            }, 1000);
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消",
            });
          });
      }else if(command === "userCenter"){
        this.$router.push("/userInfo")
      }
    },
    exit() {
      console.log("退出系统");
    },
    // 切换显示
    toggle(showtype) {
      this.collapsed = !showtype;
    },
  },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  border: none;
}

.buttonimg {
  height: 60px;
  background-color: transparent;
  border: none;
  position: absolute;
  left: 200px;
}
.showimg {
  width: 26px;
  height: 26px;
}

.logobox {
  height: 60px;
  width: 200px;
}
.el-dropdown {
  top: 5px;
  right: 20px;
}
.showimg:active {
  border: none;
}
</style>