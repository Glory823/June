<template>
  <div class="bg_main">
    <div class="bg_main_sec">
      <div class="bg_main_img">
        <img src="../static/cash_growth.png" alt>
      </div>
      <h3>现金增长知识体系</h3>
      <p>以奇点独有的现金增长知识体系助您度过资本寒冬，加速企业发展</p>
    </div>
    <div class="bg_main_sec">
      <div class="bg_main_img">
        <img src="../static/fdj.png" alt>
      </div>
      <h3>奇点企业洞察</h3>
      <p>基于现金流的企业洞察，懂行更懂您</p>
    </div>
    <div class="bg_main_sec">
      <div class="bg_main_img">
        <img src="../static/personal_make.png" alt>
      </div>
      <h3>定制化增长方案</h3>
      <p>以全新的方式理解您的企业，并提供定制化增长方案</p>
    </div>
    <div class="bg_main_sec">
      <div class="bg_main_img">
        <img src="../static/resource_docking.png" alt>
      </div>
      <h3>创业资源对接</h3>
      <p>与最牛的企业家做朋友，共同创造影响力</p>
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
.bg_main {
  width: 100%;
  height: 430px;
  background-color: #ec4c42;
  margin-top: 100px;
  display: flex;
  padding: 0 450px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  .bg_main_sec {
    flex: 1;
    height: 100%;
    padding: 40px 20px;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    .bg_main_img {
      width: 100%;
      height: 180px;
      padding: 10px 25px;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h3 {
      margin-top: 44px;
      font-size: 24px;
    }
    p {
      margin-top: 10px;
      line-height: 1.75;
    }
  }
}
</style>