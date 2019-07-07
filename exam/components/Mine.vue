<template>
  <div class="mineMain">
    <section>
      <h6>想了解更多</h6>
      <h3>深度咨询奇点在现金增长的专业知识，并了解我们如何为您的公司提供帮助</h3>
      <button>联系我们</button>
    </section>
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
.mineMain {
  height: 433px;
  width: 100%;
  text-align: center;
  padding: 100px 16px 0 16px;
  box-sizing: border-box;
  background: url("../static/bg_contact_us.png") no-repeat center;
  background-size: cover;
  section {
    width: 520px;
    margin: 0 auto;
    h6 {
      color: #ccc;
      height: 19px;
      line-height: 19px;
      font-size: 14px;
    }
    h3 {
      margin-top: 15px;
      line-height: 37px;
      font-weight: normal;
      color: #fff;
      margin-bottom: 60px;
    }
    button {
      color: #1a294e;
      background-color: #fff;
      font-size: 16px;
      height: 64px;
      width: 193px;
      text-align: center;
      outline: none;
      border-radius: 40px;
    }
  }
}
</style>