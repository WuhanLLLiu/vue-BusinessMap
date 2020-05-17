<template>
  <div id="ZSTJ2" class="layout">
    <div id="row">
      <p id="row1">武汉汉阳招商资源指南</p>
      <!-- <p id="row2">来源：汉阳区商务局</p> -->
    </div>

    <el-divider class="el-divider1"></el-divider>

    <div id="Selfform">
      <img src="./../assets/zstj/IMG_00001.jpeg" id="hj" />
	  <img src="./../assets/zstj/IMG_00002.jpeg" id="hj" />
	  <img src="./../assets/zstj/IMG_00003.jpeg" id="hj" />
	  <img src="./../assets/zstj/IMG_00004.jpeg" id="hj" />
	  <img src="./../assets/zstj/IMG_00005.jpeg" id="hj" />
	  <img src="./../assets/zstj/IMG_00006.jpeg" id="hj" />
	  <img src="./../assets/zstj/IMG_00007.jpeg" id="hj" />
	  <img src="./../assets/zstj/IMG_00008.jpeg" id="hj" />
	  <img src="./../assets/zstj/IMG_00009.jpeg" id="hj" />
	  <img src="./../assets/zstj/IMG_00010.jpeg" id="hj" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "ZSTJ2",

  components: {},

  data() {
    return {};
  },

  beforeMount() {},

  methods: {},

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
#row {
  padding: 4%;
}
#row1 {
  padding: 1%;
  font-size: 48px;
  font-family: PingFang SC;
  font-weight: 900;
  color: rgba(51, 51, 51, 1);
  line-height: 64px;
}

#row2 {
  font-size: 35px;
  font-family: PingFang SC;
  font-weight: lighter;
  color: rgba(51, 51, 51, 1);
  opacity: 0.5;
}
#Selfform {
  margin-top: 3%;
  padding: 5%;
  font-size: 36px;
  line-height: 58px;
  font-family: PingFang SC;
}
#title {
  font-size: 41px;
  font-weight: bolder;
  font-family: PingFang SC;
}
#hj {
  display: inline-block;
  height: auto;
  max-width: 100%;
}
</style>