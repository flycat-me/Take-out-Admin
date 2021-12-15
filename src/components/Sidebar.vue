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
    <el-submenu index="0">
      <span slot="title"><i class="el-icon-shopping-cart-2"></i>店铺管理</span>
      <el-menu-item index="/shopList">
        <i class="el-icon-s-order"></i>
        <span slot="title">店铺列表</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="1">
      <span slot="title"><i class="el-icon-fork-spoon"></i>食品管理</span>
      <el-menu-item index="/foodList">
        <!-- index 子路由路径（path的值） -->
        <i class="el-icon-tickets"></i>
        <span slot="title">食品列表</span>
      </el-menu-item>
    </el-submenu>

    <el-submenu index="2">
      <span slot="title"><i class="el-icon-receiving"></i>订单管理</span>
      <el-menu-item index="/Oder">
        <i class="el-icon-notebook-1"></i>
        <span slot="title">订单列表</span>
      </el-menu-item>
      <el-menu-item index="/chartsIndex">
        <i class="el-icon-monitor"></i>
        <span slot="title">数据可视化</span>
      </el-menu-item>
    </el-submenu>

    <el-menu-item index="/backlog">
      <i class="el-icon-setting"></i>
      <span slot="title">待办事项</span>
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