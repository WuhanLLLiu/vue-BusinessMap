<template>
  <div id="WHCYSC" class='layout'>
    <el-row class='row'>
        <el-button class="button"  @click='ZC()'>
            <el-card :body-style="{ margin:'5px',padding: '0px' }">
                <div style="padding: 14px 4px 14px 4px;">
                    <span class='title'>文旅产业招商计划</span>
                    <!--<div class="bottom clearfix">
                        <span class="details">来源：汉阳发展改革局 发布于：2019-3</span>
                    </div>-->
                </div>
            </el-card>
        </el-button>
     </el-row>
    <el-row class='row'>
        <el-button class="button"  @click='ZC2()'>
            <el-card :body-style="{ margin:'5px',padding: '0px' }">
                <div style="padding: 14px 4px 14px 4px;">
                    <span class="title">关于支持小微企业进入规模服务企业的意见</span>
                    <!--<div class="bottom clearfix">
                        <span class="details">来源：汉阳发展改革局 发布于：2019-3</span>
                    </div>-->
                </div>
            </el-card>
        </el-button>
     </el-row>
    <el-row class='row'>
        <el-button class="button"  @click='ZC3()'>
            <el-card :body-style="{ margin:'5px',padding: '0px' }">
                <div style="padding: 14px 4px 14px 4px;">
                    <span class="title">汉阳区现代公共文化服务体系建设三年行动计划</span>
                    <!--<div class="bottom clearfix">
                        <span class="details">来源：武汉市汉阳区人民政府 发布于：2019-3-30</span>
                    </div>-->
                </div>
            </el-card>
        </el-button>
     </el-row>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: "WHCYSC",
    data() {
      return {
        // currentDate: new Date()
      };
    },
    methods: {
      ZC(){
        this.$router.push({path:'/WLCY'})
      },
      ZC2(){
        this.$router.push({path:'/WHCY2'})
      },
      ZC3(){
        this.$router.push({path:'/WHCY3'})
      },
    }
  }
</script>

<!-- 限定局部有效的样式 -->
<style scoped>
  .details {
    font-size: 13px;
    color: #999;    
  }
  .title {
    font-size: 32px; 
    font-weight:bold;
    color: #333;
    /*line-height: 20px;*/
    /*padding-bottom: 20px;*/
  }
  .row {
      margin:20px;
  }
  .bottom {
    margin-top: 30px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
    border-style:none;
    text-align: left;
    width: 710px;
  }

  /*.image {
    width: 100%;
    display: block;
  }*/
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>