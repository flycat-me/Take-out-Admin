<template>
    <div>
        <div class="crumbs-contnet">
            <el-breadcrumb separator="/" class="crumbs">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{text1}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{text2}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>

<script>
export default {
    props:["img","text1","text2","text3"],
}
</script>

<style scoped>
    .crumbs-contnet{
      height:50px;
      display:flex;
      background-color:#fff;
    }
</style>