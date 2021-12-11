<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>添加食品</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      ref="form"
      :model="sizeForm"
      label-width="80px"
      size="mini"
      :rules="rules"
    >
      <el-form-item label="食品名称" style="width: 40%" prop="name">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="配送范围">
        <el-cascader
          v-model="value_cover"
          placeholder="请选择配送区域"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          clearable
        ></el-cascader>
      </el-form-item>
      <el-form-item label="食品特点">
        <el-select v-model="sizeForm.region" placeholder="请选择食品特点">
          <el-option label="招牌菜" value="signboard"></el-option>
          <el-option label="特色菜" value="special"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动内容">
        <el-radio-group v-model="sizeForm.resource" size="small">
          <el-radio border label="满30减14"></el-radio>
          <el-radio border label="特价4折"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="有效时间">
        <el-col :span="11">
          <el-form-item prop="date">
            <el-date-picker
              v-model="sizeForm.value"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
              :default-time="['00:00:00', '23:59:59']"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="sizeForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="sizeForm.type">
          <el-checkbox-button label="线上活动" name="type"></el-checkbox-button>
          <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
          <el-checkbox-button label="线下活动" name="type"></el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="食品图片">
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{ file }">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="picForm.dialogVisible">
          <img width="100%" :src="picForm.dialogImageUrl" alt="" />
        </el-dialog>
      </el-form-item>
      <div class="cost">
        <el-form-item label="包装费用">
          <el-input-number
            v-model="sizeForm.num1"
            :precision="2"
            :step="0.1"
            :min="0"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="食品价格">
          <el-input-number
            v-model="sizeForm.num2"
            :precision="2"
            :step="0.1"
            :min="0"
          ></el-input-number>
        </el-form-item>
      </div>

      <el-form-item size="small">
        <el-button :plain="true" type="primary" @click="onSubmit"
          >立即添加</el-button
        >
        <el-button type="primary" @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picForm: {
        dialogImageUrl: "",
        dialogVisible: false,
        disabled: false,
      },
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      sizeForm: {
        num1: 0,
        num2: 0,
        value: "",
        name: "",
        region: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入食品名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        date: [
          {
            type: "date",
            required: true,
            message: "请选择有效时间",
            trigger: "unchange",
          },
        ],
      },
      value_cover: [],
      options: [
        {
          value_cover: "jiangsu",
          label: "江苏省",
          children: [
            {
              value: "nanjing",
              label: "南京市",
              children: [
                {
                  value: "1",
                  label: "玄武区",
                },
                {
                  value: "2",
                  label: "秦淮区",
                },
                {
                  value: "3",
                  label: "建邺区",
                },
                {
                  value: "4",
                  label: "鼓楼区",
                },
                {
                  value: "5",
                  label: "浦口区",
                },
                {
                  value: "6",
                  label: "栖霞区",
                },
                {
                  value: "7",
                  label: "雨花台区",
                },
                {
                  value: "8",
                  label: "江宁区",
                },
                {
                  value: "9",
                  label: "六合区",
                },
                {
                  value: "10",
                  label: "溧水区",
                },
                {
                  value: "11",
                  label: "高淳区",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handlePictureCardPreview(file) {
      this.picForm.dialogImageUrl = file.url;
      this.picForm.dialogVisible = true;
    },
    onSubmit() {
      this.$message({
        showClose: true,
        message: "添加成功！！",
        type: "success",
      });
      // console.log(this.sizeForm)
    },
    cancel() {
      this.$confirm(
        "取消将清空页面所有已编辑内容，是否确认取消？",
        "确认信息",
        {
          distinguishCancelAndClose: true,
          confirmButtonText: "确认",
          cancelButtonText: "放弃修改",
        }
      )
        .then(() => {
          this.$message({
            showClose: true,
            type: "success",
            message: "页面内容已恢复初始值",
          });
        })
        .catch((action) => {
          this.$message({
            showClose: true,
            type: "info",
            message: action === "cancel" ? "已取消" : "停留在当前页面",
          });
        });
    },
  },
};
</script>

<style>
.el-form {
  margin-left: 400px;
}
.cost {
  display: flex;
}
</style>