<template>
  <div id="TDXX" class="layout">
    <div class="top0">
      <van-search
        v-model="searchtext"
        background="#355bfa"
        shape="round"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        left-icon = none
      >
        <template #right-icon>
          <van-icon name="search" @click="onSearch2"/>
        </template>
      </van-search>
      <van-dropdown-menu :overlay="false">
        <van-dropdown-item v-model="value1" :options="option1" @change="func" />
        <van-dropdown-item v-model="value2" :options="option2" @change="func" />
        <van-dropdown-item v-model="value3" :options="option3" @change="func" />
      </van-dropdown-menu>
    </div>

    <div class="map">
      <webmap ref="webmap" @changeCard="updateCard" @changeTDid="updateTDid"></webmap>
    </div>

    <mapChoose></mapChoose>

    <div class="bottom" id="bottom0" style="display:none">
      <div id="row0" @click="hide">
        <p class="el-icon-arrow-down">关闭土地信息列表</p>
      </div>
      <el-divider class="el-divider1"></el-divider>
      <div id="form">
        <el-row id="row_1">
          <span id="name">钢丝厂及扩大片项目</span>
        </el-row>
        <el-row id="row_2">
          <span id="area">121亩</span>
          <span id="locimg">
            <img src="./../assets/choosed.png" width="3%" style="padding-right:2%" />
          </span>
          <span id="location">国博以北，西邻鹦鹉大道，东临晴川</span>
        </el-row>
        <el-row id="row_3">
          <span id="proportion">公建比 5：5</span>
        </el-row>
        <el-row id="row_4">
          <span id="row_direction">招商方向</span>
          <span id="direction">世界500强</span>
        </el-row>
        <el-row id="row_5">
          <span>详细信息</span>
        </el-row>
        <el-row id="row_6">
          <span id="around">国博以北，西邻鹦鹉大道，东临晴川</span>
        </el-row>
        <el-row id="rowly_5" class="category">
          <i id="icon1" class="el-icon-picture"></i>
          <span id="rowly_42" @click="PICAlert">查看照片</span>
          <img id="imgdk1" src class="pic" />
          <img id="imgdk2" src class="pic" />
          <img id="imgdk3" src class="pic" />
        </el-row>
      </div>
    </div>

    <div class="bottom-footer" @click="drawer = true" >
      <p class="el-icon-arrow-up">土地信息列表</p>
    </div>

    <el-drawer direction="btt" :visible.sync="drawer" :with-header="false" size="90%">
      <div id="drawer-content">
        <div id="row0" @click="drawer = false">
          <p class="el-icon-arrow-down">关闭土地信息列表</p>
        </div>

        <el-divider class="el-divider1"></el-divider>

        <div id="Selfform">
          <div class="nullimg" v-if="!viewArr[0]">
            <img src="./../assets/nulldata.png" width="80%" />
            <br />
            <br />
            <p>数据未获取，请重新选择...</p>
          </div>

          <div
            class="meg"
            v-for="(item,index) in viewArr"
            v-bind:key="index"
            @click="TDChoose(item.Id)"
          >
            <el-card class="box-card">
              <el-row id="row1">
                <span>{{item.name}}</span>
              </el-row>
              <el-row id="row2">
                <span id="locimg">
                  <img src="./../assets/choosed.png" width="3%" style="padding-right:1%" />
                </span>
                <span id="row4">{{item.location}}</span>
              </el-row>
              <el-row id="row2">
                <span id="row3">面积 {{item.area}} 亩</span>
                <span id="row3">公建比 {{item.proportion}}</span>
              </el-row>
            </el-card>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import Vue from "vue";
import webmap from "./../components/webmap";
import mapChoose from "./../components/mapChoose";

export default {
  name: "TDXX",

  components: {
    webmap: webmap,
    mapChoose: mapChoose
  },

  data() {
    return {
      isFull: true,
      totalData: {
        cure: 16,
        confirm: 17,
        new: 0
      },
      centerDialogVisible: false,
      modalvisible: false,
      num: 0,
      viewArr: [],
      TDid: 0,
      drawer: false,
      img1: "",
      img2: "",
      img3: "",
      searchtext: "",
      value1: 0,
      value2: 0,
      value3: 0,
      option1: [
        { text: "街道", value: 0 },
        { text: "江堤街", value: 1 },
        { text: "永丰街", value: 2 },
        { text: "洲头街", value: 3 },
        { text: "建桥街", value: 4 },
        { text: "四新街", value: 5 },
        { text: "晴川街", value: 6 },
        { text: "五里墩街", value: 7 },
        { text: "琴断口街", value: 8 }
      ],
      option2: [
        { text: "面积", value: 0 },
        { text: "小于50亩", value: 1 },
        { text: "50-100亩", value: 2 },
        { text: "100-200亩", value: 3 },
        { text: "大于200亩", value: 4 }
      ],
      option3: [
        { text: "用地类型", value: 0 },
        { text: "城中村", value: 1 },
        { text: "混合用地", value: 2 },
        { text: "商服用地", value: 3 },
        { text: "居住用地", value: 4 },
        { text: "工业用地", value: 5 },
        { text: "医疗用地", value: 6 }
      ]
    };
  },

  methods: {
    onClickLeft() {
      history.back();
    },
    hide() {
      document.getElementById("bottom0").style.display = "none";
    },
    func() {
      var value1 = this.value1;
      var value2 = this.value2;
      var value3 = this.value3;
      this.$refs.webmap.TDfilter(value1, value2, value3);
    },
    updateCard(value) {
      this.viewArr = value;
    },
    updateTDid(value) {
      this.TDid = value;
    },
    PICAlert() {
      var that = this;
      var url = "http://121.196.60.135:1338/lms/" + that.TDid;
      fetch(url)
        .then(result => result.json())
        .then(result => {
          if (result.status == "ok") {
            var county = JSON.parse(result.content);
            if (county.images.length > 0) {
              document.getElementById("bottom0").style.height = "80%";
              that.img1 = county.images[0];
              that.img2 = county.images[1];
              that.img3 = county.images[2];
              if (county.images.length == 1) {
                document.getElementById("imgdk1").src =
                  "http://121.196.60.135/cdn/地块资料/" +
                  that.TDid +
                  "/" +
                  that.img1;
              } else if (county.images.length == 2) {
                document.getElementById("imgdk1").src =
                  "http://121.196.60.135/cdn/地块资料/" +
                  that.TDid +
                  "/" +
                  that.img1;
                document.getElementById("imgdk2").src =
                  "http://121.196.60.135/cdn/地块资料/" +
                  that.TDid +
                  "/" +
                  that.img2;
              } else if (county.images.length > 2) {
                document.getElementById("imgdk1").src =
                  "http://121.196.60.135/cdn/地块资料/" +
                  that.TDid +
                  "/" +
                  that.img1;
                document.getElementById("imgdk2").src =
                  "http://121.196.60.135/cdn/地块资料/" +
                  that.TDid +
                  "/" +
                  that.img2;
                document.getElementById("imgdk3").src =
                  "http://121.196.60.135/cdn/地块资料/" +
                  that.TDid +
                  "/" +
                  that.img3;
              }
            } else {
              that.$alert("照片正在收录，敬请期待！", "提示", {
                confirmButtonText: "确定"
              });
            }
          } else {
            that.$alert("照片正在收录，敬请期待！", "提示", {
              confirmButtonText: "确定"
            });
          }
        });
    },
    hybird_map() {
      this.$refs.webmap.hybird_map();
    },
    Vector_map() {
      this.$refs.webmap.Vector_map();
    },
    TDChoose(id) {
      this.$refs.webmap.TDchoose(id);
      this.drawer = false;
    },
    onSearch(val) {
      console.log(val);
      this.$refs.webmap.TDsearch(val);
    },
    onSearch2(){
      var that =this
      this.$refs.webmap.TDsearch(that.searchtext);
    },
    gettd(){
      fetch("http://121.196.60.135:1338/data/tdxx")
        .then(result => result.json())
        .then(result => {
          var that = this;
          var tdxx = JSON.parse(result.content);
          for (var i = 0; i < tdxx.features.length; i++) {
            that.viewArr.push(tdxx.features[i].properties);
          }
        });
      this.$refs.webmap.HYparcel();
    }
  },

  mounted() {
    this.gettd()
  }
};
</script>

<style scoped >
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

body {
  overflow: hidden;
}

.layout {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.van-dropdown-menu {
  /* font-size: 15px; */
  font-size: 0.9em;
  font: bolder;
  height: 20%;
  background: #355bfa;
}
.van-dropdown-menu >>> .van-hairline--top-bottom {
  margin: 0%;
  border: 0;
}
.van-dropdown-menu >>> .van-dropdown-menu__title {
  /* font-size: 34px; */
  font-size: 0.9em;
  /* font-weight: bold; */
  font-family: "Microsoft YaHei";
  color: #fff;
}
.van-dropdown-menu >>> .van-dropdown-menu__title::after {
  border: 5px solid;
  right: -20px;
  border-color: transparent transparent currentColor currentColor;
}

.van-dropdown-menu >>> .van-dropdown-menu__item {
  padding: 25px;
  height: 20px;
  font-family: PingFang SC;
  font-weight: light;
  color: rgba(255, 255, 255, 1);
}
.van-dropdown-menu >>> .van-ellipsis {
  height: 25px;
  padding-top: 10%;
}
.van-dropdown-menu >>> .van-dropdown-item__option {
  /* font-size: 35px; */
  font-size: 0.9em;
  font-family: "Microsoft YaHei";
  /* font-weight: 600; */
  margin-top: 5%;
  margin-bottom: 5%;
  padding-left: 5%;
  padding-bottom: 20px;
}
.van-dropdown-menu >>> .van-dropdown-item__option:not(:last-child)::after {
  border-bottom: 8px solid #ebedf0;
}

.bottom-footer {
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: #333333;
  /* font-size: 35px; */
  font-size: 0.9em;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.5s;
  z-index: 3;
  background: #fff;
}

.map {
  /* height: calc(100% - 431px); */
  height: calc(100%);
  overflow: hidden;
  position: relative;
}

.monad {
  font-size: 16px;
}

.ul {
  display: table;
  list-style-type: none;
  text-align: center;
}

#row0 {
  padding-top: 2%;
  padding-bottom: 2%;
  text-align: center;
  font-size: 0.8em;
  font-family: PingFang SC;
  color: rgba(51, 51, 51, 1);
}

#row1 {
  /*opacity: 100%;*/
  width: 100%;
  left: 1%;
  padding: 1%;
  padding-top: 3%;
  padding-bottom: 2%;
  font-size: 1.1em;
  font-family: "微软雅黑";
  font: bolder;
  font-weight: bold;
}

#row2 {
  /*opacity: 100%;*/
  width: 100%;
  left: 1%;
  display: table;
  padding: 1%;
  font-family: "黑体";
  font: bolder;
  padding-bottom: 2%;
  font-size: 1em;
}

#row3 {
  font-size: 0.9em;
  padding: 6px 20px;
  margin: 0 10px;
  display: inline-block;
  border-radius: 4px;
  background: white;
  border: 1px solid #004acc;
  color: #004acc;
}

#row4 {
  font-size: 0.9em;
  padding-left: 1%;
  padding-top: 2%;
  padding-bottom: 2%;
  /* margin: 0 10px; */
  font-family: "微软雅黑";
  /* display: inline-block; */
  color: #333333;
}
#row5 {
  font-size: 1em;
  display: inline-block;
  font-family: "微软雅黑";
}

#el-divider1 {
  margin: 2%;
}

#drawer-content {
  /* height: 99.5%; */
  overflow: auto;
}

.el-card {
  width: 90%;
  left: 5em;
  margin-bottom: 2%;
  margin-top: 2%;
  margin-left: 5%;
}

.index span {
  font-family: "微软雅黑", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font: bolder;
  font-size: 1em;
  display: inline-block;
  padding: 8px 15px 0 0;
}

.line {
  margin: 0%;
  border: 0%;
  width: 4%;
}

.content {
  font-family: "微软雅黑", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: lighter;
  font-size: 14px;
  text-align: left;
  border-left: 1px solid #dddddd;
  padding: 0 0 0 15px;
  margin: 0 0 20px 0;
}
.el-col {
  border-radius: 4px;
  width: 23%;
  text-align: center;
}

#img {
  text-align: center;
}

#type {
  font-weight: bolder;
  font-size: 1em;
  text-align: center;
}

.layout .bottom {
  height: auto;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.5s;
  z-index: 5;
  background: #fff;
  /* box-shadow: 0 0 5vmax 50vmax rgba(0,0,0,.5); */
}

#name {
  padding: 3%;
  font-size: 1.3em;
  font-family: "微软雅黑";
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}

#area {
  font-size: 1em;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-right: 2%;
  margin: 0 10px;
  display: inline-block;
  border-right: 1px solid grey;
}

#row_3 {
  padding-left: 2%;
  padding-top: 1%;
  padding-bottom: 1%;
  font-size: 0.9em;
}
#proportion {
  font-size: 0.9em;
  padding: 6px 20px;
  /* margin: 0 10px; */
  display: inline-block;
  border-radius: 4px;
  background: #cfe0ff;
  border: 1px solid #004acc;
  color: #004acc;
}
#row_direction {
  font-size: 0.9em;
  padding: 6px 20px;
  margin-right: 10px;
  display: inline-block;
  border-radius: 4px;
  background: white;
  border: 1px solid #ff654c;
  color: #ff654c;
}
#row_2 {
  padding-left: 2%;
  padding-top: 1%;
  padding-bottom: 1%;
  font-size: 0.9em;
}
#row_4 {
  padding-left: 2%;
  padding-top: 1%;
  padding-bottom: 1%;
  font-size: 0.9em;
}
#row_5 {
  padding-left: 2%;
  padding-top: 1%;
  padding-bottom: 1%;
  font-weight: bold;
}
#row_6 {
  padding-left: 2%;
  padding-top: 1%;
  padding-bottom: 2%;
  font-size: 0.9em;
}
#arrowup {
  padding-right: 2%;
}
#rowly_5 {
  padding-left: 3%;
  padding-bottom: 2%;
}
#icon1 {
  background: white;
  color: goldenrod;
  padding-right: 2%;
}
#imgdk1 {
  width: 350px;
  max-height: 350px;
  border-radius: 20px;
  padding: 2%;
}
#imgdk2 {
  width: 200px;
  max-height: 200px;
  border-radius: 20px;
  padding: 2%;
}
#imgdk3 {
  width: 200px;
  max-height: 200px;
  border-radius: 20px;
  padding: 2%;
}
#rowly_42 {
  font-weight: bold;
  font-size: 0.9em;
  width: 60%;
  margin-right: 20%;
  display: -moz-inline-box;
  display: inline-block;
}

.layout .top0 {
  width: 100%;
  position: absolute;
  top: 0%;
  transition: all 0.5s;
  z-index: 4;
  background: #355bfa;
}
</style>

<style>
.el-drawer.btt {
  overflow: scroll;
}

.nullimg {
  width: 50%;
  height: auto;
  max-width: 80%;
  max-height: 80%;
  border-radius: 50% 50%;
  position: absolute !important;
  left: 55%;
  top: 45%;
  transform: translateY(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  display: block;
  width: 395px;
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(187, 187, 187, 1);
}

.element.style {
  transform-origin: right center;
  z-index: 4;
  display: none;
}

.van-icon-arrow-left::before {
  content: "\F008";
  color: black;
  font-size: 30px;
}

.van-field__left-icon {
  font-size: 30px;
}
.van-field__control {
  font-size: 22px;
}

.van-icon-search::before {
  content: "\F0AF";
  font-size: 40px;
  color: black;
}

.van-search {
  padding: 2%;
}

.van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border-width: 0px 0;
}

.van-cell {
  line-height: 50px;
}

input[type="search" i] {
  font-size: 30px;
}
</style>