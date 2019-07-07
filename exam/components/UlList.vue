<template>
  <div class="worthMain">
    <ul>
      <li>
        <div class="worth_left">
          <img src="../static/growth.png" alt>
        </div>
        <div class="worth_right">
          <h3>更匹配您的企业发展需求</h3>
          <p>作为现金增长官，配合企业的主营业务发展，深入挖掘现金增长需求并提出解决方案。</p>
        </div>
      </li>
      <li :style="{background:'#fbfbfb'}">
        <div class="worth_right">
          <h3>深耕领域的咨询及陪伴</h3>
          <p>健康拓展、风口创新、等量复制、期待突破？您是哪一类企业？您的企业现金增长需求又会有哪些不同？</p>
        </div>
        <div class="worth_left">
          <img src="../static/accompany.png" alt>
        </div>
      </li>
      <li>
        <div class="worth_left">
          <img src="../static/resources.png" alt>
        </div>
        <div class="worth_right">
          <h3>更省心的“投融贷”资源池</h3>
          <p>作为一个聚集理财、融资、贷款的资源池，奇点金服帮助企业针对性的对接投资人、银行、金融机构。</p>
        </div>
      </li>
      <li :style="{background:'#fbfbfb'}">
        <div class="worth_right">
          <h3>赋能企业财务的标准化操作流程</h3>
          <p>使用奇点自研开发的企业金融服务底层设施（包括账户系统、订单处理、清算结算等），降低企业财务的操作门槛。</p>
        </div>
        <div class="worth_left">
          <img src="../static/standard.png" alt>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.worthMain {
  width: 100%;
  height: auto;
  margin-top: 60px;
  ul {
    width: 100%;
    height: auto;
    li {
      width: 100%;
      padding: 30px 450px;
      box-sizing: border-box;
      height: 350px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .worth_left {
        height: 340px;
        width: 460px;
        padding: 20px 0;
        box-sizing: border-box;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .worth_right {
        margin-left: 80px;
        h3 {
          font-size: 26px;
          color: #333;
          font-weight: normal;
          text-align: center;
        }
        p {
          color: #999;
          margin-top: 15px;
          text-align: left;
          line-height: 1.75;
        }
      }
    }
  }
}
</style>