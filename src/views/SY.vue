<template>
  <div id="SY" class="layout">
    <div class="logo">
      <img id="logo" src="./../assets/logo.png" width="40%" />
    </div>

    <div id="buildings">
      <img id="building" src="./../assets/土地信息.png" width="30%" @click="RouteDT" />
      <img id="building" src="./../assets/楼宇信息.png" width="30%" @click="RouteLY" />
    </div>
    <div id="buildings0">
      <img id="building" src="./../assets/招商政策.png" width="30%" @click="RouteZSZC" />
      <img id="building" src="./../assets/招商推介.png" width="30%" @click="RouteZSTJ" />
      <img id="building" src="./../assets/重点产业.png" width="30%" @click="RouteZDCY" />
    </div>

    <div class="bottom-footer">
      版权所有©汉阳区商务局&nbsp;&nbsp;&nbsp;技术支持:武汉大学测绘学院
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "SY",

  components: {},

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
      innerVisible_1: false,
      modalvisible: false,
      alertText: "",
      fullscreen1: true
    };
  },

  beforeMount() {
    this.carouselHeight = window.innerHeight + "px";
  },

  methods: {
    RouteZSTJ() {
      this.$router.push({ path: "/ZSTJ2" });
    },
    RouteDT() {
      this.$router.push({ path: "/TDXX" });
    },
    RouteLY() {
      this.$router.push({ path: "/LYXX" });
    },
    RouteZSZC() {
      this.$router.push({ path: "/ZSZC" });
    },
    RouteZDCY() {
      this.$router.push({ path: "/ZDCY" });
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

.layout {
  background: url(./../assets/汉阳-00.png) no-repeat center 0;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
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
  top: 20%;
  /* border-radius: 50% 50%; */
}

#logo {
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  /* border-radius: 50% 50%; */
  position: absolute !important;
  left: 50%;
  top: 25%;
  transform: translateY(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  display: block;
}

.layout .select {
  position: absolute;
  z-index: 102;
  height: 36px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  margin: 0.3rem 0.3rem 0px 0.3rem;
  width: 20%;
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

.number-list > li.number-list-item {
  height: 100%;
  width: 118px;
  font-size: 28px;
  position: absolute;
  left: 88px;
  top: 0;
  text-align: center;
}

.number-list > li.number-list-item:nth-child(2) {
  left: 321px;
}

.number-list > li.number-list-item:nth-child(3) {
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
  color: white;
  font-size: 0.8em;
  margin-top: 1.5em;
  margin-bottom: 12px;
  width: 100%;
  position: absolute;
  bottom: 35px;
  transition: all 0.5s;
  z-index: 4;
  opacity: 100%;
  text-shadow:5px 2px 10px #000
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
  padding-left: 1em;
  text-align: center;
  /* box-shadow: 0 0 5vmax 50vmax rgba(0,0,0,.5); */
}

.el-col {
  border-radius: 4px;
  width: 23%;
  text-align: center;
}

#img {
  text-align: center;
}

#buildings {
  text-align: center;
  position: absolute;
  bottom: 35%;
}
#buildings0 {
  text-align: center;
  position: absolute;
  bottom: 20%;
}
#building {
  padding: 1.5%;
}
</style>