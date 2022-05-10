<template>
  <div>
    <t-button @click="hh">hh</t-button>
    <div style="float: right; padding: 20px;margin-right: 32px">
      <t-button theme="primary" style="margin-right: 14px" @click="Dialog">编辑</t-button>
      <t-button variant="outline" theme="success">提交</t-button>
      <t-dialog
          header="对话框标题"
          body="对话框内容"
          :visible.sync="DialogVisible"
          @confirm="onConfirm"
          :onConfirm="onConfirmAnother"
          :onCancel="onCancel"
          :onEscKeydown="onKeydownEsc"
          :onCloseBtnClick="onClickCloseBtn"
          :onOverlayClick="onClickOverlay"
          :onClose="close"
      ></t-dialog>
    </div>
    <t-table
        :data="data"
        :columns="columns"
        :empty="empty"
        :rowKey="rowKey"
    ></t-table>
  </div>
</template>
<script lang="jsx">
export default {
  data() {
    return {
      DialogVisible: false,
      data: [],
      columns: [
        {
          colKey: 'type',
          title: '类型',
        },
        {
          colKey: 'platform',
          title: '平台',
        },
        {
          colKey: 'property',
          title: '属性',
        },
        {
          colKey: 'default',
          title: '默认值',
        },
        {
          colKey: 'needed',
          title: '是否必传',
        },
        {
          colKey: 'description',
          title: '说明',
        },
      ],
      rowKey: 'property',
      empty: () => (
          <span style="display:flex;align-items:center;justify-content:center;height:100px;">
          😊 自定义的空内容 😊
        </span>
      ),
    };
  },
  methods: {
    hh() {
      console.log(1)
    },
    btnClick() {
      console.log(this.$parent,'父');
      console.log(this.$parent.message)
    },
    Dialog(){
      console.log(1);
      this.DialogVisible = true
    },
    onConfirm(context) {
      console.log('@confirm与onConfirm任选一种方式即可，其他几个事件类似', context);
      this.DialogVisible = false;
    },
    onConfirmAnother(context) {
      console.log('点击了确认按钮', context);
    },
    close(context) {
      console.log('关闭弹窗，点击关闭按钮、按下ESC、点击蒙层等触发', context);
    },
    onCancel(context) {
      console.log('点击了取消按钮', context);
    },
    onKeydownEsc(context) {
      console.log('按下了ESC', context);
    },
    onClickCloseBtn(context) {
      console.log('点击了关闭按钮', context);
    },
    onClickOverlay(context) {
      console.log('点击了蒙层', context);
    },
  }
};
</script>
