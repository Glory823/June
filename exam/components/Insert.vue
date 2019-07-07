<template>
  <div class="insertModule">
    <div class="insert_left">
      <h3>您的企业现金增长状况健康吗?</h3>
      <p>企业现金增长包括企业营收、融资、贷款及存量资金的持续保值增值。奇点金服通过对不同行业、规模的数千家客户的研究，归纳出四种企业现金增长模型。利用奇点现金增长方法论，客户可较为精准的洞察自身发展情况，并在实践层面做到以现金增长赋能自身企业发展。</p>
      <h6>连线奇点进行测评</h6>
      <div class="img_erweima">
        <img src="../static/sub.png" alt>
      </div>
      <div class="insert_button">
        <button>什么是现金增长  &gt;</button>
      </div>
    </div>
    <div class="inser_right">
      <img src="../static/check.png" alt>
    </div>
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
.insertModule {
  width: 100%;
  margin-top: 150px;
  height: 400px;
  display: flex;
  padding: 0 450px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  .insert_left {
    height: 100%;
    flex: 1;
    h3 {
      margin-bottom: 15px;
      font-size: 24px;
    }
    p {
      margin: 0 0 10px;
      color: #999;
      font-size: 13.5px;
      line-height: 1.75;
    }
    h6 {
      margin: 30px 0 18px;
      width: 132px;
      font-size: 13px;
      cursor: pointer;
      font-weight: normal;
      color: #999;
    }
    .img_erweima {
      width: 93px;
      height: 98px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .insert_button {
      margin-top: 40px;
      button {
        color: #1a294e;
        font-size: 16px;
        height: 56px;
        padding: 0 32px ;
        cursor: pointer;
        border-radius: 40px;
        border: 1px solid #1a294e;
        outline: none;
        background: #fff;
      }
    }
  }
  .inser_right {
    width: 510px;
    height: 400px;
    padding-left: 120px;
    box-sizing: border-box;
    margin-left: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>