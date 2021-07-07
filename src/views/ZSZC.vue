<template>
  <!-- <div id="ZSZC" class='layout'>
    <el-row class='row'>
        <el-button class="button"  @click='ZC()'>
            <el-card :body-style="{ margin:'5px',padding: '0px' }">
                <div style="padding: 14px;">
                    <span class='title'>汉阳区促进楼宇经济发展奖励办法（试行）</span>
                    <div class="bottom clearfix">
                        <span class="details">来源：汉阳发展改革局 发布于：2019-3</span>
                    </div>
                </div>
            </el-card>
        </el-button>
     </el-row>
    <el-row class='row'>
        <el-button class="button"  @click='ZC2()'>
            <el-card :body-style="{ margin:'5px',padding: '0px' }">
                <div style="padding: 14px;">
                    <span class="title">汉阳区大健康产业扶持政策</span>
                    <div class="bottom clearfix">
                        <span class="details">来源：汉阳发展改革局 发布于：2019-3</span>
                    </div>
                </div>
            </el-card>
        </el-button>
     </el-row>
    <el-row class='row'>
        <el-button class="button"  @click='ZC3()'>
            <el-card :body-style="{ margin:'5px',padding: '0px' }">
                <div style="padding: 14px;">
                    <span class="title">阳政规[2019]1号营商留商奖励政策</span>
                    <div class="bottom clearfix">
                        <span class="details">来源：武汉市汉阳区人民政府 发布于：2019-3-30</span>
                    </div>
                </div>
            </el-card>
        </el-button>
     </el-row>
    <el-row class='row'>
        <el-button class="button"  @click='ZC4()'>
            <el-card :body-style="{ margin:'5px',padding: '0px' }">
                <div style="padding: 14px;">
                    <span class="title">人才政策</span>
                    <div class="bottom clearfix">
                        <span class="details">来源：武汉市汉阳区人民政府 发布于：2019-3-30</span>
                    </div>
                </div>
            </el-card>
        </el-button>
     </el-row>
  </div> -->
  <el-container class="bg">
    <el-main>
      <el-row>
        <el-col :span="24">
          <el-image
            style="width: 100%; height: 100%"
            src="http://121.196.60.135/img/营商留商奖励政策.png"
            fit="scale-down"
            @click="ZC3()"
          ></el-image>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-image
            style="width: 100%; height: 100%"
            src="http://121.196.60.135/img/人才政策.png"
            fit="scale-down"
            @click="ZC4()"
          ></el-image>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-image
            style="width: 100%; height: 100%"
            src="http://121.196.60.135/img/大健康产业扶持政策.png"
            fit="scale-down"
            @click="ZC2()"
          ></el-image>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-image
            style="width: 100%; height: 100%"
            src="http://121.196.60.135/img/促进楼宇经济发展奖励办法.png"
            fit="scale-down"
            @click="ZC()"
          ></el-image>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
        <img src='./../assets/基金产业.png' style="width: 100%; height: 100%" @click="ZC5()"/>
          <!-- <el-image
            style="width: 100%; height: 100%"
            src= imgs
            fit="scale-down"
            @click="ZC5()"
          ></el-image> -->
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Vue from "vue";

export default {
  name: "ZSZC",
  data() {
    return {
      // currentDate: new Date()
      imgs:'./../assets/基金产业.png',
    };
  },
  methods: {
    ZC() {
      this.$router.push({ path: "/ZCXQ" });
    },
    ZC2() {
      this.$router.push({ path: "/ZCXQ2" });
    },
    ZC3() {
      this.$router.push({ path: "/ZCXQ3" });
    },
    ZC4() {
      this.$router.push({ path: "/ZCXQ4" });
    },
    ZC5() {
      this.$router.push({ path: "/ZCXQ5" });
    },
  },
};
</script>

<!-- 限定局部有效的样式 -->
<style scoped src="../css/ZSZC.css">
</style>