<template>
  <div class="headers">
    <header class="header_headers">
      <div class="header_leftHead">
        <img src="../static/logo.png" alt>
      </div>
      <ul class="header_centerhead">
        <li class="active">首页</li>
        <li>现金增点</li>
        <li>奇点产品</li>
        <li>奇点服务</li>
        <li>奇点团队</li>
        <li>联系我们</li>
      </ul>
      <ol class="header_righthead">
        <li>登录</li>
        <li>注册</li>
      </ol>
    </header>
    <div class="header_banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../static/bannernew.jpg" alt>
          </div>
          <div class="swiper-slide">
            <img src="../static/d-banner-pc.png" alt>
          </div>
          <div class="swiper-slide">
            <img src="../static/RMB-banner.png" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper/dist/js/swiper.min.js";

export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {
    new Swiper(".swiper-container", {
      loop: true,
      autoplay:true
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.headers {
  width: 100%;
  height: 655px;
  .header_headers {
    width: 100%;
    height: 60px;
    background-color: rgba(0,0,0,.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 450px;
    box-sizing: border-box;
    color: #fff;
    position: fixed;
    z-index: 99;
    left: 0;top: 0;
    .header_leftHead {
      width: 150px;
      height: 100%;
      padding: 15px 20px;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .header_righthead {
      height: 100%;
      width: 150px;
      display: flex;
      align-items: center;
      li {
        height: 20px;
        line-height: 20px;
        padding: 0 20px;
        box-sizing: border-box;
      }
      li:first-child {
        border-right: 1px solid #fff;
      }
    }
    .header_centerhead {
      flex: 1;
      height: 100%;
      display: flex;
      line-height: 60px;
      justify-content: space-between;
      margin: 0 200px;
      li.active {
        border-bottom: 1px solid #fff;
      }
    }
  }
  .header_banner ,.swiper-container,.swiper-wrapper,.swiper-slide{
    width: 100%;
    height: 655px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>