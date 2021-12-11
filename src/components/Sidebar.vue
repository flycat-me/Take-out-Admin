<template>
  <el-menu
    default-active="0"
    class="el-menu-vertical-demo"
    background-color="#334157"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item index="/addFoods">
      <i class="el-icon-menu"></i>
      <span slot="title">添加食品</span>
    </el-menu-item>
    <el-submenu index="2">
      <span slot="title"><i class="el-icon-tickets"></i>数据列表</span>
      <el-menu-item index="/shopList">
        <i class="el-icon-document"></i>
        <span slot="title">店铺列表</span>
      </el-menu-item>
      <el-menu-item index="/foodList">
        <!-- index 子路由路径（path的值） -->
        <i class="el-icon-document"></i>
        <span slot="title">食品列表</span>
      </el-menu-item>
      <el-menu-item index="/orderList">
        <i class="el-icon-document"></i>
        <span slot="title">订单列表</span>
      </el-menu-item>
    </el-submenu>

    <el-menu-item index="/test">
      <i class="el-icon-setting"></i>
      <span slot="title">用户信息</span>
    </el-menu-item>
    <el-menu-item index="/comTest">
      <i class="el-icon-setting"></i>
      <span slot="title">用户信息</span>
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