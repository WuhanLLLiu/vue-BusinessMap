<template>
  <el-container direction="vertical" class="bg">
    <el-header type="flex" justify="end">
      <el-col :span="3">
        <el-image
          :src="images[5]"
          fit="fill"
          @click="RouteFWZY"
        ></el-image>
        <span>服务指引</span>
      </el-col>
      <el-col :span="3">
        <el-image
          :src="images[6]"
          fit="fill"
          @click="RouteHYC"
        ></el-image>
        <span>欢迎辞</span>
      </el-col>
    </el-header>
    <el-main>
      <el-row type="flex" justify="center" class="logo">
        <el-col :span="24">
          <el-image
            :src="logo"
            fit="fill"
          ></el-image>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="8">
          <el-image
            :src="images[0]"
            fit="fill"
            @click="RouteDT"
          ></el-image>
        </el-col>
        <el-col :span="8">
          <el-image
            :src="images[1]"
            fit="fill"
            @click="RouteLY"
          ></el-image>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="8" style="al">
          <el-image
            :src="images[2]"
            fit="fill"
            @click="RouteZSZC"
          ></el-image>
        </el-col>
        <el-col :span="8">
          <el-image
            :src="images[3]"
            fit="fill"
            @click="RouteZSTJ"
          ></el-image>
        </el-col>
        <el-col :span="8">
          <el-image
            :src="images[4]"
            fit="fill"
            @click="RouteZDCY"
          ></el-image>
        </el-col>
      </el-row>
    </el-main>
    <el-footer class="text">
      <span style="padding-right: 15px">{{ copyrightText }} </span>
      <span>{{ supportText }} </span>
    </el-footer>
  </el-container>
</template>

<script>
import Vue from "vue";

// 微信分享拦截，转用SDK指定分享信息 import wx from 'weixin-js-sdk';

export default {
  name: "SY",

  components: {},

  data() {
    return {
      logo: "http://www.hyzsydt.top/cdn/ui/logo.png",
      images: [
        "http://www.hyzsydt.top/cdn/ui/土地信息.png",
        "http://www.hyzsydt.top/cdn/ui/楼宇信息.png",
        "http://www.hyzsydt.top/cdn/ui/招商政策.png",
        "http://www.hyzsydt.top/cdn/ui/招商推介.png",
        "http://www.hyzsydt.top/cdn/ui/重点产业.png",
        "http://www.hyzsydt.top/cdn/ui/新手引导.png",
        "http://www.hyzsydt.top/cdn/ui/欢迎页.png",
      ],
      isFull: false,
      totalData: {
        cure: 16,
        confirm: 17,
        new: 0,
      },
      copyrightText: "版权所有©汉阳区商务局",
      supportText: "技术支持:武汉大学测绘学院",
      outerVisible: false,
      innerVisible_0: false,
      innerVisible_1: false,
      modalvisible: false,
      alertText: "",
      fullscreen1: true,
    };
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
    },
    RouteHYC() {
      this.$router.push({ path: "/HYC" });
    },
    RouteFWZY() {
      this.$router.push({ path: "/FWZY" });
    },
  },

  mounted() {},
};
</script>

<style scoped src="../css/SY.css">