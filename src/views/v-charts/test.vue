<template>
    <div>
        <h2></h2>
        <el-button type="primary" @click="increment">主要按钮</el-button>
    </div>
</template>

<script>
import Main from "@/components/main.vue"
export default {
    components: {
    Main
  },
  methods: {
    increment() {
      if(this.$store.getters.getIsLogin){
        console.log("true");
        console.log(this.$store.getters.getIsLogin)
        console.log(this.$route.path)
      }else{
        console.log("false");
        console.log(this.$store.getters.getIsLogin)
        console.log(this.$route.path)
      }
    },
  },
};
</script>

<style>
</style>