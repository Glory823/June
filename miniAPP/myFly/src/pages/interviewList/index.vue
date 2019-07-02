<template>
  <div class="listMain">
    <ul class="listHeader">
      <li
        v-for="(item,index) in tabList"
        :key="index"
        :class="{active:index==ind}"
        @click="liClick({index,status:item.status})"
      >{{item.title}}</li>
    </ul>
    <div class="main">
      <div v-if="renderList.length>0">
        <dl v-for="(item,index) in renderList" :key="index" @click="gotoDetail(item.id)">
          <dt>
            <h3>{{item.company}}</h3>
            <span :class="{red:item.status === 1}">{{status}}</span>
          </dt>
          <p>{{item.address.address }}</p>
          <dd>
            <h2>面试时间:{{item.start_time}}</h2>
            <span :class="{gray:item.status === 1}">{{item.remind === -1 ? "未提醒" : "已提醒"}}</span>
          </dd>
        </dl>
      </div>
      <div class="mainText" v-else>
        当前分类还没有面试!
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      list: state => state.interview.list,
      tabList: state => state.interview.tabList,
      ind: state => state.interview.ind,
      renderList: state => state.interview.renderList
    }),
    status() {
      let str = "";
      this.renderList.forEach(item => {
        if (item.status === -1) {
          str = "未开始";
        } else if (item.status === 1) {
          str = "已放弃";
        } else {
          str = "已打卡";
        }
      });
      return str;
    }
  },
  methods: {
    ...mapActions({
      getData: "interview/getData"
    }),
    ...mapMutations({
      liClick: "interview/liClick",
      gotoDetail: "interview/gotoDetail"
    })
  },
  created() {
    this.getData();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.listMain {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.listHeader {
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #eee;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  li.active {
    border-bottom: 1px solid #197dbf;
    color: #197dbf;
    font-weight: bold;
  }
}
.main {
  width: 100%;
  padding-top: 44px;
  dl {
    border-top: 20rpx solid #eee;
    width: 100%;
    height: 120px;
    padding: 5px 15px;
    box-sizing: border-box;
    dt,
    dd {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    dt {
      margin: 7px 0;
      h3 {
        font-size: 20px;
      }
      span {
        background: hsla(220, 4%, 58%, 0.1);
        border-color: hsla(220, 4%, 58%, 0.2);
        color: #909399;
        font-size: 16px;
        padding: 5px 7px;
        box-sizing: border-box;
      }
    }
    & > p {
      font-size: 16px;
      color: #999;
      margin: 7px 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    dd {
      margin: 7px 0;
      font-size: 18px;
      span {
        background-color: hsla(0, 87%, 69%, 0.1);
        border-color: hsla(0, 87%, 69%, 0.2);
        color: #f56c6c;
        padding: 5px 7px;
        box-sizing: border-box;
      }
      h2 {
        font-size: 17px;
      }
    }
    span.gray {
      background: hsla(220, 4%, 58%, 0.1);
      border-color: hsla(220, 4%, 58%, 0.2);
      color: #909399;
    }
    span.red {
      background-color: hsla(0, 87%, 69%, 0.1);
      border-color: hsla(0, 87%, 69%, 0.2);
      color: #f56c6c;
    }
  }
}
.mainText{
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: #666;
  padding: 50px 0;
}
</style>
