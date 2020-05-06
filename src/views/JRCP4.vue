<template>
  <div id="JRCP4" class="layout">
    <!-- <div id="row">
        <p id ='row1'>武汉汉阳经济开发区基本情况简介</p>
        <p id ='row2'>来源：汉阳区商务局</p>
    </div>

    <el-divider class="el-divider1"></el-divider> -->

    <div id='Selfform'>
        <img src="http://121.196.60.135/cdn/%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A/%E4%BA%BA%E4%BF%9D%E8%B4%A2%E9%99%A9%E6%B1%89%E9%98%B3%E6%94%AF%E5%85%AC%E5%8F%B8%E5%8A%A9%E5%8A%9B%E5%A4%8D%E5%B7%A5%E5%A4%8D%E4%BA%A7%E6%83%A0%E4%BC%81%E6%94%BF%E7%AD%96/%E4%BA%BA%E4%BF%9D%E8%B4%A2%E9%99%A9%E6%B1%89%E9%98%B3%E6%94%AF%E5%85%AC%E5%8F%B8%E5%8A%A9%E5%8A%9B%E5%A4%8D%E5%B7%A5%E5%A4%8D%E4%BA%A7%E6%83%A0%E4%BC%81%E6%94%BF%E7%AD%96_01.gif" id='hj'/>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  export default {
    name: "JRCP4",

    components: {

    },

    data() {
      return {
      };
    },
   
   beforeMount() {
    },

    methods: {
    },

    mounted() {
      //增加统计图表
    }
  };
</script>

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
#Selfform{
  margin-top: 3%;
  padding: 5%;
  font-size:36px;
  line-height:58px;
  font-family:PingFang SC;
}
#title{
  font-size:41px;
  font-weight: bolder;
  font-family:PingFang SC;
}
#hj{
  display: inline-block;
  height: auto;
  max-width: 100%;
}
</style>