<template>
  <div>
    <div class="infoHeader">
      <el-row :gutter="60">
        <el-col :span="6" v-for="item in listData" :key="item.id">
          <el-card shadow="hover">
            <div class="show">
              <img :src= item.img class="image" />
              <div class="dataShow">
                <span>{{item.text}}</span>
                <br />
                <span>{{item.number}}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <ve-line :data="chartData" :settings="chartSettings"></ve-line>
  </div>
</template>

<script>
export default {
  data() {
    this.chartSettings = {};
    return {
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
        ],
      },
      listData: [
        {
          id: "1",
          img: require("../../assets/img/user.png"),
          text: "New Visits",
          number: "3456",
        },
        {
          id: "2",
          img: require("../../assets/img/messagepng.png"),
          text: "Messages",
          number: "2567",
        },
        {
          id: "3",
          img: require("../../assets/img/money.png"),
          text: "Purchases",
          number: "7890",
        },
        {
          id: "4",
          img: require("../../assets/img/shoppingpng.png"),
          text: "Shoppings",
          number: "5678",
        },
      ],
    };
  },
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
.infoHeader {
  /* float: left; */
  width: 100%;
  /* margin-left: 160px; */
}
.show {
  font-size: 16px;
  display: flex;
}
.dataShow {
  font-size: 16px;
  font-weight: 800;
  margin: auto;
  margin-left: 20%;
}
h3 {
  margin-bottom: 30px;
}
.el-card {
  min-height: 108px;
  margin-bottom: 40px;
  margin-top: 40px;
  position: relative;
  width: 100%;
}
.image {
  /* width: 100%; */
  display: block;
  height: 60px;
}

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #0559ce;
}
.bg-purple {
  background: #106fdb;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 108px;
  width: auto;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>