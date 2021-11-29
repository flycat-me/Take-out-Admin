<template>
  <el-container>
    <el-header>
      <div style="height: 60px; line-height: 60px; display: flex">
        <div class="logo">后台管理</div>
        <div style="flex: 1"></div>
        <div style="width: 100px">
          <el-dropdown>
            <span class="el-dropdown-link">
              <el-avatar
                :size="30"
                :src="user.avatar"
                style="position: relative; top: 10px"
              ></el-avatar>
              {{ user.nickName }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="$router.push('/person')"
                  >个人信息</el-dropdown-item
                >
                <el-dropdown-item @click="$router.push('/login')"
                  >退出系统</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#334157"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">导航一</span>
          </el-menu-item>
          <el-menu-item index="home/test">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    this.chartSettings = {};
    return {
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
        ],
      },
      user: {
        avatar:
          "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        nickName: "admin",
      },
    };
  },
};
</script>

<style>
.el-container {
  height: 100%;
}
.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
  background: #263238;
  margin: 0;
  padding: 0;
}
.logo {
  width: 200px;
  font-weight: bold;
  color: white;
  background: #17b3a3;
}

.el-aside {
  background-color: #263238;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: white;
  height: 100%;
  color: black;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-page-header {
  display: flex;
  line-height: 60px;
}
</style>