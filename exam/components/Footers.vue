<template>
  <footer>
    <div class="footer_top">
      <div class="top_container">
        <div class="top_container_logo">
          <h1></h1>
        </div>
        <div class="top_container_sec">
          <h5>奇点共创</h5>
          <p>
            <a href>加入我们</a>
            <a href>合作计划</a>
          </p>
        </div>
        <div class="top_container_sec">
          <h5>奇点咨询</h5>
          <p>
            <a href>品牌活动</a>
            <a href>奇点动态</a>
          </p>
        </div>
        <div class="top_container_tel">
          <div class="top_box">
            <h5>媒体及商务合作</h5>
            <a href>bpr@scapital.com</a>
          </div>
          <div class="top_box">
            <h5>业务咨询</h5>
            <a href>hello@scapital.com</a>
          </div>
          <div class="top_box_tel">
            <a href>400-630-5065</a>
          </div>
        </div>
        <div class="top_container_wx">
          <div class="top_wb"></div>
          <p>关注微信公众号</p>
          <img src="../static/sub.png" alt>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
        <div class="bottom_container">

        </div>
    </div>
  </footer>
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
a {
  text-decoration: none;
  color: #fff;
}
footer {
  width: 100%;
  background: #fff;
  .footer_top {
    background: #ec4c42;
    height: 270px;
    color: #fff;
    padding: 0 450px;
    box-sizing: border-box;
    .top_container {
      width: 100%;
      padding: 40px 0;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      a:hover {
        border-bottom: 1px solid #fff;
      }
      .top_container_logo {
        width: 25%;
        h1 {
          width: 150px;
          height: 60px;
          background: url("../static/logo.png") no-repeat center center;
          background-size: cover;
        }
      }
      .top_container_sec {
        width: 20%;
        h5 {
          font-size: 16px;
          line-height: 18px;
          margin: 0 0 8px;
          p {
            font-size: 14px;
            line-height: 17px;
            a {
              margin-right: 5px;
              cursor: pointer;
              text-decoration: none;
            }
          }
        }
      }
      .top_container_tel {
        width: 20%;
        .top_box {
          margin-bottom: 20px;
          h5 {
            font-size: 16px;
            line-height: 18px;
            margin: 0 0 8px;
            a {
              display: inline-block;
              font-size: 14px;
              line-height: 17px;
              margin-right: 5px;
              cursor: pointer;
            }
          }
        }
        .top_box_tel {
          margin-bottom: 20px;
          a {
            display: inline-block;
            font-size: 32px;
            line-height: 42px;
            font-weight: bold;
            cursor: pointer;
          }
        }
      }
      .top_container_wx {
        width: 15%;
        text-align: right;
        .top_wb {
          margin-bottom: 27px;
          line-height: 30px;
          margin-right: 32px;
          font-size: 30px;
        }
        p {
          font-size: 12px;
          line-height: 15px;
          margin-bottom: 20px;
          color: #fff;
          padding-right: 5px;
          box-sizing: border-box;
        }
        img {
          width: 92px;
          height: 92px;
        }
      }
    }
  }
  .footer_bottom {
    padding: 0 450px;
    box-sizing: border-box;
  }
}
</style>

// <script>
//     seo//搜索引擎优化   //ajax对SEO不友好
//     ssr//服务端渲染  
//     // 1. 解决首屏渲染过慢问题
//     // 2.便于SEO渲染
// </script>