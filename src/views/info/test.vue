<template>
<div class="content-wrapper">
        <div>
          <el-button type="primary" icon="el-icon-plus" @click.stop="handleShowDialog(0)">添加街道</el-button>
          <el-button type="primary" icon="el-icon-edit" @click.stop="handleEditStreet">编辑</el-button>
          <el-button type="primary" icon="el-icon-setting" @click.stop="handleSaveStreet">保存</el-button>
        </div>
        <div class="street-wrapper">
          <template v-for="(item, index) in streetsData">
            <el-button v-if="!isEditStreet" :type="activeButton === index ? 'primary' : 'info'" :key="index"
              @click.stop="handleButtonClick(index)">{{item.name}}</el-button>
            <el-input v-else-if="isEditStreet" :key="index" v-model="item.name" style="width:300px;margin-right:5px;margin-bottom:5px;">
              <i slot="append" class="remove el-icon-remove"></i>
            </el-input>
          </template>
        </div>
      </div>
</template>


<script>
export default {
  name: 'official',
  data () {
    return {
      activeButton: 0,
      dialogTitle: '添加街道', // 控制弹出框title的变量
      dialogVisible: false, // 弹出框显示隐藏的控制变量
      isAddStreet: true, // true表示是添加街道数据，false表示添加的是社区工作站的数据
      streetNameOrCommunityName: '', // 添加的时候用于保存街道的名称获取社区工作站的名称
      isEditStreet: false, // 编辑街道
      isEditCommunity: false, // 编辑社区
      streetsData: [
        {id: 1, name: '观湖街道'},
        {id: 1, name: '民治街道'},
        {id: 3, name: '观澜街道'},
        {id: 4, name: '龙华街道'},
        {id: 5, name: '大浪街道'},
        {id: 6, name: '福城街道'}
      ],
      communityData: [
      ]
    }
  },
  methods: {
    handleButtonClick (index) {
      this.activeButton = index
    },
    /**
     * flag:0表示添加街道，1表示添加社区
     */
    handleShowDialog (flag) {
      this.isAddStreet = !flag
      this.dialogTitle = flag ? '添加社区工作站' : '添加街道'
      this.$nextTick(() => {
        this.dialogVisible = true
      })
    },
    addStreetOrCommunity () {
      // 校验输入的内容不能为空
      if (!this.streetNameOrCommunityName.length) {
        this.$message.error('填写的名称不能为空或者空字符串')
        return
      }
      // 1.校验一下当前添加的街道名称是否已经存在？？街道名称是唯一的
      // 2.添加成功之后，关闭弹出框，并且要重新请求数据
      if (this.isAddStreet) {
        // 调用添加街道的接口
        this.streetsData.push({id: 10, name: this.streetNameOrCommunityName})
      } else {
        // 调用社区工作站的接口
        this.communityData.push({id: 10, name: this.streetNameOrCommunityName})
      }
      // 清空streetNameOrCommunityName的数据，避免下次添加的时候显示上次的数据
      this.streetNameOrCommunityName = ''
      this.dialogVisible = false
    },
    handleBeforeClose (done) {
      this.dialogVisible = false
      done()
    },
    handleEditCommunity () {
      this.isEditCommunity = true
    },
    handleSaveCommunity () {
      this.isEditCommunity = false
    },
    handleEditStreet () {
      this.isEditStreet = true
    },
    handleSaveStreet () {
      this.isEditStreet = false
    },
    enterSystem () {
      this.$router.push('/dashboard')
    }
  }
}
</script>


<style>

</style>