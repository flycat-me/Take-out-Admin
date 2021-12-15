<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>店铺管理</el-breadcrumb-item>
      <el-breadcrumb-item>店铺列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="店铺名称" prop="shop"> </el-table-column>
      <el-table-column label="店铺地址" prop="address">
      </el-table-column>
      <el-table-column label="店铺评分" sortable>
        <el-rate
          v-model="value"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        >
        </el-rate>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" icon="el-icon-edit" @click.stop="handleEdit"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, tableData)"
            >删除</el-button
          >
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-setting"
            @click.stop="handleSaveStreet"
            >保存</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4.2,
      // isEdit: false,
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "xx市xx区xx路",
          shop: "test123",
          shopId: "10333",
          value: 4.3,
        },
        {
          id: "12987123",
          name: "红烧肉",
          category: "爆炒肉食",
          desc: "本店招牌",
          address: "上海市南京路",
          shop: "test666",
          shopId: "10333",
          value: 4.6,
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "testXor",
          shopId: "10333",
          value: 4.7,
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "test054",
          shopId: "10333",
          value: 4.8,
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      // this.isEdit = true
    },
    handleDelete(index, row) {
      row.splice(index, 1);
    },
    // handleSave () {
    //     this.isEdit = false
    // },
  },
};
</script>

<style>

</style>