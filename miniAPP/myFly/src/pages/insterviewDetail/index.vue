<template>
  <div class="detail">
    <p>
      <span>面试地址:</span>
      <input type="text" :value="address">
    </p>
    <p>
      <span>面试时间:</span>
      <input type="text" :value="time">
    </p>
    <p>
      <span>联系方式:</span>
      <input type="text" :value="obj.phone">
    </p>
    <p>
      <span>是否提醒:</span>
      <input type="text" :value="obj.remind === -1 ? '未提醒' : '已提醒'">
    </p>
    <p>
      <span>面试状态:</span>
      <input type="text" :value="status">
    </p>
    <p>
      <span>取消提醒:</span>
      <switch name="switch"/>
    </p>
    <div class="btnDiv" v-if="obj.status === -1">
      <button>去打卡</button>
      <button>放弃面试</button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      obj: state => state.interview.obj
    }),
    address() {
      return JSON.parse(this.obj.address).address;
    },
    time() {
      return new Date(Number(this.obj.start_time)).toLocaleString();
    },
    status() {
      let str = "";
      if (this.obj.status === -1) {
        str = "未开始";
      } else if (this.obj.status === 1) {
        str = "已放弃";
      } else {
        str = "已打卡";
      }
      return str;
    }
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
p:first-child {
  border-top: 1px solid #eee;
  margin-left: 0;
  padding-left: 15px;
}
p {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #eee;
  margin-left: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 15px;
  span {
    color: #666;
    padding-right: 30px;
    box-sizing: border-box;
  }
  input {
    color: #333;
    flex: 1;
    padding-right: 20px;
    box-sizing: border-box;
  }
}
p:last-child {
  border-bottom: 1px solid #eee;
  margin-left: 0;
  padding-left: 15px;
}
.btnDiv {
  margin: 25px 8px;
  display: flex;
  button {
    background: #197dbf;
    flex: 1;
    color: #fff;
    margin: 8px;
    border: none;
    outline: none;
    border-radius: 0;
  }
  button:last-child {
    background: #dc4e42;
  }
}
</style>
