<template>
  <div id="HanKou" class="layout">
    <!-- <div class="head">汉阳招商云地图</div> -->

    <div class="map">
      <webmap ref="webmap"></webmap>
    </div>

    <div class="bottom" :class="{full:isFull}">
      <el-row id="row1">
        <el-col :span='2'>
          <ul type="none">
            <li id="img"><img src="./../assets/土地信息.png" width="25%" @click="alertdialog"/></li>
            <li id='type'>汉阳造文化创意产业园</li>
          </ul>
        </el-col>
        <el-col :span='2'>
          <ul type="none">
            <li id="img"><img src="./../assets/楼宇信息.png" width="25%" @click="alertdialog"/></li>
            <li id='type'>华加科技产业园</li>
          </ul>
        </el-col>
      </el-row>
    </div>

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
    name: "HanKou",

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
        centerDialogVisible: false,
        modalvisible:false,
        num: 0,
        viewArr: [],
      };
    },

    methods: {
      RouteZSTJ(){
        this.$router.push({path:'/ZSTJ'})
      },
      alertdialog(){
        alert('未完全开放，功能仍在开发...')
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
  
  #policy{
    font-size: 27px
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

  .layout .head {
    background-size: 100% 100%;
    height: 98px;
    width: 100%;
    font-size: 50px;
    font: bolder;
    text-align: left;
    padding-left: 3%;
    line-height: 98px;
    color: #000080;
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
    height: 200px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.5s;
    z-index: 4;
    background: #fff;
    /* box-shadow: 0 0 5vmax 50vmax rgba(0,0,0,.5); */
  }

  .bottom.full {
    transform: translateY(-897px);
  }

  .bottom-btn-top {
    height: 79px;
    border-bottom: 2px solid #ccc;
    font-size: 30px;
    line-height: 79px;
    padding-left: 39px;
    box-sizing: border-box;
    font-weight: bold;
    position: relative;
    background: #fff;
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
    color: #628dd1;
    font-size: 18px;
  }

  .map {
    /* height: calc(100% - 431px); */
    height: calc(100%);
    overflow: hidden;
    position: relative;
  }

  .out-list {
    height: 967px;
    background: #f4f4f4;
    box-sizing: border-box;
    padding-top: 18px;
  }

  .out-list .filter-list {
    background: #fff;
    height: 80px;
    border: 1px solid #ccc;
    border-left: 0;
    border-right: 0;
    padding-top: 18px;
    padding-left: 41px;
    box-sizing: border-box;
  }

  .filter-list-item {
    width: 90px;
    height: 41px;
    background: #a4a4a4;
    border-radius: 4px;
    text-align: center;
    color: #fff;
    font-size: 22px;
    line-height: 41px;
    float: left;
    margin-right: 17px;
  }

  .filter-list-item.active {
    background: #0049cc;
  }

  .out-list-body {
    height: calc(100% - 134px);
    margin: 34px auto 0;
    width: 707px;
    overflow: auto;
  }

  .out-list-body-ul {
    width: 100%;
  }

  .out-list-body-ul>li.out-list-item {
    height: 207px;
    width: 100%;
    border-radius: 9px;
    background: #fff;
    margin-bottom: 21px;
    position: relative;
    padding-left: 23px;
    box-sizing: border-box;
    padding-top: 18px;
    padding-bottom: 23px;
  }

  .out-list-item .out-list-item-title {
    height: 42px;
    font-size: 30px;
    line-height: 42px;
  }

  .out-list-item-p {
    margin-top: 11px;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    padding-left: 44px;
    position: relative;
  }

  .out-list-item-text {
    float: left;
  }

  .out-list-item-type {
    width: 90px;
    height: 41px;
    background: #0049cc;
    border-radius: 4px;
    text-align: center;
    color: #fff;
    font-size: 22px;
    line-height: 41px;
    float: left;
    margin-left: 27px;
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
    width: 48%;
    text-align: center
  }

  #img {
    text-align: center
  }

  #type {
    font-weight: bolder;
    font-size: 1.0em;
    text-align: center
  }
</style>