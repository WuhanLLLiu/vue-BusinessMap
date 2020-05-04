<template>
  <div id="HJK" class="layout">
    <!-- <div id="row">
        <p id ='row1'>武汉汉阳经济开发区基本情况简介</p>
        <p id ='row2'>来源：汉阳区商务局</p>
    </div>

    <el-divider class="el-divider1"></el-divider> -->

    <div id='Selfform'>
        <img src="http://121.196.60.135/cdn/%E9%BB%84%E9%87%91%E5%8F%A3%E9%83%BD%E5%B8%82%E5%B7%A5%E4%B8%9A%E5%9B%AD%E7%AE%80%E4%BB%8B/%E9%BB%84%E9%87%91%E5%8F%A3%E9%83%BD%E5%B8%82%E5%B7%A5%E4%B8%9A%E5%9B%AD%E7%AE%80%E4%BB%8B_00.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/%E9%BB%84%E9%87%91%E5%8F%A3%E9%83%BD%E5%B8%82%E5%B7%A5%E4%B8%9A%E5%9B%AD%E7%AE%80%E4%BB%8B/%E9%BB%84%E9%87%91%E5%8F%A3%E9%83%BD%E5%B8%82%E5%B7%A5%E4%B8%9A%E5%9B%AD%E7%AE%80%E4%BB%8B_01.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/%E9%BB%84%E9%87%91%E5%8F%A3%E9%83%BD%E5%B8%82%E5%B7%A5%E4%B8%9A%E5%9B%AD%E7%AE%80%E4%BB%8B/%E9%BB%84%E9%87%91%E5%8F%A3%E9%83%BD%E5%B8%82%E5%B7%A5%E4%B8%9A%E5%9B%AD%E7%AE%80%E4%BB%8B_02.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/%E9%BB%84%E9%87%91%E5%8F%A3%E9%83%BD%E5%B8%82%E5%B7%A5%E4%B8%9A%E5%9B%AD%E7%AE%80%E4%BB%8B/%E9%BB%84%E9%87%91%E5%8F%A3%E9%83%BD%E5%B8%82%E5%B7%A5%E4%B8%9A%E5%9B%AD%E7%AE%80%E4%BB%8B_03.png" id='hj'/>    
        <img src="http://121.196.60.135/cdn/%E9%BB%84%E9%87%91%E5%8F%A3%E9%83%BD%E5%B8%82%E5%B7%A5%E4%B8%9A%E5%9B%AD%E7%AE%80%E4%BB%8B/%E9%BB%84%E9%87%91%E5%8F%A3%E9%83%BD%E5%B8%82%E5%B7%A5%E4%B8%9A%E5%9B%AD%E7%AE%80%E4%BB%8B_04.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/%E9%BB%84%E9%87%91%E5%8F%A3%E9%83%BD%E5%B8%82%E5%B7%A5%E4%B8%9A%E5%9B%AD%E7%AE%80%E4%BB%8B/%E9%BB%84%E9%87%91%E5%8F%A3%E9%83%BD%E5%B8%82%E5%B7%A5%E4%B8%9A%E5%9B%AD%E7%AE%80%E4%BB%8B_05.png" id='hj'/>    
        <img src="http://121.196.60.135/cdn/%E9%BB%84%E9%87%91%E5%8F%A3%E9%83%BD%E5%B8%82%E5%B7%A5%E4%B8%9A%E5%9B%AD%E7%AE%80%E4%BB%8B/%E9%BB%84%E9%87%91%E5%8F%A3%E9%83%BD%E5%B8%82%E5%B7%A5%E4%B8%9A%E5%9B%AD%E7%AE%80%E4%BB%8B_06.png" id='hj'/>    
        <img src="http://121.196.60.135/cdn/%E9%BB%84%E9%87%91%E5%8F%A3%E9%83%BD%E5%B8%82%E5%B7%A5%E4%B8%9A%E5%9B%AD%E7%AE%80%E4%BB%8B/%E9%BB%84%E9%87%91%E5%8F%A3%E9%83%BD%E5%B8%82%E5%B7%A5%E4%B8%9A%E5%9B%AD%E7%AE%80%E4%BB%8B_07.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/%E9%BB%84%E9%87%91%E5%8F%A3%E9%83%BD%E5%B8%82%E5%B7%A5%E4%B8%9A%E5%9B%AD%E7%AE%80%E4%BB%8B/%E9%BB%84%E9%87%91%E5%8F%A3%E9%83%BD%E5%B8%82%E5%B7%A5%E4%B8%9A%E5%9B%AD%E7%AE%80%E4%BB%8B_08.png" id='hj'/>     
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  export default {
    name: "HJK",

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