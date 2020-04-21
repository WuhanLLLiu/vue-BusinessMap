<template>
  <div id="ZSZC" class='layout'>
    <el-row class='row'>
        <el-button class="button"  @click='ZC()'>
            <el-card :body-style="{ margin:'5px',padding: '0px' }">
                <div style="padding: 14px;">
                    <span class='title'>汉阳区促进楼宇经济发展奖励办法（试行）</span>
                    <div class="bottom clearfix">
                        <span class="details">来源：汉阳区商务局 发布于：2020-4</span>
                        <!--<time class="time">{{ currentDate }}</time>-->
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
                        <span class="details">来源：汉阳区商务局 发布于：2020-4</span>
                        <!--<time class="time">{{ currentDate }}</time>-->
                    </div>
                </div>
            </el-card>
        </el-button>
     </el-row>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        // currentDate: new Date()
      };
    },
    methods: {
      ZC(){
        this.$router.push({path:'/ZCXQ'})
      },
      ZC2(){
        this.$router.push({path:'/ZCXQ2'})
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