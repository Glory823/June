<template>
  <div class="wrap">
    <div class="wrapMap">
      <Map />
      <p>
        <img src="../../../static/images/location.png" alt=""/>
        <img src="../../../static/images/logo.png" alt="" @click="toPerson"/>
      </p>
    </div>
    <button type="default" class="addBtn" @click="addList"> 添加面试 </button>
  </div>
</template>

<script>
import Map from "../../components/map"
export default {
  data () {
    return {
      
    }
  },

  components: {
    Map
  },

  methods: {
    addList:()=>{
      wx.navigateTo({
        url:'../addList/main'
      })
    },
    toPerson:()=>{
      wx.navigateTo({
        url:'../personal/main'
      })
    }
  },

  created () {
    
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.wrapMap{
  width: 100%;
  flex: 1;
  p{
    width: 100%;
    height: 40px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 0;
    bottom: 80px;
    img{
      width: 40px;
      height: 100%;
      display: inline-block;
      border-radius: 50%;
      z-index: 99;
    }
    img:last-child{
      background: #000;
    }
  }
}
.addBtn{
  width: 100%;
  border-radius: 0;
  background: #000;
  color: #fff;
}
</style>
