<template>
  <section>
    <el-row>
      <el-col :span="24">
        <!--表单-->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="店铺名称">
            <el-input
              v-model="formInline.store.storeName"
              placeholder="店铺名称"
              style="width: 140px"
            ></el-input>
          </el-form-item>
          <el-form-item label="添加日期">
            <el-date-picker
              v-model="formInline.store.date"
              align="right"
              type="year"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="店铺地址">
            <el-cascader
              expand-trigger="hover"
              :options="options"
              v-model="formInline.store.storeAddress"
            ></el-cascader>
          </el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <a
            href="javascript:;"
            id="download"
            style="
              background-color: #409eff;
              color: #fff;
              padding: 9px 9px !important;
              margin-left: 10px !important;
              border-radius: 4px;
            "
            @click="download()"
            download="download.csv"
            >导出数据</a
          >
        </el-form>
        <!--表格-->
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection"> </el-table-column>
          <el-table-column prop="storeName" label="店铺名称" width="180">
          </el-table-column>
          <el-table-column prop="date" label="添加时间" width="180">
          </el-table-column>
          <el-table-column prop="storeAddress" label="店铺地址"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="small"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                type="danger"
                size="small"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
    <el-dialog title="修改店铺信息" :visible="dialogFormVisible" size="tiny">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="店铺名称">
          <el-input v-model="form.storeName"></el-input>
        </el-form-item>
        <el-form-item label="地址地址">
          <el-input v-model="form.storeAddress"></el-input>
        </el-form-item>
        <el-form-item label="添加日期">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.storeDate"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSave" :loading="editLoading"
            >修改</el-button
          >
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </section>
</template>
<script type="text/ecmascript-6">
//   const ERR_OK = "000";
export default {
  data() {
    return {
      formInline: {
        store: {
          storeName: "",
          storeRatings: "",
          storeAddress: [],
          date: "",
          place: "",
        },
      },
      tableData: [
          {
            storeName:"123",
            date:"2020-10-05",
            storeAddress:"南京市 雨花台区 陇西路310号"
        }
      ],
      options: [],
      places: [],
      dialogFormVisible: false,
      editLoading: false,
      form: {
        storeName: "",
        storeAddress: "",
        StoreDate: "",
      },
      currentPage: 4,
      table_index: 999,
    };
  },
  created() {
  },
  methods: {
    onSubmit() {
      this.$message("这个方法并不管用哦~");
    },
    handleDelete(index) {
      this.tableData.splice(index, 1);
      this.$message({
        message: "操作成功！",
        type: "success",
      });
    },
    handleEdit(index, row) {
      this.dialogFormVisible = true;
      this.form = Object.assign({}, row);
      this.table_index = index;
    },
    handleSave() {
      this.$confirm("确认提交吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        cancelButtonClass: "cancel",
      })
        .then(() => {
          this.editLoading = true;
          let date = this.form.date;
          if (typeof date === "object") {
            date = [
              date.getFullYear(),
              date.getMonth() + 1,
              date.getDate(),
            ].join("-");
            this.form.date = date;
          }
          //          this.tableData[this.table_index] = this.form;
          this.tableData.splice(this.table_index, 1, this.form);
          this.$message({
            message: "操作成功！",
            type: "success",
          });
          this.editLoading = false;
          this.dialogFormVisible = false;
        })
        .catch(() => {});
    },
    download: function () {
      console.log("xiazai");
      var obj = document.getElementById("download");
      var str = "姓名,出生日期,地址\n";
      for (var i = 0; i < this.tableData.length; i++) {
        var item = this.tableData[i];
        str += item.name + "," + item.date + "," + item.address;
        str += "\n";
      }
      console.log(obj);
      str = encodeURIComponent(str);
      console.log(str);
      obj.href = "data:text/csv;charset=utf-8,\ufeff" + str;
      obj.download = "download.csv";
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style>
.el-pagination {
  text-align: center;
  margin-top: 30px;
}
.el-message-box__btns .cancel {
  float: right;
  margin-left: 10px;
}
</style>