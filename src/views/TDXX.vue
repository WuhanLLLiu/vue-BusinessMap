<template>
  <div id="TDXX" class="layout">
    <div class="top0">
      <van-search
        v-model="searchtext"
        shape="round"
        placeholder="请输入搜索关键词"
        center=true
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

    <el-drawer direction="btt" :visible.sync="drawer" :with-header="false" size="75%" :modal="false">
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
              <el-row id="row2" class="column2">
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
        { text: "琴断口街", value: 8 },
        { text: "龙阳街", value: 9 }
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
        { text: "城中村产业用地", value: 1 },
        { text: "混合用地", value: 2 },
        { text: "商服用地", value: 3 },
        { text: "居住用地", value: 4 },
        { text: "工业用地", value: 5 },
        { text: "医疗用地", value: 6 },
        { text: "国有划拨用地", value: 7 }
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
      fetch("http://121.196.60.135:1337/bms/geoprovider/TDXX")
        .then(result => result.json())
        .then(result => {
          var that = this;
          var tdxx = JSON.parse(JSON.parse(result.content));
          for (var i = 0; i < tdxx.features.length; i++) {
            that.viewArr.push(tdxx.features[i].properties);
          }
        });
      this.$refs.webmap.HYparcel();
    }
  },

  mounted() {
    this.gettd()
  },

  activated() {
    this.gettd()
  }, 
};
</script>

<style scoped src="../css/TDXX.css"></style>