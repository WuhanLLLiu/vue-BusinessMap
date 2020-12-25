<template>
  <div id="JKCY" class="layout">
    <div id='top'>
        <van-tabs v-model="active" background="#355BFA" color="white">
            <van-tab title="健康产业规划">
              <!-- <div id="row">
                  <p id ='row1'>健康产业规划</p>
              </div>
              <el-divider class="el-divider1"></el-divider> -->
              <div id='JKCY0'>
                <!-- <p id='GH' v-html='html1'></p> -->
                <img src="http://121.196.60.135/cdn/%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92_01.png" id='hj'/>
                <img src="http://121.196.60.135/cdn/%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92_02.png" id='hj'/>
                <img src="http://121.196.60.135/cdn/%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92_03.png" id='hj'/>
                <img src="http://121.196.60.135/cdn/%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92_04.png" id='hj'/>    
                <img src="http://121.196.60.135/cdn/%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92_05.png" id='hj'/>
                <img src="http://121.196.60.135/cdn/%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92_06.png" id='hj'/>    
                <img src="http://121.196.60.135/cdn/%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92_07.png" id='hj'/>    
                <img src="http://121.196.60.135/cdn/%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92_08.png" id='hj'/>
                <img src="http://121.196.60.135/cdn/%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92_09.png" id='hj'/>  
                <img src="http://121.196.60.135/cdn/%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92_10.png" id='hj'/>
                <img src="http://121.196.60.135/cdn/%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92_11.png" id='hj'/>
                <img src="http://121.196.60.135/cdn/%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92_12.png" id='hj'/>
                <img src="http://121.196.60.135/cdn/%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92_13.png" id='hj'/>    
                <img src="http://121.196.60.135/cdn/%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92_14.png" id='hj'/>
                <img src="http://121.196.60.135/cdn/%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92_15.png" id='hj'/>    
                <img src="http://121.196.60.135/cdn/%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92/%E6%B1%89%E9%98%B3%E5%A4%A7%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E8%A7%84%E5%88%92_16.png" id='hj'/>    
              </div>
            </van-tab>
            <van-tab title="健康产业政策">
            <!--<van-tab title="健康产业政策" to="/djkcyzc">-->
              <!--<router-view></router-view>-->
              <div id="row">
                  <p id ='row1' style="text-align:center;">汉阳区大健康产业扶持政策</p>
              </div>
              <el-divider class="el-divider1"></el-divider>
              <div id='JKCY0'>
                <p id='ZC' v-html='html2'></p>
              </div>
            </van-tab>
            <van-tab title="考察路线">
              <div id="ZDQY">
                <!-- <el-row class='row'>
                    <el-button class="button"  @click='JKCYZSQK()'>
                        <el-card :body-style="{ margin:'5px',padding: '0px' }">
                            <div style="padding: 14px;">
                                <span class='title'>汉阳区大健康产业招商情况</span>
                            </div>
                        </el-card>
                    </el-button>
                </el-row> -->
                <!-- <el-row class='row'>
                    <el-button class="button"  @click='DH()'>
                        <el-card :body-style="{ margin:'5px',padding: '0px' }">
                            <div style="padding: 14px;">
                                <span class="title">汉阳区“大湖+”样板湖</span>
                            </div>
                        </el-card>
                    </el-button>
                </el-row>
                <el-row class='row'>
                    <el-button class="button"  @click='LYH()'>
                        <el-card :body-style="{ margin:'5px',padding: '0px' }">
                            <div style="padding: 14px;">
                                <span class="title">龙阳湖健康谷招商手册</span>
                            </div>
                        </el-card>
                    </el-button>
                </el-row> -->
                <!-- <el-row class='row'>
                    <el-button class="button"  @click='JZTJKC()'>
                        <el-card :body-style="{ margin:'5px',padding: '0px' }">
                            <div style="padding: 14px;">
                                <span class="title">九州通健康城</span>
                                <div class="bottom clearfix">
                                    <span class="details">来源：汉阳区商务局 发布于：2020-1</span>
                                </div>
                            </div>
                        </el-card>
                    </el-button>
                </el-row> -->
                <el-row class='row'>
                    <el-button class="button"  @click='KCXL1()'>
                        <el-card :body-style="{ margin:'5px',padding: '0px' }">
                            <div style="padding: 14px;">
                                <span class="title">考察线路一</span>
                            </div>
                        </el-card>
                    </el-button>
                </el-row>
                <el-row class='row'>
                    <el-button class="button"  @click='KCXL2()'>
                        <el-card :body-style="{ margin:'5px',padding: '0px' }">
                            <div style="padding: 14px;">
                                <span class="title">考察线路二</span>
                            </div>
                        </el-card>
                    </el-button>
                </el-row>
              </div>           
            </van-tab>
        </van-tabs>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  export default {
    name: "JKCY",

    components: {

    },

    data() {
      return {
          active: 0,
          html1:" ",
          html2:" ",
          // html3:" ",
      };
    },
   
   beforeMount() {
      this.load_ZC()
    //   this.load_GH()
    },

    methods: {
      // load_GH(){
      //   fetch("http://121.196.60.135:1338/data/jkcygh")
      //     .then(result => result.json())
      //     .then(result => {            
      //       this.html1=result.content
      //     })
      // },
      load_ZC(){
        fetch("http://121.196.60.135:1338/data/djkcyzc")
          .then(result => result.json())
          .then(result => {            
            this.html2=result.content
          })
      },
      JKCYQY(){
        this.$router.push({path:'/JKCYQY'})
      },
      DH(){
        this.$router.push({path:'/DH'})
      },
      LYH(){
        this.$router.push({path:'/LYH'})
      },
      QCYD(){
        this.$router.push({path:'/QCYD'})
      },
      JKCYZSQK(){
        this.$router.push({path:'/JKCYZSQK'})
      },
      JZTJKC(){
        this.$router.push({path:'/JZTJKC'})
      },
      KCXL1(){
        this.$router.push({path:'/KCXL'})
      },
      KCXL2(){
        this.$router.push({path:'/KCXL2'})
      }
    },

    mounted() {
    }
  };
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
#row{
 padding: 4%;
}
#row1{
  padding: 1%;
  font-size:48px;
  font-family:PingFang SC;
  font-weight:900;
  color:rgba(51,51,51,1);
  line-height:64px;
}

#row2{
  font-size:35px;
  font-family:PingFang SC;
  font-weight: lighter;
  color:rgba(51,51,51,1);
  opacity:0.5;
}
#Selfform{
  margin-top: 3%;
  padding: 5%;
  font-size:35px;
  line-height:50px;
  font-family:PingFang SC;
}
#title{
  font-size:35px;
  font-weight: bolder;
  font-family:PingFang SC;
  color: #000;
}
#hj{
  display: inline-block;
  height: auto;
  max-width: 100%;
}
#SM{
    text-align: center;
    font-size:34px;
    font-weight:normal
}
#JKCY0{
    margin-top: 3%;
    padding: 4%;
}
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
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<style>
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