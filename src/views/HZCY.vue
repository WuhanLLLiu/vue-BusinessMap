<template>
  <div id="HZCY" class="layout">
    <div id="top">
      <van-tabs v-model="active" background="#355BFA" color="white">
        <van-tab title="2019会展情况">
          <div id="row">
            <p id="row1">2019会展举办情况</p>
            <!--<p id ='row2'>来源：汉阳商务局 发布时间：2020-3</p>-->
          </div>
          <el-divider class="el-divider1"></el-divider>
          <div id="HZCY0">
            <p id="GS" v-html="html1"></p>
          </div>
        </van-tab>

        <van-tab title="国博周边酒店">
          <!-- <div id="row">
                  <p id ='row1'>国博周边酒店</p>
                  <p id ='row2'>来源：汉阳发展改革局 发布时间：2020-3</p>
              </div>
              <el-divider class="el-divider1"></el-divider> -->
          <!-- <div id='HZCY0'> -->
          <!-- <p id='JD' v-html='html2'></p> -->
          <div id="Selfform">
            <img
              src="http://121.196.60.135/cdn/%E4%BC%9A%E5%B1%95%E5%9B%BD%E5%8D%9A/IMG_00001.jpeg"
              id="hj"
            />
            <img
              src="http://121.196.60.135/cdn/%E4%BC%9A%E5%B1%95%E5%9B%BD%E5%8D%9A/IMG_00002.jpeg"
              id="hj"
            />
            <img
              src="http://121.196.60.135/cdn/%E4%BC%9A%E5%B1%95%E5%9B%BD%E5%8D%9A/IMG_00003.jpeg"
              id="hj"
            />
            <img
              src="http://121.196.60.135/cdn/%E4%BC%9A%E5%B1%95%E5%9B%BD%E5%8D%9A/IMG_00004.jpeg"
              id="hj"
            />
            <img
              src="http://121.196.60.135/cdn/%E4%BC%9A%E5%B1%95%E5%9B%BD%E5%8D%9A/IMG_00005.jpeg"
              id="hj"
            />
            <img
              src="http://121.196.60.135/cdn/%E4%BC%9A%E5%B1%95%E5%9B%BD%E5%8D%9A/IMG_00006.jpeg"
              id="hj"
            />
            <img
              src="http://121.196.60.135/cdn/%E4%BC%9A%E5%B1%95%E5%9B%BD%E5%8D%9A/IMG_00007.jpeg"
              id="hj"
            />
            <img
              src="http://121.196.60.135/cdn/%E4%BC%9A%E5%B1%95%E5%9B%BD%E5%8D%9A/IMG_00008.jpeg"
              id="hj"
            />
            <img
              src="http://121.196.60.135/cdn/%E4%BC%9A%E5%B1%95%E5%9B%BD%E5%8D%9A/IMG_00009.jpeg"
              id="hj"
            />
            <img
              src="http://121.196.60.135/cdn/%E4%BC%9A%E5%B1%95%E5%9B%BD%E5%8D%9A/IMG_00010.jpeg"
              id="hj"
            />
            <img
              src="http://121.196.60.135/cdn/%E4%BC%9A%E5%B1%95%E5%9B%BD%E5%8D%9A/IMG_00011.jpeg"
              id="hj"
            />
            <img
              src="http://121.196.60.135/cdn/%E4%BC%9A%E5%B1%95%E5%9B%BD%E5%8D%9A/IMG_00012.jpeg"
              id="hj"
            />
            <img
              src="http://121.196.60.135/cdn/%E4%BC%9A%E5%B1%95%E5%9B%BD%E5%8D%9A/IMG_00013.jpeg"
              id="hj"
            />
            <img
              src="http://121.196.60.135/cdn/%E4%BC%9A%E5%B1%95%E5%9B%BD%E5%8D%9A/IMG_00014.jpeg"
              id="hj"
            />
            <img
              src="http://121.196.60.135/cdn/%E4%BC%9A%E5%B1%95%E5%9B%BD%E5%8D%9A/IMG_00015.jpeg"
              id="hj"
            />
          </div>
          <!-- </div> -->
        </van-tab>

        <van-tab title="国际博览中心">
          <div id="HZCY0">
            <iframe
              src="http://www.wniecm.com/index.php?a=lists&catid=24.html"
              width="100%"
              :height="carouselHeight"
              frameborder="0"
              align="center"
              allowfullscreen="true"
              allow="autoplay"
            >
            </iframe>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "HZCY",

  components: {},
  props: {
    msg: String,
  },
  data() {
    return {
      active: 0,
      html1: " ",
      html2: " ",
    };
  },

  beforeMount() {
    this.carouselHeight = window.innerHeight * 0.95 + "px";
    this.load_GS();
    // this.load_JD()
  },

  methods: {
    load_GS() {
      fetch("http://121.196.60.135:1338/data/2019nhzqkgs")
        .then((result) => result.json())
        .then((result) => {
          this.html1 = result.content;
        });
    },
    load_JD() {
      fetch("http://121.196.60.135:1338/data/gbfjjdqk")
        .then((result) => result.json())
        .then((result) => {
          this.html2 = result.content;
        });
    },
  },

  mounted() {
    //增加统计图表
    // this.load_GS(),
    // this.load_JD()
  },
};
</script>

<style scoped src="../css/HZCY.css">
</style>