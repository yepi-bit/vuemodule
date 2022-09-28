<template>
    <div>
        <div v-for="(item, index) in feedbackList" :key="index">
            <el-input
                    v-model="item.optionName"
                    style="width: 200px; margin-right: 20px"
                    placeholder="请输入选项名称"
            ></el-input>
            <el-select
                    v-model="item.optionType"
                    style="width: 200px"
                    placeholder="请选择项目类型"
            >
                <el-option label="单选" value="1"></el-option>
                <el-option label="多选" value="2"></el-option>
                <el-option label="文本" value="3"></el-option>
            </el-select>
            <div>
                <div v-for="(items, indexs) in item.optionValue" :key="indexs">
                    <el-input
                            v-model="feedbackList[index].optionValue[indexs]"
                            style="width: 420px"
                            placeholder="请输入选项值"
                    ></el-input>
                    <span
                            style="cursor: pointer; margin-left: 10px"
                            @click="deleteOptionValue(index, indexs)"
                    >删除</span
                    >
                </div>
                <span
                        @click="addFeedbackValue(index)"
                        style="cursor: pointer; margin-left: 12px;margin-top: 30px;"
                >
          <i class="el-icon-plus"></i> 添加选项值
        </span>
                <p>
                    -------------------------------------------------------------------------------------------------------------------------------------</p>
            </div>
        </div>
        <div style="margin-top: 30px;">
        <span
                style="cursor: pointer; margin-left: 10px"
                @click="deleteFeedback(index)"
        >删除</span
        >
            <span
                    @click="addFeedback()"
                    style="cursor: pointer; margin-left: 10px"
            >
      <i class="el-icon-plus"></i> 添加配置项
    </span>
        </div>
        <el-button type="primary" @click="clickAdd">提交</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                feedbackList: [{optionName: "", optionType: "", optionValue: ['']}],
            }
        },
        methods: {
            //自定义添加配置项
            addFeedback() {
                this.feedbackList.push({
                    optionName: "",
                    optionType: "",
                    optionValue: ['']
                });
            },


            //自定义添加选项值
            addFeedbackValue(index) {
                this.feedbackList[index].optionValue.push(this.feedbackList[index].optionValue[''])
            }
            ,
            deleteFeedback(i) {
                this.feedbackList.splice(i, 1);
            }
            ,
            deleteOptionValue(o, i) {
                this.feedbackList[o].optionValue.splice(i, 1)
            },
            clickAdd() {
                console.log(this.feedbackList)
            }
        }
    };
</script>

<style></style>
