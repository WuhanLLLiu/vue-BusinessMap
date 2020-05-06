<template>
  <div id="JRCY">
    <van-tabs v-model="active" background="#355BFA" color="white">
        <van-tab title="产业概况">
        <div id='Selfform'>
            <img src="http://121.196.60.135/cdn/%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%8C%BA%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A%E5%8F%91%E5%B1%95%E6%83%85%E5%86%B5/img1.png" id='hj'/>
            <img src="http://121.196.60.135/cdn/%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%8C%BA%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A%E5%8F%91%E5%B1%95%E6%83%85%E5%86%B5/img2.png" id='hj'/>
            <img src="http://121.196.60.135/cdn/%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%8C%BA%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A%E5%8F%91%E5%B1%95%E6%83%85%E5%86%B5/img3.png" id='hj'/>
            <img src="http://121.196.60.135/cdn/%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%8C%BA%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A%E5%8F%91%E5%B1%95%E6%83%85%E5%86%B5/img4.png" id='hj'/>    
            <img src="http://121.196.60.135/cdn/%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%8C%BA%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A%E5%8F%91%E5%B1%95%E6%83%85%E5%86%B5/img5.png" id='hj'/>
            <img src="http://121.196.60.135/cdn/%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%8C%BA%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A%E5%8F%91%E5%B1%95%E6%83%85%E5%86%B5/img6.png" id='hj'/>    
            <img src="http://121.196.60.135/cdn/%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%8C%BA%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A%E5%8F%91%E5%B1%95%E6%83%85%E5%86%B5/img7.png" id='hj'/>    
            <img src="http://121.196.60.135/cdn/%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%8C%BA%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A%E5%8F%91%E5%B1%95%E6%83%85%E5%86%B5/img8.png" id='hj'/>
            <img src="http://121.196.60.135/cdn/%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A/%E6%B1%89%E9%98%B3%E5%8C%BA%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A%E5%8F%91%E5%B1%95%E6%83%85%E5%86%B5/img9.png" id='hj'/>     
        </div>
        </van-tab>
        <!-- <van-tab title="发展规划">
          <div id='JRCY0'>
              <p id='JR' v-html='html3'></p>
          </div>
        </van-tab>   -->
        <van-tab title="企业动态">
              <img src="http://121.196.60.135/cdn/%E9%87%91%E8%9E%8D%E4%BA%A7%E4%B8%9A/%E6%94%BF%E9%93%B6%E4%BC%81%E5%AF%B9%E6%8E%A5%E4%BC%9A/%E6%94%BF%E9%93%B6%E4%BC%81%E5%AF%B9%E6%8E%A5%E4%BC%9A_01.png" id='hj'/>
        </van-tab>         
        <van-tab title="产品介绍">
          <el-row class='row'>
              <el-button class="button"  @click='CP()'>
                  <el-card :body-style="{ margin:'5px',padding: '0px' }">
                      <div style="padding: 14px 4px 14px 4px;">
                          <span class='title'>湖北银行产品介绍</span>
                      </div>
                  </el-card>
              </el-button>
          </el-row>
          <el-row class='row'>
              <el-button class="button"  @click='CP2()'>
                  <el-card :body-style="{ margin:'5px',padding: '0px' }">
                      <div style="padding: 14px 4px 14px 4px;">
                          <span class="title">平安产险武汉市汉阳支公司产品介绍</span>
                      </div>
                  </el-card>
              </el-button>
          </el-row>
          <el-row class='row'>
              <el-button class="button"  @click='CP3()'>
                  <el-card :body-style="{ margin:'5px',padding: '0px' }">
                      <div style="padding: 14px 4px 14px 4px;">
                          <span class="title">中国工商银行武汉汉阳支行产品介绍</span>
                      </div>
                  </el-card>
              </el-button>
          </el-row>
        </van-tab>   
    </van-tabs>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: "JRCY",
    data() {
      return {
        active: 0,
        html3:""
      };
    },
    mounted(){
      this.load_JRCY()
    },
    methods: {
      load_JRCY(){
        fetch("http://121.196.60.135:1338/data/jrcy2020nqzfgzbgqddzymbrw")
          .then(result => result.json())
          .then(result => {            
            this.html3=result.content
          })
      },
      CP(){
        this.$router.push({path:'/JRCP'})
      },
      CP2(){
        this.$router.push({path:'/JRCP2'})
      },
      CP3(){
        this.$router.push({path:'/JRCP3'})
      },
    }
  }
</script>

<!-- 限定局部有效的样式 -->
<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
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
  .row {
      margin:20px;
  }
    .button {
    padding: 0;
    float: right;
    border-style:none;
    text-align: left;
    width: 710px;
  }
    .title {
    font-size: 32px; 
    font-weight:bold;
    color: #333;
    /*line-height: 20px;*/
    /*padding-bottom: 20px;*/
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
 #JRCY0{
    margin-top: 3%;
    padding: 4%;
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
}
</style>