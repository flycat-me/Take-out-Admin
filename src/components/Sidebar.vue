<template>
  <el-menu
    default-active="/test"
    class="el-menu-vertical-demo"
    background-color="#334157"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item index="/index">
      <i class="el-icon-menu"></i>
      <span slot="title">导航一</span>
    </el-menu-item>
    <el-menu-item index="/test">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="/gettest">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style>
</style>