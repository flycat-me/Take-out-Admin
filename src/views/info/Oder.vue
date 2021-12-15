<template>
  <div class="merchantOrderManage">

        <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="tableNewData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
      :cell-class-name="tableRowClassName"
    >
      <el-table-column
        prop="id"
        label="订单号"
        width="140"
        align="center"
        fixed
      >
      </el-table-column>
      <el-table-column label="商品信息" width="350" fixed>
        <template slot-scope="scope">
          <div class="info_box">
            <div class="info_box_img">
              <img :src="scope.row.img" alt="" />
            </div>
            <div class="info_describe">
              <p class="text">
                <span>{{ scope.row.title }}</span>
              </p>
              <p class="attr">
                <span v-for="(itm, iid) in scope.row.goodsAttr" :key="iid">
                  <span>{{ itm.attrName }}:{{ itm.attrValue }}</span>
                </span>
              </p>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="单价(元)" align="center" width="90">
      </el-table-column>
      <el-table-column prop="num" label="购买数量" align="center" width="80">
      </el-table-column>
      <el-table-column
        prop="total_payment"
        label="支付金额(元)"
        align="center"
        width="140"
      >
      </el-table-column>
      <el-table-column prop="name" label="用户名称" align="center" width="110">
      </el-table-column>
      <el-table-column prop="phone" label="联系方式" align="center" width="115">
      </el-table-column>
      <el-table-column prop="address" label="用户地址" width="160">
      </el-table-column>
      <el-table-column
        prop="create_time"
        label="下单时间"
        align="center"
        width="160"
      ></el-table-column>
      <el-table-column label="订单状态" align="center" width="80">
        <template slot-scope="scope">
          <div class="tip-tag">
            <el-tag type="info" v-if="scope.row.status === 0">已取消</el-tag>
            <el-tag v-if="scope.row.status === 1">待付款</el-tag>
            <el-tag type="primary" v-if="scope.row.status === 2">待发货</el-tag>
            <el-tag type="danger" v-if="scope.row.status == 3">待确认</el-tag>
            <el-tag type="warning" v-if="scope.row.status == 4">退货</el-tag>
            <el-tag type="success" v-if="scope.row.status == 5"
              >退货邮寄</el-tag
            >
            <el-tag type="success" v-if="scope.row.status == 5"
              >退货完成</el-tag
            >
            <el-tag type="success" v-if="scope.row.status == 5">已完成</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="140" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" @click="details(scope.row)" size="mini"
            >详情</el-button
          >
          <el-button type="text" @click="deliverGoods(scope.row)" size="mini"
            >发货</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pagesize"
      layout="total, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "merchantOrderManage",
  components: {},
  data() {
    return {
      tableNewData: [],
      hoverOrderArr: [],
      OrderIndexArr: [],
      tableData: [
        {
          id: "16117282260421",
          total_payment: 22.5,
          name: "王某某",
          phone: "18523652142",
          address: "江苏省 南京市 雨花台区 富强街道 大街13号",
          create_time: "2021-11-27 14:17:06",
          status: 2,
          list: [
            {
              price: 20.0,
              num: 1,
              img: require("../../assets/img/food/ramen.png"),
              title: "南京皮肚面",
              goodsAttr: [
                {
                  attrName: "配送费",
                  attrValue: "2.5",
                },
                {
                  attrName: "餐具份数",
                  attrValue: "1",
                },
                {
                  attrName: "发票",
                  attrValue: "无",
                },
              ],
            },
          ],
        },
        {
          id: "12987123",
          name: "李某某",
          total_payment: 23.5,
          phone: "18523652182",
          address: "江苏省 南京市 建邺区 庐山路 199号",
          create_time: "2021-12-11 17:20:06",
          status: 2,
          list: [
            {
              price: 20.0,
              num: 1,
              img: require("../../assets/img/food/fried_rice.png"),
              title: "扬州炒饭",
              goodsAttr: [
                {
                  attrName: "配送费",
                  attrValue: "3.5",
                },
                {
                  attrName: "餐具份数",
                  attrValue: "1",
                },
                {
                  attrName: "发票",
                  attrValue: "无",
                },
              ],
            },
          ],
        },
      ],
      total: 0,
      currentPage: 1, //初始页
      pagesize: 10, //每页的数据
    };
  },
  mounted() {
    this.getNewTableData();
    this.getOrderNumber();
  },

  methods: {
    // 初始页currentPage
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
    },

    deliverGoods() {
      this.$confirm("是否确认发货?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "发货成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消发货",
          });
        });
    },
    details(){
      this.$message({
        message: "无"
      })
    },
    getOrderNumber() {
      let OrderObj = {};
      this.tableNewData.forEach((element, index) => {
        element.rowIndex = index;
        if (OrderObj[element.id]) {
          OrderObj[element.id].push(index);
        } else {
          OrderObj[element.id] = [];
          OrderObj[element.id].push(index);
        }
      });
      // 将数组长度大于1的值 存储到this.OrderIndexArr（也就是需要合并的项）
      for (let k in OrderObj) {
        if (OrderObj[k].length > 1) {
          this.OrderIndexArr.push(OrderObj[k]);
        }
      }
      //console.log(this.OrderIndexArr, "OrderIndexArr");
    },
    // 合并单元格
    objectSpanMethod({ rowIndex, columnIndex }) {
      if (
        columnIndex === 0 ||
        columnIndex === 4 ||
        columnIndex === 5 ||
        columnIndex === 6 ||
        columnIndex === 7 ||
        columnIndex === 8 ||
        columnIndex === 9 ||
        columnIndex === 10
      ) {
        for (let i = 0; i < this.OrderIndexArr.length; i++) {
          let element = this.OrderIndexArr[i];
          for (let j = 0; j < element.length; j++) {
            let item = element[j];
            if (rowIndex == item) {
              if (j == 0) {
                return {
                  rowspan: element.length,
                  colspan: 1,
                };
              } else if (j != 0) {
                return {
                  rowspan: 0,
                  colspan: 0,
                };
              }
            }
          }
        }
      }
    },
    tableRowClassName({ rowIndex }) {
      let arr = this.hoverOrderArr;
      for (let i = 0; i < arr.length; i++) {
        if (rowIndex == arr[i]) {
          return "hovered-row";
        }
      }
    },
    getNewTableData() {
      this.tableData.map((res) => {
        res.list.map((item) => {
          item.id = res.id;
          item.total_payment = res.total_payment;
          item.create_time = res.create_time;
          item.status = res.status;
          item.name = res.name;
          item.phone = res.phone;
          item.address = res.address;
        });
        this.tableNewData.push(res.list);
      });
      this.tableNewData = this.tableNewData.flat();
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.merchantOrderManage {
  background: #fff;
  width: 100%;
  left: 40px;
  right: 40px;
  padding: 20px;
  margin: 0 auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  .info_box {
    display: flex;
    align-items: center;
    margin: 0 10px;
    .info_box_img {
      cursor: pointer;
      width: 50px;
      flex: 0 0 50px;
      margin-right: 6px;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .info_describe {
      .text {
        margin-bottom: 6px;
      }
      .attr {
        color: #9e9e9e;
        span {
          margin-right: 6px;
        }
      }
    }
  }
}

.el-tag {
  width: 100%;
  height: 36px;
  line-height: 36px;
}
.tip-tag {
  .el-tag {
    text-align: center;
  }
}
</style>

