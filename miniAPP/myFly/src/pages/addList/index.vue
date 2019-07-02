<template>
  <div class="main">
    <form @submit="formSubmit" report-submit="true">
      <h3>面试信息</h3>
      <div class="mainInp">
        <p>
          <span>公司名称</span>
          <input type="text" placeholder="请输入公司名称" name="componentName">
        </p>
        <p>
          <span>公司电话</span>
          <input type="text" placeholder="请输入面试联系人电话" name="componentTel">
        </p>
        <p>
          <span>面试时间</span>
          <picker
            mode="multiSelector"
            @change="bindMultiPickerChange"
            :value="multiIndex"
            :range="newMultiArray"
          >
            <view class="picker">{{time}}</view>
          </picker>
        </p>
        <p>
          <span>面试地址</span>
          <input
            type="text"
            placeholder="请选择面试地址"
            @click="geToAddress"
            :value="obj.address"
            name="viewAddress"
          >
        </p>
      </div>
      <h3>备注信息</h3>
      <div class="mainText">
        <textarea name id cols="20" rows="10" placeholder="备注信息(可选，100个字以内)"></textarea>
      </div>
      <button form-type="submit">确定</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {addView} from "../../service/addList"
export default {
  data() {
    return {
      time:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() * 1 + 1) +
        "-" +
        new Date().getDate() + 
        " " +
        (new Date().getHours() * 1 + 1) +
        ":" +
        new Date().getMinutes(),
      multiArray: [],
      multiIndex: [0, 0, 0]
    };
  },

  components: {},

  computed: {
    ...mapState({
      obj: state => state.address.obj
    }),
    newMultiArray: () => {
      function addZero(text) {
        return text < 10 ? "0" + text : text;
      }

      const date = new Date();
      const days = [];
      const hours = [];
      const minutes = [];
      const multiArrays = [];

      for (let i = date.getDate(); i <= 31; i++) {
        days.push(addZero(i) + "日");
      }
      multiArrays.push(days);
      for (let i = date.getHours(); i <= 23; i++) {
        hours.push(addZero(i) + "时");
      }
      multiArrays.push(hours);
      for (let i = 0; i < 60; i += 10) {
        minutes.push(addZero(i) + "分");
      }
      multiArrays.push(minutes);
      return multiArrays;
    }
  },

  methods: {
    bindMultiPickerChange(e) {
      this.multiIndex = e.target.value;
      const index = this.multiIndex;
      const day = this.newMultiArray[0][index[0]].slice(0,2);
      const hour = this.newMultiArray[1][index[1]].slice(0,2);
      const minute = this.newMultiArray[2][index[2]].slice(0,2);
      this.time =
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() * 1 + 1) +
        "-" +
        day +
        " " +
        hour + ":"
        minute;
    },
    formSubmit: function(e) {
      const value = e.mp.detail.value;
      // this.goToView({
      //   componentName:value.componentName,
      //   componentTel:value.componentTel,
      //   viewTime:this.time,
      //   viewAddress:value.viewAddress
      // })
      const data = {
        company:value.componentName,
        phone:value.componentTel,
        form_id:e.mp.detail.formId
      }
      console.log(+new Date(this.time))
    },
    geToAddress: () => {
      wx.navigateTo({
        url: "../address/main"
      });
    },
  },

  created() {}
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  font-size: 17px;
  h3 {
    width: 100%;
    height: 42px;
    background: #f6f6f6;
    padding-left: 15px;
    box-sizing: border-box;
    line-height: 42px;
  }
  .mainInp {
    background: #fff;
    width: 100%;
    p {
      width: 100%;
      height: 45px;
      border-bottom: 1px solid #eee;
      margin-left: 15px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 15px;
      span {
        color: #666;
        padding-right: 35px;
        box-sizing: border-box;
      }
      input {
        color: #333;
        flex: 1;
        padding-right: 20px;
        box-sizing: border-box;
      }
      picker {
        flex: 1;
        padding-right: 20px;
        box-sizing: border-box;
      }
    }
  }
  .mainText {
    width: 100%;
    height: auto;
    textarea {
      height: 100px;
      border: 1px solid silver;
      padding: 10px;
      box-sizing: border-box;
      margin: 15px;
      color: #333;
      font-size: 15px;
    }
  }
  button {
    margin-top: 25px;
    background: #999;
    color: #fff;
    border-radius: 0;
  }
}
</style>
