<template>
  <div class="st-table">
    <t-button @click="addWork">新增</t-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="dates" label="日期" width="280">
        <template slot-scope="scope">
          <el-date-picker
            style="padding:12px"
            v-model="scope.row.dates"
            v-show="scope.row.iseditor"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
          <span v-show="!scope.row.iseditor">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" sortable width="280">
        <template slot-scope="scope">
          <input
            type="text"
            style="padding:12px"
            v-model="scope.row.name"
            v-show="scope.row.iseditor"
          />
          <span v-show="!scope.row.iseditor">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址" width="280">
        <template slot-scope="scope">
          <input
            type="text"
            style="padding:12px"
            v-model="scope.row.address"
            v-show="scope.row.iseditor"
          />
          <span v-show="!scope.row.iseditor">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="danger"
            @click="save(scope.row)"
            >保存</el-button
          >
          <el-button type="warning" @click="edit(scope.row, scope)"
            >编辑</el-button
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
      tableData: [
        {
          dates: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          iseditor: false,
        },
        {
          dates: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          iseditor: false,
        },
        {
          dates: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          iseditor: false,
        },
        {
          dates: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          iseditor: false,
        },
      ],
    };
  },
  mounted() {
    this.addWork();
  },
  methods: {
    edit(row, index) {
      row.iseditor = true;
    },
    save(row, index) {
      row.iseditor = false;
    },
    addWork() {
      const newTableData = {
        dates: "",
        name: "",
        address: "",
        iseditor: true,
      };
      this.tableData.push(newTableData);
    },
  },
};
</script>
<style scoped>
.st-table {
  padding: 10px;
}
</style>
