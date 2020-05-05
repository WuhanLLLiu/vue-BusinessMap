<template>
  <div id="JRCP3" class="layout">
    <!-- <div id="row">
        <p id ='row1'>武汉汉阳经济开发区基本情况简介</p>
        <p id ='row2'>来源：汉阳区商务局</p>
    </div>

    <el-divider class="el-divider1"></el-divider> -->

    <div id='Selfform'>
        <img src="http://121.196.60.135/cdn/%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A/%E4%B8%AD%E5%9B%BD%E5%B7%A5%E5%95%86%E9%93%B6%E8%A1%8C%E6%AD%A6%E6%B1%89%E6%B1%89%E9%98%B3%E6%94%AF%E8%A1%8C%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D/%E4%B8%AD%E5%9B%BD%E5%B7%A5%E5%95%86%E9%93%B6%E8%A1%8C%E6%AD%A6%E6%B1%89%E6%B1%89%E9%98%B3%E6%94%AF%E8%A1%8C%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D_01.png" id='hj'/>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  export default {
    name: "JRCP3",

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