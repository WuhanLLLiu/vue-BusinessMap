<template>
  <div id="WLCY">
    <div id="row">
        <p id ='row1'>文旅产业招商计划</p>
        <!--<p id ='row2'>来源：汉阳发展改革局 发布时间：2019-3</p>-->
    </div>
    <el-divider class="el-divider1"></el-divider>
    <div id='WLCY0'>
        <p id='WL' v-html='html3'></p>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: "WLCY",
    data() {
      return {
        html3:"",
      };
    },
    mounted(){
      this.load_WLCY()
    },
    methods: {
      load_WLCY(){
        fetch("http://121.196.60.135:1338/data/whcydzzjh")
          .then(result => result.json())
          .then(result => {            
            this.html3=result.content
          })
      },
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
 #WLCY0{
    margin-top: 3%;
    padding: 4%;
 }
</style>