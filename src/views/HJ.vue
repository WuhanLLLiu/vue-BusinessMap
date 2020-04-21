<template>
  <div id="HJ" class="layout">
    <div id="row">
        <p id ='row1'>武汉华加科技产业园基本情况简介</p>
        <p id ='row2'>来源：汉阳区商务局</p>
    </div>

    <el-divider class="el-divider1"></el-divider>

    <div id='Selfform'>
        <img src="./../assets/jh/Document-page-001.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-002.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-003.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-004.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-005.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-006.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-007.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-008.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-009.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-010.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-011.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-012.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-013.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-014.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-015.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-016.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-017.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-018.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-019.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-020.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-021.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-022.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-023.jpg" id='hj'/>
        <img src="./../assets/jh/Document-page-024.jpg" id='hj'/>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  export default {
    name: "HJ",

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