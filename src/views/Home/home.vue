<template>
  <el-container>
    <el-aside width="300px">
      <div class="logo">后台管理系统</div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#334157"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
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
    <el-container>
      <el-header>
        <el-page-header @back="goBack" content="详情页面"> </el-page-header>
      </el-header>
      <el-main>
        <div class="mainBody">
          <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style>
.logo {
  width: 300px;
  height: 60px;
  background: #17b3a3;
  font-size: 22px;
  line-height: 60px;
  color: white;
  font-weight: bolder;
}

.el-header {
  background-color: #263238;
  color: #333;
  text-align: center;
  line-height: 60px;
  border-left-width: 1px;
  border-left-color: #e9eef3;
  border-left-style: solid;
  color: white;
}
.el-page-header {
  margin-left: 300px;
}

.el-aside {
  background-color: #263238;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
  position: absolute;
}

.el-main {
  background-color: white;
  height: 100%;
  color: black;
  width: 1236px;
  margin-left: 300px;
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
.mainBody{

}
</style>