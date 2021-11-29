<template>
    <div>
        <h2></h2>
        <el-button type="primary" @click="increment">主要按钮</el-button>
    </div>
</template>

<script>
export default {
  methods: {
    increment() {
      if(this.$store.getters.getIsLogin){
        console.log("true");
        console.log(this.$store.getters.getIsLogin)
      }else{
        console.log("false");
        console.log(this.$store.getters.getIsLogin)
      }
    },
  },
};
</script>

<style>
</style>