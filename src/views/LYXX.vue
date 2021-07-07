<template>
  <div id="LYXX" class="layout">
    <div class="map">
      <webmap
        ref="webmap"
        @changeLYid="updateLYid"
        @changeimgList="updateimgList"
        @changeLYCard="updateCard"
        @RouteHYZ="RouteHYZ"
        @RouteHJK="RouteHJK"
        @RouteLYH="RouteLYH"
      ></webmap>
    </div>

    <mapChoose></mapChoose>

    <div class="top0">
      <van-search
        v-model="searchtext"
        shape="round"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        left-icon="none"
      >
        <template #right-icon>
          <van-icon name="search" @click="onSearch2" />
        </template>
      </van-search>

      <van-dropdown-menu :overlay="false">
        <van-dropdown-item v-model="value1" :options="option1" @change="func" />
        <van-dropdown-item v-model="value2" :options="option2" @change="func" />
        <van-dropdown-item v-model="value3" :options="option3" @change="func" />
      </van-dropdown-menu>
    </div>

    <!-- <div class="top">
      <el-row id="row1">
        <el-col>
          <ul type="none">
            <li id="img">
              <img src="./../assets/创意园.png" width="33%" @click="RouteHYZ" />
            </li>
            <li id="type" @click="RouteHYZ">汉阳造文创产业园</li>
          </ul>
        </el-col> -->
    <!-- <el-col>
            <ul type="none">
                <li id="img"><img src="./../assets/产业园.png" width="33%" @click="RouteHJ"/></li>
                <li id='type' @click="RouteHJ">加华科技产业园</li>
            </ul>
        </el-col>-->
    <!-- <el-col>
          <ul type="none">
            <li id="img">
              <img src="./../assets/工业园.png" width="33%" @click="RouteHJK" />
            </li>
            <li id="type" @click="RouteHJK">黄金口都市工业园</li>
          </ul>
        </el-col>
      </el-row>
    </div> -->

    <div class="bottom" id="bottomly" style="display: none">
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
            <img
              src="./../assets/choosed.png"
              width="3%"
              style="padding-right: 2%"
            />
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
          <span id="rowly_41">建设用途</span>
          <span id="lykt">36</span>
        </el-row>
        <el-row id="rowly_4">
          <span id="rowly_41">产权</span>
          <span id="lycq">36</span>
        </el-row>
        <el-row id="rowly_4">
          <span id="rowly_41">入驻率</span>
          <span id="lyqy">36</span>
        </el-row>
        <el-row id="rowly_4">
          <span id="rowly_41">停车位数量</span>
          <span id="lytc">36</span>
        </el-row>
        <el-row id="rowly_4">
          <span id="rowly_41">平均租金（元/平方米每月）</span>
          <span id="lyzj">36</span>
        </el-row>
        <el-row id="rowly_4">
          <span id="rowly_41">物业管理费（元/平方米每月）</span>
          <span id="lywy">36</span>
        </el-row>
        <el-row id="rowly_4">
          <span id="rowly_41">标准层面积（平方米）</span>
          <span id="lcmj">1512.08</span>
        </el-row>
        <el-row id="rowly_4">
          <span id="rowly_41">空置面积（平方米）</span>
          <span id="kzmj">9000</span>
        </el-row>
        <!-- <el-row id="rowly_4">
          <span id="jj"></span>
        </el-row> -->
        <el-row id="rowly_5" class="category">
          <i id="icon1" class="el-icon-picture"></i>
          <span id="rowly_42" @click="PICAlert">查看照片</span>
          <vue-preview :slides="imglist" class="imgPrev"></vue-preview>
        </el-row>
      </div>
    </div>

    <div class="bottom-footer" @click="drawer = true">
      <p class="el-icon-arrow-up">楼宇信息列表</p>
    </div>

    <el-drawer
      direction="btt"
      :visible.sync="drawer"
      :with-header="false"
      :modal="false"
      size="75%"
    >
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

          <div
            class="meg"
            v-for="(item, index) in viewArr"
            v-bind:key="index"
            @click="LYChoose(item.id)"
          >
            <el-card class="box-card">
              <el-row id="row6">
                <span>{{ item.name }}</span>
              </el-row>
              <el-row id="row2">
                <span id="locimg">
                  <img
                    src="./../assets/choosed.png"
                    width="3%"
                    style="padding-right: 1%"
                  />
                </span>
                <span id="row4">{{ item.address }}</span>
              </el-row>
              <el-row id="row2" class="column2">
                <span id="row3">建筑体量 {{ item.volume }} 平方米</span>
                <span id="row3">楼层数 {{ item.floor_num }}</span>
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
    mapChoose: mapChoose,
  },

  data() {
    return {
      isFull: false,
      totalData: {
        cure: 16,
        confirm: 17,
        new: 0,
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
      imglist: [],
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
        { text: "琴断口街", value: 8 },
        { text: "江汉二桥街", value: 9 },
        { text: "鹦鹉街街道", value: 10 },
        { text: "龙阳街", value: 11 },
      ],
      option2: [
        { text: "建筑体量", value: 0 },
        { text: "小于20000平米", value: 1 },
        { text: "20000-30000平米", value: 2 },
        { text: "30000-40000平米", value: 3 },
        { text: "40000-50000平米", value: 4 },
        { text: "50000-100000平米", value: 5 },
        { text: "100000平米以上", value: 6 },
      ],
      option3: [
        { text: "空置面积", value: 0 },
        { text: "小于1000平米", value: 1 },
        { text: "1000-5000平米", value: 2 },
        { text: "5000-10000平米", value: 3 },
        { text: "10000-50000平米", value: 4 },
        { text: "50000平米以上", value: 5 },
      ],
    };
  },

  methods: {
    func() {
      var value1 = this.value1;
      var value2 = this.value2;
      var value3 = this.value3;
      this.$refs.webmap.LYfilter(value1, value2, value3);
    },
    onClickLeft() {
      history.back();
    },
    onClickRight() {
      console.log("search");
    },
    updateCard(value) {
      this.viewArr = value;
    },
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
    RouteLYH() {
      this.$router.push({ path: "/LYH" });
    },
    PICAlert() {
      var that = this;
        var url = "http://121.196.60.135:1338/bms/" + that.LYid;
        console.log(url);
        that.imglist = [];
        fetch(url)
          .then((result) => result.json())
          .then((result) => {
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
              } else {
                that.$alert("照片正在收录，敬请期待！", "提示", {
                  confirmButtonText: "确定",
                });
              }
            } else {
              that.$alert("照片正在收录，敬请期待！", "提示", {
                confirmButtonText: "确定",
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
    LYChoose(id) {
      this.$refs.webmap.LYchoose(id);
      this.drawer = false;
    },
    onSearch(val) {
      console.log(val);
      this.$refs.webmap.LYsearch(val);
    },
    
    onSearch2() {
      var that = this;
      this.$refs.webmap.LYsearch(that.searchtext);
    },
    
    getly(){
      fetch("http://121.196.60.135:1337/bms/geoprovider/LYXX")
        .then((result) => result.json())
        .then((result) => {
          var that = this;
          var tdxx = JSON.parse(JSON.parse(result.content))
          for (var i = 0; i < tdxx.features.length; i++) {
            that.viewArr.push(tdxx.features[i].properties);
          }
          console.log(that.viewArr)
        });
      this.$refs.webmap.HYbuildings();
      this.$refs.webmap.HYCYY(); //加载产业园
    }
  },

  

  mounted() {
    this.getly()
  },

  activated() {
    this.getly()
  }, 
};
</script>

<style scoped src="../css/LYXX.css"></style>

