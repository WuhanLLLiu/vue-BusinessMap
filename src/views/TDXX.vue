<template>
  <div id="TDXX" class="layout">
    <!-- <div>
        <van-nav-bar 
        title="土地信息" 
        left-text="返回"   
        left-arrow 
        @click-left="onClickLeft" 
        />
    </div> -->
    <div class="dropmenu">
        <van-dropdown-menu
            :overlay = false>
            <van-dropdown-item v-model="value1" :options="option1" @change="func1" />
            <van-dropdown-item v-model="value2" :options="option2" @change="func2"/>
            <van-dropdown-item v-model="value3" :options="option3" @change="func3"/>
        </van-dropdown-menu>
    </div>


    <div class="map">
      <webmap ref="webmap"></webmap>
    </div>
  
  </div>
</template>

<script>
  import Vue from "vue";
  import webmap from "./../components/webmap";


  export default {
    name: "TDXX",

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
    
        value1: 0,
        value2: 0,
        value3: 0,
        option1: [
            { text: '街道', value: 0 },
            { text: '江堤街', value: 1 },
            { text: '永丰街', value: 2 },
            { text: '洲头街', value: 3 },
            { text: '建桥街', value: 4 },
            { text: '四新街', value: 5 },
            { text: '晴川街', value: 6 },
            { text: '五里墩街', value: 7 },
            { text: '琴断口街', value: 8 },
        ],
        option2: [
            { text: '用地类型', value: 0 },
            { text: '城中村', value: 1 },
            { text: '混合用地', value: 2 },
            { text: '商服用地', value: 3 },
            { text: '居住用地', value: 4 },
            { text: '工业用地', value: 5 },
            { text: '医疗用地', value: 6 },
        ],
        option3: [
            { text: '开发程度', value: 0 },
            { text: '已进入挂牌程序', value: 1 },
            { text: '已办储备证', value: 2 },
            { text: '已到征收收尾阶段', value: 3 },
        ],
      };
    },

    methods: {
      onClickLeft() {
        history.back();
      },
      RouteZSTJ(){
        this.$router.push({path:'/ZSTJ'})
      },
      alertdialog(){
        alert('未完全开放，功能仍在开发...')
      },
      func1(){  
        var value1 = this.value1  
        var value2 = this.value2  
        var value3 = this.value3  
        this.$refs.webmap.TDfilter1(value1,value2,value3);
      },  
      func2(){  
        var value2 = this.value2  
        this.$refs.webmap.TDfilter2(value2);
      },  
      func3(){  
        var value3 = this.value3  
        this.$refs.webmap.TDfilter3(value3);
      }  
    },

    mounted() {
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
    .van-nav-bar{
        background-size: 100% 100%;
        width:100%;
        position: fixed;
        z-index: 999;
        top:0;
        color: #000080;
        height: 98px;
    }
    .van-nav-bar >>> .van-nav-bar__left{
        font-size: 50px;
    }
    .van-nav-bar >>> .van-nav-bar__left >>>.i{
        font-size: 50px;
    }
    .van-nav-bar >>> .van-nav-bar__title{
        padding-top: 25px;
        font-size: 50px;
        font: bolder;
        /* color: #000080; */
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
    .dropmenu{

    }

   .van-dropdown-menu {
        font-size: 15px;
        font: bolder;
   }
    .van-hairline--top-bottom{
        margin: 2%;
        border: 0;
    }
    .van-dropdown-menu >>>.van-dropdown-menu__title{
        font-size: 26px;
        font: bolder;
   }
  .van-dropdown-menu >>> .van-dropdown-menu__item{
        padding: 30px;
  }
 .van-dropdown-menu >>> .van-ellipsis{
      height: 35px;
  }
   .van-dropdown-menu >>> .van-dropdown-item__option{
        font-size: 28px;
        font: bolder;
        margin-top: 3%;
        margin-bottom: 3%;
        padding-left: 5%;
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

  .out-list-item-p::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: url(./../assets/location.jpg) no-repeat center;
    background-size: 100% 100%;
  }

  .out-list-item-p.icon-location::after {
    background-image: url(./../assets/location.jpg);
  }

  .out-list-item-p.icon-phone::after {
    background-image: url(./../assets/phone.jpg);
  }

  .out-list-item-p.icon-time::after {
    background-image: url(./../assets/time.jpg);
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
    width: 23%;
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