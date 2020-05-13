<template>
  <div id="LYXX" class="layout">
    <div class="map">
      <webmap ref="webmap" @changeLYid="updateLYid" @changeimgList="updateimgList"></webmap>
    </div>

    <mapChoose></mapChoose>

    <div class="top">
      <el-row id="row1">
        <el-col>
          <ul type="none">
            <li id="img">
              <img src="./../assets/创意园.png" width="33%" @click="RouteHYZ" />
            </li>
            <li id="type" @click="RouteHYZ">汉阳造文创产业园</li>
          </ul>
        </el-col>
        <!-- <el-col>
            <ul type="none">
                <li id="img"><img src="./../assets/产业园.png" width="33%" @click="RouteHJ"/></li>
                <li id='type' @click="RouteHJ">加华科技产业园</li>
            </ul>
        </el-col>-->
        <el-col>
          <ul type="none">
            <li id="img">
              <img src="./../assets/工业园.png" width="33%" @click="RouteHJK" />
            </li>
            <li id="type" @click="RouteHJK">黄金口都市工业园</li>
          </ul>
        </el-col>
      </el-row>
    </div>

    <div class="bottom" id="bottomly" style="display:none">
      <div id="rowly_0" @click="hide">
        <p class="el-icon-arrow-down">关闭楼宇信息</p>
      </div>
      <el-divider class="el-divider1"></el-divider>
      <div id="form">
        <el-row id="rowly_1">
          <span id="lyname">钢丝厂及扩大片项目</span>
        </el-row>
        <el-row id="rowly_2">
          <span id="lylocimg">
            <img src="./../assets/choosed.png" width="3%" style="padding-right:2%" />
          </span>
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
        <el-row id="rowly_5" class="category">
          <i id="icon1" class="el-icon-picture"></i>
          <span id="rowly_42" @click="PICAlert">查看照片</span>
          <!-- <img id="img1" src='' class="pic"  />
          <img id="img2" src='' class="pic"  />
          <img id="img3" src='' class="pic"  />-->
          <vue-preview :slides="imglist" class="imgPrev"></vue-preview>
        </el-row>
      </div>
    </div>

    <div class="bottom-footer" @click="drawer = true">
      <p class="el-icon-arrow-up">楼宇信息列表</p>
    </div>

    <el-drawer direction="btt" :visible.sync="drawer" :with-header="false" size="90%">
      <div id="drawer-content">
        <div id="row0" @click="drawer = false">
          <p class="el-icon-arrow-down">关闭楼宇信息列表</p>
        </div>

        <el-divider class="el-divider1"></el-divider>

        <div id="Selfform">
          <div class="nullimg" v-if="!viewArr[0]">
            <img src="./../assets/nulldata.png" width="80%" />
            <br />
            <br />
            <p>数据未获取，请重新选择...</p>
          </div>

          <div class="meg" v-for="(item,index) in viewArr" v-bind:key="index" @click="LYChoose(item.id)">
            <el-card class="box-card">
              <el-row id="row6">
                <span>{{item.name}}</span>
              </el-row>
              <el-row id="row2">
                <span id="locimg">
                  <img src="./../assets/choosed.png" width="3%" style="padding-right:1%" />
                </span>
                <span id="row4">{{item.address}}</span>
              </el-row>
              <el-row id="row2">
                <span id="row3">建筑体量 {{item.volume}} 平方米</span>
                <span id="row3">楼层数 {{item.floor_num}}</span>
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
import * as maptalks from "maptalks";
import "maptalks/dist/maptalks.css";
import webmap from "./../components/webmap";
import mapChoose from "./../components/mapChoose";

export default {
  name: "LYXX",

  components: {
    webmap: webmap,
    mapChoose: mapChoose
  },

  data() {
    return {
      isFull: false,
      totalData: {
        cure: 16,
        confirm: 17,
        new: 0
      },
      fullscreen: false,
      centerDialogVisible: false,
      modalvisible: false,
      num: 0,
      LYid: 0,
      viewArr: [],
      drawer: false,
      img1: "",
      img2: "",
      img3: "",
      imglist: []
    };
  },

  methods: {
    hide() {
      document.getElementById("bottomly").style.display = "none";
    },
    RouteHYZ() {
      this.$router.push({ path: "/HYZ" });
    },
    RouteHJK() {
      this.$router.push({ path: "/HJK" });
    },
    RouteHJ() {
      this.$router.push({ path: "/HJ" });
    },
    PICAlert() {
      var that = this;
      var url = "http://121.196.60.135:1338/bms/" + that.LYid;
      console.log(url)
      that.imglist = [];
      fetch(url)
        .then(result => result.json())
        .then(result => {
          if (result.status == "ok") {
            var county = JSON.parse(result.content);
            if (county.images.length > 0) {
              for (var i = 0; i < county.images.length; i++) {
                var arr = {};
                arr.w = 700;
                arr.h = 700;
                arr.src =
                  "http://121.196.60.135/cdn/楼宇资料/" +
                  that.LYid +
                  "/" +
                  county.images[i];
                arr.msrc =
                  "http://121.196.60.135/cdn/楼宇资料/" +
                  that.LYid +
                  "/" +
                  county.images[i];
                that.imglist.push(arr);
              }
              console.log(that.imglist);
              that.img1 = county.images[0];
              that.img2 = county.images[1];
              that.img3 = county.images[2];
              if (county.images.length == 1) {
                // document.getElementById("img1").src =
                //   "http://121.196.60.135/cdn/楼宇资料/" +
                //   that.LYid +
                //   "/" +
                //   that.img1;
              } else if (county.images.length == 2) {
                // document.getElementById("img1").src =
                //   "http://121.196.60.135/cdn/楼宇资料/" +
                //   that.LYid +
                //   "/" +
                //   that.img1;
                // document.getElementById("img2").src =
                //   "http://121.196.60.135/cdn/楼宇资料/" +
                //   that.LYid +
                //   "/" +
                //   that.img2;
              } else if (county.images.length > 2) {
                // document.getElementById("img1").src =
                //   "http://121.196.60.135/cdn/楼宇资料/" +
                //   that.LYid +
                //   "/" +
                //   that.img1;
                // document.getElementById("img2").src =
                //   "http://121.196.60.135/cdn/楼宇资料/" +
                //   that.LYid +
                //   "/" +
                //   that.img2;
                // document.getElementById("img3").src =
                //   "http://121.196.60.135/cdn/楼宇资料/" +
                //   that.LYid +
                //   "/" +
                //   that.img3;
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
    updateLYid(value) {
      this.LYid = value;
    },
    updateimgList(value) {
      this.imglist = value;
    },
    LYChoose(id){
      this.$refs.webmap.LYchoose(id);
      this.drawer = false
    }
  },

  mounted() {
    fetch("http://121.196.60.135:1338/data/lyxx")
      .then(result => result.json())
      .then(result => {
        var that = this;
        var tdxx = JSON.parse(result.content);
        for (var i = 0; i < tdxx.features.length; i++) {
          that.viewArr.push(tdxx.features[i].properties);
        }
      });
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

#dialog1 {
  width: 100%;
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
  width: 90%;
  left: 3%;
  position: absolute;
  text-align: center;
  top: 3%;
  padding: 2%;
  transition: all 0.5s;
  z-index: 4;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
  border-radius: 10px;
  /* box-shadow: 0 0 5vmax 50vmax rgba(0,0,0,.5); */
}

#bottomly {
  height: auto;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.5s;
  z-index: 99;
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
  font-size: 1em;
  padding: 2%;
  /* box-shadow: 0 0 5vmax 50vmax rgba(0,0,0,.5); */
}
#row2 {
  opacity: 100%;
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
#row6 {
  opacity: 100%;
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

.el-col {
  /* width: 33%; */
  width: 50%;
  text-align: center;
}

.el-card {
  width: 90%;
  left: 5em;
  margin-bottom: 2%;
  margin-top: 2%;
  margin-left: 5%;
}

#img {
  text-align: center;
}

#type {
  font-size: 0.8em;
  font-family: Adobe Heiti Std;
  font-weight: 600;
  color: rgba(34, 34, 34, 1);
  padding-left: 1%;
  padding-right: 2%;
}

#rowly_0 {
  padding-top: 2%;
  padding-bottom: 2%;
  text-align: center;
  font-size: 0.8em;
  font-family: PingFang SC;
  color: rgba(51, 51, 51, 1);
}

#lyname {
  padding: 3%;
  margin-top: 2%;
  font-size: 1.1em;
  font-family: "PingFangSC";
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}

#rowly_2 {
  padding-left: 3%;
  padding-top: 2%;
  padding-bottom: 2%;
  font-family: "微软雅黑";
}
#lycs {
  font-size: 0.8em;
  padding: 6px 20px;
  margin: 0 10px;
  margin-right: 3%;
  display: inline-block;
  border-radius: 4px;
  background: #355bfa;
  border: 1px solid #004acc;
  color: #ffffff;
}
#lytl {
  font-size: 0.8em;
  padding: 6px 20px;
  display: inline-block;
  border-radius: 4px;
  background: #355bfa;
  border: 1px solid #004acc;
  color: #ffffff;
}
#rowly_4 {
  padding-left: 3%;
  padding-top: 2%;
  padding-bottom: 2%;
  border-bottom: 0.1px solid #eeeeee;
}
#rowly_5 {
  padding-left: 3%;
  padding-top: 2%;
  padding-bottom: 2%;
}
#rowly_31 {
  font-size: 0.9em;
  font-weight: bold;
  padding-left: 3%;
  padding-right: 2%;
  padding-top: 2%;
  padding-bottom: 2%;
}
#rowly_32 {
  font-size: 0.9em;
  font-weight: bold;
  padding-left: 3%;
  padding-right: 2%;
  padding-top: 2%;
  padding-bottom: 2%;
  border-left: 1px solid gray;
}
#rowly_41 {
  font-weight: bold;
  font-size: 0.9em;
  width: 60%;
  display: -moz-inline-box;
  display: inline-block;
}
#rowly_42 {
  font-weight: bold;
  font-size: 0.9em;
  width: 60%;
  margin-right: 20%;
  display: -moz-inline-box;
  display: inline-block;
}
#icon0 {
  background: white;
  color: #355bfa;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

#icon1 {
  background: white;
  color: goldenrod;
  padding-right: 2%;
}
#img1 {
  width: 200px;
  max-height: 200px;
  border-radius: 20px;
  padding: 2%;
}
#img2 {
  width: 200px;
  max-height: 200px;
  border-radius: 20px;
  padding: 2%;
}
#img3 {
  width: 200px;
  max-height: 200px;
  border-radius: 20px;
  padding: 2%;
}
.element.style {
  transform-origin: right center;
  z-index: 4;
  display: none;
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

#row0 {
  padding-top: 2%;
  padding-bottom: 2%;
  text-align: center;
  font-size: 0.8em;
  font-family: PingFang SC;
  color: rgba(51, 51, 51, 1);
}

</style>

<style>
.el-drawer.btt {
  overflow: scroll;
}

.imgPrev figure {
  float: left;
  width: 30%;
  height: calc(30vw - 0px);
  margin: 1.5%;
}

.imgPrev figure img {
  width: 200px;
  max-height: 200px;
  border-radius: 20px;
  padding: 2%;
}
</style>