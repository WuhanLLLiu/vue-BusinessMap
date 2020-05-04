<template>
  <div id="JZTJKC" class="layout">
    <!-- <div id="row">
        <p id ='row1'>九州通健康城</p>
    </div>

    <el-divider class="el-divider1"></el-divider> -->

    <div id='Selfform'>
         <img src="http://121.196.60.135/cdn/%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A/%E4%B9%9D%E5%B7%9E%E9%80%9A%E5%81%A5%E5%BA%B7%E5%9F%8E/%E4%B9%9D%E5%B7%9E%E9%80%9A%E5%81%A5%E5%BA%B7%E5%9F%8E_01.png" id='hj'/>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  export default {
    name: "JZTJKC",

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