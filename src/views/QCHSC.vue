<template>
  <div id="QCHSC">
    <van-tabs v-model="active" background="#355BFA" color="white">
        <van-tab title="市场情况">
        </van-tab>
        <van-tab title="招商计划与政策">
        </van-tab>         
    </van-tabs>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: "QCHSC",
    data() {
      return {
        active:0
      };
    },
    mounted(){
    },
    methods: {
    }
  }
</script>

<!-- 限定局部有效的样式 -->
<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  #row{
  padding: 4%;
  }
  #row1{
    padding: 1%;
    font-size:48px;
    font-family:PingFang SC;
    font-weight:900;
    color:rgba(51,51,51,1);
    line-height:64px;
  }
  #row2{
    font-size:35px;
    font-family:PingFang SC;
    font-weight: lighter;
    color:rgba(51,51,51,1);
    opacity:0.5;
  }
 #LQGC0{
    margin-top: 3%;
    padding: 4%;
 }
 #hj{
  display: inline-block;
  height: auto;
  max-width: 100%;
}
</style>
<style>
.van-tabs--line .van-tabs__wrap{
    height: 80px;
}
.van-tab__text {
    position: relative;
    color: #fff;
    font-size: 34px;
}
.van-tab{
    padding-top: 2%;
}
</style>