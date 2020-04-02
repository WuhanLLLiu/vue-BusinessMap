<template>
  <div id="ShouYe" class="layout">
    <div class="head">
        <img id='imghead' src="./../assets/z.png" width='100%'/>
    </div>
   
    <div class="logo">
        <img id='logo' src="./../assets/logo.jpg" width="50%"/>
    </div>

    <div class="bottom" :class="{full:isFull}">
      <div class="bottom-btn-top">
        <el-row id="row1">
            <el-col :span='4'>
            <ul type="none">
                <li id="img"><img src="./../assets/土地信息.png" width="60%" /></li>
                <li id='type'>土地信息</li>
            </ul>
            </el-col>
            <el-col :span='4'>
            <ul type="none">
                <li id="img"><img src="./../assets/楼宇信息.png" width="60%" /></li>
                <li id='type'>楼宇信息</li>
            </ul>
            </el-col>
            <el-col :span='4'>
            <ul type="none">
                <li id="img"><img src="./../assets/相关政策.png" width="60%" @click="outerVisible = true"/></li>
                <li id='type'>相关政策</li>
            </ul>
            </el-col>
            <el-col :span='4'>
            <ul type="none">
                <li id="img"><a @click="RouteZSTJ"><img src="./../assets/招商推介.png" width="60%" /></a></li>
                <li id='type'>招商推介</li>
            </ul>
            </el-col>
        </el-row>
        <div class="bottom-footer">
            版权所有@汉阳区商务局    技术支持:武汉大学测绘学院
        </div>
      </div>
    </div>
    <el-dialog
        id='dialog1'
        title="相关政策"
        :visible.sync="outerVisible"
        :fullscreen = "fullscreen1"
        :modal="modalvisible"
        center
        >
        <span id='policy'>
          <li>
            <a href="http://www.hanyang.gov.cn/ZWGK/XXGKML/ZFWJ/GFXWJ/detail-85141.html" >汉阳区营商留商奖励政策</a>
          </li>
          <br/>
          <li>
            <a href="http://139.129.7.130/file/%E6%A5%BC%E5%AE%87%E6%89%B6%E6%8C%81%E6%94%BF%E7%AD%96.html">汉阳区大健康产业扶持政策</a>
          </li>
          <br/>
          <li>
            <a href="http://139.129.7.130/file/楼宇扶持政策.html" >汉阳区楼宇扶持政策</a>
          </li>
        </span>
        <!-- <el-button id='button10' type="primary"  @click="innerVisible_0 = true" icon="el-icon-reading" round style="font-size: 1.0em; width:500px">汉阳区大健康产业扶持政策</el-button>
            <br/>a
        <el-button id='button11' type="primary"  @click="innerVisible_1 = true" icon="el-icon-reading" round style="font-size: 1.0em; width:500px">汉阳区楼宇扶持政策</el-button> -->
            <el-dialog
                width="100%"
                title="汉阳区大健康产业扶持政策"
                :visible.sync="innerVisible_0"
                :fullscreen = "fullscreen1"
                append-to-body>
                <span>
                <iframe id="policy_0" src="http://139.129.7.130/file/%E6%A5%BC%E5%AE%87%E6%89%B6%E6%8C%81%E6%94%BF%E7%AD%96.html"  style="width:100%;height:100%"> </iframe>
                </span>
            </el-dialog>
            <el-dialog
                width="100%"
                title="汉阳区楼宇扶持政策"
                :visible.sync="innerVisible_1"
                :fullscreen = "fullscreen1"
                append-to-body>
                <span>
                <iframe id="policy_1" src="http://139.129.7.130/file/楼宇扶持政策.html"  style="width:100%;height:100%"> </iframe>
                </span>
            </el-dialog>
    </el-dialog>
  </div>

</template>

<script>
  import Vue from "vue";
  import * as maptalks from "maptalks";
  import "maptalks/dist/maptalks.css";
  import echarts from 'echarts';
  import Drawer from "./../components/Drawer";
  import webmap from "./../components/webmap";
  import info from "./../components/info";
  import Dialog from "./../components/Dialog";


  export default {
    name: "ShouYe",

    components: {
      Drawer: Drawer,
      webmap: webmap,
      info: info,
      Dialog: Dialog
    },

    data() {
      return {
        isFull: false,
        totalData: {
          cure: 16,
          confirm: 17,
          new: 0
        },
        outerVisible: false,
        innerVisible_0: false,
        innerVisible_1:false,
        modalvisible:false,
        alertText: '',
        fullscreen1:true
      };
    },

    methods: {
      //绘制汉口招商引资图表
      RouteZSTJ(){
        this.$router.push({path:'/ZSTJ'})
      }
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

  body {
    overflow: hidden;
  }
  
  #policy{
    font-size: 27px;
    top:40%
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
    background:-webkit-linear-gradient(
        top,rgb(226, 17, 17),rgb(230, 36, 36),rgb(236, 105, 105),rgb(112, 91, 228),rgb(29, 63, 214),rgb(49, 84, 241)
    )
  }

    .layout .head {
        background-size: 50% 50%;
        height: 20%;
        width: 100%;
        font-size: 50px;
        font: bolder;
        padding-left: 3%;
        line-height: 98px;
        color: #000080;
    }

    .layout .logo {
            /*position: absolute;*/
            margin: 3% 10% 0% 10%;
            top: 45%;
            border-radius:50% 50%; 
            border-width: 5px;
    }

    #logo {
        width: 50%;
        height: auto;
        max-width: 80%;
        max-height: 80%;
        border-radius:50% 50%; 
        border-width: 5px;
        border-color: white;
        box-shadow:white 0.1px 0.1px 0.2px 0.6px;
        position: absolute!important;
        left: 50%;
        top: 45%;
        transform: translateY(-50%,-50%);
        -webkit-transform:translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        display: block;
    }

  

  .layout .select {
    position: absolute;
    z-index: 102;
    height: 36px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.08);
    border-radius: 6px;
    margin: 0.3rem 0.3rem 0px 0.3rem;
    width: 20%;
  }

  .layout .bottom {
    height: 23%;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.5s;
    z-index: 4;
    opacity: 100%;
    /* box-shadow: 0 0 5vmax 50vmax rgba(0,0,0,.5); */
  }

  .bottom.full {
    transform: translateY(-897px);
  }

  .bottom-btn-title {
    float: left;
  }

  .fengxian {
    float: left;
    margin-left: 20px;
    font-size: 20px;
    padding: 0 20px;
    height: 34px;
    line-height: 34px;
    background: #97e290;
    border-radius: 14.5px;
    margin-top: 23px;
  }

  .full-btn {
    width: 39px;
    height: 37px;
    position: absolute;
    top: 20px;
    right: 36px;
    background: url(./../assets/full-btn.jpg) no-repeat center;
    background-size: 100% 100%;
  }

  .bottom-center {
    height: 182px;
    transition: all 0.5s;
    width: 100%;
    padding-top: 1px;
    border-bottom: 2px solid #ccc;
    position: relative;
  }

  .number-list {
    height: 78px;
    margin-top: 33px;
    position: relative;
  }

  .number-list>li.number-list-item {
    height: 100%;
    width: 118px;
    font-size: 28px;
    position: absolute;
    left: 88px;
    top: 0;
    text-align: center;
  }

  .number-list>li.number-list-item:nth-child(2) {
    left: 321px;
  }

  .number-list>li.number-list-item:nth-child(3) {
    right: 80px;
    left: auto;
  }

  .list-item-top.green {
    color: #0f9854;
  }

  .list-item-top {
    height: 28px;
    margin-bottom: 14px;
    font-size: 30px;
    text-align: center;
    color: #ff5357;
  }

  .list-item-bottom {
    height: 26px;
  }

  .bottom-center-info {
    height: 34px;
    width: 659px;
    position: absolute;
    bottom: 21px;
    left: 50%;
    transform: translateX(-50%);
    background: pink;
    border-radius: 17px;
  }

  .bottom-footer {
    height: 71px;
    text-align: center;
    line-height: 71px;
    color:white;
    font-size: 0.8em;
    border-top: 2px solid #dddddd;
     margin-top: 1.5em;
  }

  .map {
    /* height: calc(100% - 431px); */
    height: calc(100%);
    overflow: hidden;
    position: relative;
  }

  .center {
    height: 178px;
  }

  .center .definite {
    height: 60px;
    margin-top: 16px;
    font-size: 30px;
    font-weight: 900;
    margin-left: 44px;
    color: #393a35;
    letter-spacing: 2px;
  }

  .people {
    height: 60px;
    font-size: 30px;
    color: #e75f5c;
    margin-left: 5px;
  }

  .alert {
    width: 540px;
    border: 2px solid #112daf;
    border-radius: 5px;
    margin-left: 44px;
    color: #3a3b36;
    text-align: center;
    line-height: 48px;
    font-size: 20px;
    letter-spacing: 5px;
    padding-left: 4px;
    font-weight: bold;
    margin-top: 5px;
  }

  .monad {
    font-size: 16px;
  }


  .ul {
    display: table;
    list-style-type: none;
    text-align: center;
  }

  #row1 {
    padding-top: 1.5em;
    padding-left: 1.0em;
    text-align: center;
    /* box-shadow: 0 0 5vmax 50vmax rgba(0,0,0,.5); */
  }

  .el-col {
    border-radius: 4px;
    width: 23%;
    text-align: center
  }

  #img {
    text-align: center
  }

  #type {
    font-weight: bolder;
    font-size: 1.0em;
    text-align: center;
    color:white;
  }
</style>