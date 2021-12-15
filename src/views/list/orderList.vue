<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户名">
              <span>{{ props.row.userName }}</span>
            </el-form-item>
            <el-form-item label="用户地址">
              <span>{{ props.row.userAddress }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.shopAddress }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="订单 ID" prop="id" sortable> </el-table-column>
      <el-table-column label="总价" prop="price" sortable> </el-table-column>
      <el-table-column label="订单状态" prop="orderState"> </el-table-column>
    </el-table>
  </div>
</template>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 33%;
}
</style>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "312",
          price: "327",
          orderState: "支付超时",
          shopAddress: "xx市xx区xx路xxx号",
          shop: "小华的店",
          shopId: "10892",
          userName: "123",
          userAddress: "江苏省南京市xx路",
        },
        {
          id: "231",
          price: "147",
          orderState: "支付超时",
          shopAddress: "xx市xx区xx路xxx号",
          shop: "小明的店",
          shopId: "10333",
          userName: "123",
          userAddress: "江苏省南京市xx路",
        },
        {
          id: "167",
          price: "188",
          orderState: "支付超时",
          shopAddress: "xx市xx区xx路xxx号",
          shop: "小李的店铺",
          shopId: "10023",
          userName: "123",
          userAddress: "江苏省南京市xx路",
        },
        {
          id: "189",
          price: "287",
          orderState: "支付超时",
          shopAddress: "xx市xx区xx路xxx号",
          shop: "小红的店铺",
          shopId: "10282",
          userName: "123",
          userAddress: "江苏省南京市xx路",
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>