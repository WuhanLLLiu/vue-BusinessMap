<template>
  <div id="ZDCY" class="layout">
    <el-row class="row">
        <img id="img" src="./../assets/生命健康.png" @click="RouteJKCY"/>
    </el-row>
    <el-row class="row">
        <img id="img" src="./../assets/会展产业.png" @click="RouteHZCY"/>
    </el-row>
    <el-row class="row">
        <img id="img" src="./../assets/路桥工程.png"/>
    </el-row>
    <el-row class="row">
        <img id="img" src="./../assets/汽车后市场.png"/>
    </el-row>
    <el-row class="row">
        <img id="img" src="./../assets/文化创意.png" @click="RouteWLCY"/>
    </el-row>
    <el-row class="row">
        <img id="img" src="./../assets/金融产业.png" @click="RouteJRCY"/>
    </el-row>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "ZDCY",
  data() {
    return {
      // currentDate: new Date()
    };
  },
  methods: {
    RouteJKCY() {
      this.$router.push({ path: "/JKCY" });
    },
    RouteHZCY() {
      this.$router.push({ path: "/HZCY" });
    },
    RouteWLCY() {
      this.$router.push({ path: "/WLCY" });
    },
    RouteJRCY() {
      this.$router.push({ path: "/JRCY" });
    },
  }
};
</script>

<!-- 限定局部有效的样式 -->
<style scoped>
.details {
  font-size: 13px;
  color: #999;
}
.title {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  /*line-height: 20px;*/
  /*padding-bottom: 20px;*/
}
.bottom {
  margin-top: 30px;
  line-height: 12px;
}
#img{
  display: inline-block;
  height: auto;
  max-width: 100%;
}
.row{
 padding-left: 4%;
 padding-right: 4%;
 padding-top:3% ;
 padding-bottom:2% ;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
