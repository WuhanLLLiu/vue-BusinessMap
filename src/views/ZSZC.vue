<template>
  <div id="ZSZC" class='layout'>
    <el-row id='row1'>
        <el-card :body-style="{ padding: '0px' }">
            <div style="padding: 14px;">
                <span class='title'>汉阳区促进楼宇经济发展奖励办法（试行）</span>
                <div class="bottom clearfix">
                    <span class="details">来源于：商务局    发布于：2020-4-21 11:28:28</span>
                    <!--<time class="time">{{ currentDate }}</time>-->
                    <el-button type="text" class="button"  @click="ZC()" >政策详情</el-button>
                </div>
            </div>
        </el-card>
     </el-row>
    <el-row id='row2'>
        <el-card :body-style="{ padding: '0px' }">
            <div style="padding: 14px;">
                <span class="title">汉阳区大健康产业扶持政策</span>
                <div class="bottom clearfix">
                    <span class="details">来源于：商务局    发布于：2020-4-21 11:28:28</span>
                    <!--<time class="time">{{ currentDate }}</time>-->
                    <el-button type="text" class="button"  @click="ZC2()" >政策详情</el-button>
                </div>
            </div>
        </el-card>
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

      },
      ZC2(){

      },
    }
  }
</script>

<!-- 限定局部有效的样式 -->
<style scoped>
  /*.time {
    font-size: 13px;
    color: #999;
  }*/
  .details {
    font-size: 13px;
    color: #999;    
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
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