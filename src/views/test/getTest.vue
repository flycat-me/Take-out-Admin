<template>
  <el-button type="primary" @click="submit">主要按钮</el-button>
</template>

<script>
import request from '../../utils/request'
export default {
    name: 'getTest',
    methods: {
        submit() {
            request.get("/test",
             ).then(res => {
                console.log(res)
            })
        }
    }
    
}
</script>

<style>

</style>