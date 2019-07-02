import { interview, interviewDetail } from "../../service/interviewList";

//原来数据
const state = {
  list: [],
  tabList: [
    {
      title: "未开始",
      status: -1
    },
    {
      title: "已打卡",
      status: 0
    },
    {
      title: "已放弃",
      status: 1
    },
    {
      title: "全部",
      status: 2
    }
  ],
  ind: 0,
  renderList: [],
  obj:{}
};

//派生数据
const getters = {};

//异步改变
const actions = {
  getData({ commit }) {
    interview().then(res => {
      commit("getList", res);
    });
  }
};

//同步改变
const mutations = {
  getList(state, res) {
    state.list = res.data;
    state.list.map(item => {
      item.address = JSON.parse(item.address);
      item.start_time = new Date(Number(item.start_time)).toLocaleString();
    });
    state.renderList = state.list.filter(item => item.status === -1);
  },
  liClick(state, payload) {
    state.ind = payload.index;

    state.renderList = state.list.filter(
      item => item.status === payload.status
    );

    if (payload.status === 2) {
      state.renderList = state.list;
    }
  },
  gotoDetail(state, payload) {
    interviewDetail(payload).then(res=>{
      state.obj = {...res.data}
    })
    wx.navigateTo({
      url:'../../pages/insterviewDetail/main'
    })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
