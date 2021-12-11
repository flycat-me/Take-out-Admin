<template>
  <div>
      <Crumbs :img="portrait" text1="账号管理" text2="添加账号" text3="admin"/>
  </div>
</template>

<script>
// import request from '../../utils/request'
// export default {
//     name: 'getTest',
//     methods: {
//         submit() {
//             request.get("/test",
//              ).then(res => {
//                 console.log(res)
//             })
//         }
//     }
    
// }
import Crumbs from "@/components/Crumbs.vue"
export default {
    name: 'getTest',
    components: {
        Crumbs
    }
}
</script>

<style>

</style>