<template>
    <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column type="expand">
        <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
                <span>{{ props.row.shop }}</span>
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
            <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
                <span>{{ props.row.desc }}</span>
            </el-form-item>
            </el-form>
        </template>
        </el-table-column>
        <el-table-column
        label="商品 ID"
        prop="id"
        sortable>
        </el-table-column>
        <el-table-column
        label="商品名称"
        prop="name">
        </el-table-column>
        <el-table-column
        label="描述"
        prop="desc">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, tableData)">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, tableData)">删除</el-button>
            </template>
    </el-table-column>
    <!-- <div class="block">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40">
        </el-pagination>
    </div> -->
    <!-- 底部分页，导入过程中被hidden标签遮住，暂时无法显示 -->
    </el-table>
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
            // currentPage: 100,
            tableData: [{
            id: '12987122',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
            }, {
            id: '12987123',
            name: '红烧肉',
            category: '爆炒肉食',
            desc: '本店招牌',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
            }, {
            id: '12987125',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
            }, {
            id: '12987126',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
            }]
        }
        },
        methods: {
        handleEdit(index, row) {
        console.log(index, row);
        },
        handleDelete(index, row) {
        row.splice(index, 1);
        }

        // ,
        // handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
        // },
        // handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        // }
    }
    }
</script>