<template>
  <div id="LYXX" class="layout">

    <div class="map">
      <webmap ref="webmap"></webmap>
    </div>

    <div class="top">
      <el-row id="row1">
            <i id = 'icon0' class="el-icon-reading"></i>
            <span id='type' @click="RouteHYZ">汉阳造文创产业园</span>
            <i id = 'icon0' class="el-icon-office-building"></i>
            <span id='type' @click="RouteHJ">加华科技产业园</span>
            <i id = 'icon0' class="el-icon-school"></i>
            <span id='type' @click="RouteHJK">黄金口工业园</span>
      </el-row>
    </div>

    <div class="bottom" id="bottomly" style="display:none">
        <div id="rowly_0"  @click="hide">
          <span>关闭楼宇信息</span>
        </div>
        <el-divider class="el-divider1"></el-divider>
        <div id='form'>
          <el-row id="rowly_1">
              <span id="lyname">钢丝厂及扩大片项目</span>
          </el-row>
          <el-row id="rowly_2">
              <span id="lylocimg"><img  src="./../assets/choosed.png" width="3%" style="padding-right:2%"/></span>
              <span id="lylocation">国博以北，西邻鹦鹉大道，东临晴川</span>
          </el-row>
          <el-row id="rowly_3">
              <span id="rowly_31">层数</span>
              <span id="lycs">公建比 5：5</span>
              <span id="rowly_32">建筑体量（平米）</span>
              <span id="lytl">公建比 5：5</span>
          </el-row>
          <el-row id="rowly_4">
              <span id="rowly_41">已入住企业数量</span>
              <span id="lyqy">36</span>
          </el-row>
          <el-row id="rowly_4">
              <span id="rowly_41">客梯数量</span>
              <span id="lykt">36</span>
          </el-row>
          <el-row id="rowly_4">
              <span id="rowly_41">停车位数量</span>
              <span id="lytc">36</span>
          </el-row>
          <el-row id="rowly_4">
              <span id="rowly_41">租金（元/平方米每月）</span>
              <span id="lyzj">36</span>
          </el-row>
          <el-row id="rowly_4">
              <span id="rowly_41">物业管理费（元/平方米每月）</span>
              <span id="lywy">36</span>
          </el-row>
          <el-row id="rowly_4">
              <i id = 'icon1' class="el-icon-picture"></i>
              <span id="rowly_41" @click="PICAlert">查看照片</span>
          </el-row>
        </div>
    </div>

  </div>
</template>

<script>
  import Vue from "vue";
  import * as maptalks from "maptalks";
  import "maptalks/dist/maptalks.css";
  import webmap from "./../components/webmap";


  export default {
    name: "LYXX",

    components: {
      webmap: webmap,
    },

    data() {
      return {
        isFull: false,
        totalData: {
          cure: 16,
          confirm: 17,
          new: 0
        },
        centerDialogVisible: false,
        modalvisible:false,
        num: 0,
        viewArr: [],
      };
    },

    methods: {
      hide(){
        document.getElementById("bottomly").style.display="none";
      },
      RouteHYZ(){
        this.$router.push({path:'/HYZ'})
      },
      RouteHJK(){
        this.$router.push({path:'/HJK'})
      },
      RouteHJ(){
        this.$router.push({path:'/HJ'})
      },
      PICAlert() {
        this.$alert('照片正在收录，敬请期待！','提示', {
          confirmButtonText: '确定',
        });
      }
    },

    mounted() {
        this.$refs.webmap.HYbuildings();
    }
  };
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  body {
    overflow: hidden;
  }
  
  #dialog1{
    width:100%
    /* right:50% */
  }
  .layout {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }


  .layout .top {
    height: auto;
    width: 100%;
    position: absolute;
    top: 0;
    padding: 2%;
    transition: all 0.5s;
    z-index: 4;
    background: #355BFA;
    /* box-shadow: 0 0 5vmax 50vmax rgba(0,0,0,.5); */
  }

  .layout .bottom {
    height: auto;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.5s;
    z-index: 4;
    background: #fff;
    /* box-shadow: 0 0 5vmax 50vmax rgba(0,0,0,.5); */
  }


  .map {
    /* height: calc(100% - 431px); */
    height: calc(100%);
    overflow: hidden;
    position: relative;
  }


  .ul {
    display: table;
    list-style-type: none;
    text-align: center;
  }

  #row1 {
    text-align: center;
    font-size: 0.9em;
    /* box-shadow: 0 0 5vmax 50vmax rgba(0,0,0,.5); */
  }

  .el-col {
    border-radius: 4px;
    width: 48%;
    text-align: center
  }

  #img {
    text-align: center
  }

  #type {
    font-weight: bolder;
    font-size: 0.8em;
    color: #fff;
    padding-left: 1%;
    padding-right: 2%;
  }

  #rowly_0 {
    padding-top: 2%;
    padding-bottom: 2%;
    text-align: center;
    font-size:0.8em;
    font-family:PingFang SC;
    color:rgba(51,51,51,1);
  }
  
  #lyname{
    padding: 3%;
    margin-top: 2%;
    font-size:1.1em;
    font-family:'PingFangSC';
    font-weight:bold;
    color:rgba(51,51,51,1);
  }
  
  #rowly_2{
    padding-left: 3%;
    padding-top: 2%;
    padding-bottom: 2%;
    font-family:'微软雅黑';
  }
  #lycs {
    font-size: 0.8em;
    padding: 6px 20px;
    margin: 0 10px;
    margin-right: 3%;
    display: inline-block;
    border-radius: 4px;
    background: #355BFA;
    border: 1px solid #004acc;
    color: #FFFFFF;
  }
  #lytl {
    font-size: 0.8em;
    padding: 6px 20px;
    display: inline-block;
    border-radius: 4px;
    background: #355BFA;
    border: 1px solid #004acc;
    color: #FFFFFF;
  }
  #rowly_4{
    padding-left: 3%;
    padding-top: 2%;
    padding-bottom: 2%;
    border-bottom:0.1px solid #EEEEEE;
  }
  #rowly_31{
    font-size: 0.9em;
    font-weight: bold;
    padding-left: 3%;
    padding-right: 2%;
    padding-top: 2%;
    padding-bottom: 2%;
  }
  #rowly_32{
    font-size: 0.9em;
    font-weight: bold;
    padding-left: 3%;
    padding-right: 2%;
    padding-top: 2%;
    padding-bottom: 2%;
    border-left: 1px solid gray;
  }
  #rowly_41{
    font-weight: bold;
    font-size: 0.9em;
    width: 60%;
    display:-moz-inline-box;
    display:inline-block;
  }
  #icon0{
    background: white;
    color: #355BFA;
    border-radius: 50%;     
    -moz-border-radius: 50%;      
    -webkit-border-radius: 50%;
  }
    #icon1{
    background: white;
    color:goldenrod;
    padding-right: 2%;

  }
</style>