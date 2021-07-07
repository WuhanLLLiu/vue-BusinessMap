<template>
  <div id="WHCYSC" class='layout'>
    <!-- <van-tabs v-model="active" background="#355BFA" color="white"> -->
        <!-- <van-tab title="产业规划">
        <div id='Selfform'>
            <img src="http://121.196.60.135/cdn/%E6%96%87%E5%8C%96%E5%88%9B%E6%84%8F/%E6%B1%89%E9%98%B3%E5%8C%BA%E7%8E%B0%E4%BB%A3%E5%85%AC%E5%85%B1%E6%96%87%E5%8C%96%E6%9C%8D%E5%8A%A1%E4%BD%93%E7%B3%BB%E5%BB%BA%E8%AE%BE%E4%B8%89%E5%B9%B4%E8%A1%8C%E5%8A%A8%E8%AE%A1%E5%88%92/IMG_00001.jpg" id='hj'/>
            <img src="http://121.196.60.135/cdn/%E6%96%87%E5%8C%96%E5%88%9B%E6%84%8F/%E6%B1%89%E9%98%B3%E5%8C%BA%E7%8E%B0%E4%BB%A3%E5%85%AC%E5%85%B1%E6%96%87%E5%8C%96%E6%9C%8D%E5%8A%A1%E4%BD%93%E7%B3%BB%E5%BB%BA%E8%AE%BE%E4%B8%89%E5%B9%B4%E8%A1%8C%E5%8A%A8%E8%AE%A1%E5%88%92/IMG_00002.jpg" id='hj'/>
            <img src="http://121.196.60.135/cdn/%E6%96%87%E5%8C%96%E5%88%9B%E6%84%8F/%E6%B1%89%E9%98%B3%E5%8C%BA%E7%8E%B0%E4%BB%A3%E5%85%AC%E5%85%B1%E6%96%87%E5%8C%96%E6%9C%8D%E5%8A%A1%E4%BD%93%E7%B3%BB%E5%BB%BA%E8%AE%BE%E4%B8%89%E5%B9%B4%E8%A1%8C%E5%8A%A8%E8%AE%A1%E5%88%92/IMG_00003.jpg" id='hj'/>
            <img src="http://121.196.60.135/cdn/%E6%96%87%E5%8C%96%E5%88%9B%E6%84%8F/%E6%B1%89%E9%98%B3%E5%8C%BA%E7%8E%B0%E4%BB%A3%E5%85%AC%E5%85%B1%E6%96%87%E5%8C%96%E6%9C%8D%E5%8A%A1%E4%BD%93%E7%B3%BB%E5%BB%BA%E8%AE%BE%E4%B8%89%E5%B9%B4%E8%A1%8C%E5%8A%A8%E8%AE%A1%E5%88%92/IMG_00004.jpg" id='hj'/>
            <img src="http://121.196.60.135/cdn/%E6%96%87%E5%8C%96%E5%88%9B%E6%84%8F/%E6%B1%89%E9%98%B3%E5%8C%BA%E7%8E%B0%E4%BB%A3%E5%85%AC%E5%85%B1%E6%96%87%E5%8C%96%E6%9C%8D%E5%8A%A1%E4%BD%93%E7%B3%BB%E5%BB%BA%E8%AE%BE%E4%B8%89%E5%B9%B4%E8%A1%8C%E5%8A%A8%E8%AE%A1%E5%88%92/IMG_00005.jpg" id='hj'/>
            <img src="http://121.196.60.135/cdn/%E6%96%87%E5%8C%96%E5%88%9B%E6%84%8F/%E6%B1%89%E9%98%B3%E5%8C%BA%E7%8E%B0%E4%BB%A3%E5%85%AC%E5%85%B1%E6%96%87%E5%8C%96%E6%9C%8D%E5%8A%A1%E4%BD%93%E7%B3%BB%E5%BB%BA%E8%AE%BE%E4%B8%89%E5%B9%B4%E8%A1%8C%E5%8A%A8%E8%AE%A1%E5%88%92/IMG_00006.jpg" id='hj'/>
            <img src="http://121.196.60.135/cdn/%E6%96%87%E5%8C%96%E5%88%9B%E6%84%8F/%E6%B1%89%E9%98%B3%E5%8C%BA%E7%8E%B0%E4%BB%A3%E5%85%AC%E5%85%B1%E6%96%87%E5%8C%96%E6%9C%8D%E5%8A%A1%E4%BD%93%E7%B3%BB%E5%BB%BA%E8%AE%BE%E4%B8%89%E5%B9%B4%E8%A1%8C%E5%8A%A8%E8%AE%A1%E5%88%92/IMG_00007.jpg" id='hj'/>
            <img src="http://121.196.60.135/cdn/%E6%96%87%E5%8C%96%E5%88%9B%E6%84%8F/%E6%B1%89%E9%98%B3%E5%8C%BA%E7%8E%B0%E4%BB%A3%E5%85%AC%E5%85%B1%E6%96%87%E5%8C%96%E6%9C%8D%E5%8A%A1%E4%BD%93%E7%B3%BB%E5%BB%BA%E8%AE%BE%E4%B8%89%E5%B9%B4%E8%A1%8C%E5%8A%A8%E8%AE%A1%E5%88%92/IMG_00008.jpg" id='hj'/>
            <img src="http://121.196.60.135/cdn/%E6%96%87%E5%8C%96%E5%88%9B%E6%84%8F/%E6%B1%89%E9%98%B3%E5%8C%BA%E7%8E%B0%E4%BB%A3%E5%85%AC%E5%85%B1%E6%96%87%E5%8C%96%E6%9C%8D%E5%8A%A1%E4%BD%93%E7%B3%BB%E5%BB%BA%E8%AE%BE%E4%B8%89%E5%B9%B4%E8%A1%8C%E5%8A%A8%E8%AE%A1%E5%88%92/IMG_00009.jpg" id='hj'/>
            <img src="http://121.196.60.135/cdn/%E6%96%87%E5%8C%96%E5%88%9B%E6%84%8F/%E6%B1%89%E9%98%B3%E5%8C%BA%E7%8E%B0%E4%BB%A3%E5%85%AC%E5%85%B1%E6%96%87%E5%8C%96%E6%9C%8D%E5%8A%A1%E4%BD%93%E7%B3%BB%E5%BB%BA%E8%AE%BE%E4%B8%89%E5%B9%B4%E8%A1%8C%E5%8A%A8%E8%AE%A1%E5%88%92/IMG_00010.jpg" id='hj'/>
        </div>
        </van-tab> -->
        <!-- <van-tab title="相关政策">          -->
          <el-row class='row'>
              <el-button class="button"  @click='ZC()'>
                  <el-card :body-style="{ margin:'5px',padding: '0px' }">
                      <div style="padding: 14px 4px 14px 4px;">
                          <span class='title'>文旅产业招商计划</span>
                      </div>
                  </el-card>
              </el-button>
          </el-row>
          <el-row class='row'>
              <el-button class="button"  @click='ZC2()'>
                  <el-card :body-style="{ margin:'5px',padding: '0px' }">
                      <div style="padding: 14px 4px 14px 4px;">
                          <span class="title">关于支持小微企业进入规模服务企业的意见</span>
                      </div>
                  </el-card>
              </el-button>
          </el-row>
          <el-row class='row'>
              <el-button class="button"  @click='ZC3()'>
                  <el-card :body-style="{ margin:'5px',padding: '0px' }">
                      <div style="padding: 14px 4px 14px 4px;">
                          <span class="title">汉阳区文化产业政策</span>
                      </div>
                  </el-card>
              </el-button>
          </el-row>
          <el-row class='row'>
              <el-button class="button"  @click='ZC4()'>
                  <el-card :body-style="{ margin:'5px',padding: '0px' }">
                      <div style="padding: 14px 4px 14px 4px;">
                          <span class="title">汉阳区大力推进创新创业促进产业发展等政策</span>
                      </div>
                  </el-card>
              </el-button>
          </el-row>
        <!-- </van-tab>
    </van-tabs> -->
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: "WHCYSC",
    data() {
      return {
        // currentDate: new Date()
        active:0
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
      ZC4(){
        this.$router.push({path:'/WHCY4'})
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
  #Selfform{
  margin-top: 3%;
  padding: 5%;
  font-size:36px;
  line-height:58px;
  font-family:PingFang SC;
  }
  #hj{
    display: inline-block;
    height: auto;
    max-width: 100%;
  }
  
.van-tabs--line .van-tabs__wrap{
    height: 80px;
}
.van-tab__text {
    position: relative;
    color: #fff;
    font-size: 34px;
}
.van-tab{
    padding-top: 2%;
    line-height: 150%
}
</style>