<template>
  <div id="LQGC">
    <van-tabs v-model="active" background="#355BFA" color="white">
        <van-tab title="发展现状">
          <div id="row">
             <p id ='row1'>汉阳区工程设计产业发展现状</p>
          </div>
          <el-divider class="el-divider1"></el-divider>
          <div id='LQGC0'>
             <p id='ZC' v-html='html1'></p>
          </div>
        </van-tab>
        <van-tab title="发展规划">
          <div id="row">
             <p id ='row1'>汉阳区工程设计产业发展规划</p>
          </div>
          <el-divider class="el-divider1"></el-divider>
          <div id='LQGC0'>
             <p id='ZC' v-html='html2'></p>
          </div>
        </van-tab>         
        <van-tab title="相关政策">   
          <div id="row">
             <p id ='row1'>工程设计建造类企业相关政策</p>
          </div>
          <el-divider class="el-divider1"></el-divider>
          <div id='LQGC0'>
             <p id='ZC' v-html='html3'></p>
          </div>     
        </van-tab>
        <van-tab title="新汉阳造">  
          <div id="HZCY0">
            <iframe src="https://www.bilibili.com/video/BV1ua4y1i7UB" scrolling="yes" width="100%"  :height="carouselHeight" frameborder='0' align='center' allowfullscreen='true'   allow="autoplay"> </iframe>
          </div>        
        </van-tab>
    </van-tabs>
    <!-- <div id='LQGC0'>
        <img src="http://121.196.60.135/cdn/%E8%AE%BE%E8%AE%A1%E7%B1%BB%E4%BC%81%E4%B8%9A/%E5%9F%8E%E5%BB%BA%E8%AE%BE%E8%AE%A1%E9%99%A2.png" id='hj'/>
        <P style="text-align: center;">城建设计院</P>
        <img src="http://121.196.60.135/cdn/设计类企业/地质工程勘察院.png" id='hj'/>
        <P style="text-align: center;">地质工程勘察院</P>
        <img src="http://121.196.60.135/cdn/设计类企业/湖北交投实业.png" id='hj'/>
        <P style="text-align: center;">湖北交投实业</P>
        <img src="http://121.196.60.135/cdn/设计类企业/湖北省交通规划设计院.png" id='hj'/>
        <P style="text-align: center;">湖北省交通规划设计院</P>
        <img src="http://121.196.60.135/cdn/设计类企业/中交二公院.png" id='hj'/>
        <P style="text-align: center;">中交二公院</P>
        <img src="http://121.196.60.135/cdn/设计类企业/中南设计集团.png" id='hj'/>
        <P style="text-align: center;">中南设计集团</P>
        <img src="http://121.196.60.135/cdn/设计类企业/中铁大桥局集团.png" id='hj'/>
        <P style="text-align: center;">中铁大桥局集团</P>
        <img src="http://121.196.60.135/cdn/设计类企业/中铁大桥勘测设计院集团有限公司.png" id='hj'/>
        <P style="text-align: center;">中铁大桥勘测设计院集团有限公司</P>
    </div> -->
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: "LQGC",
    data() {
      return {
        active:0,
        html1:'',
        html2:'',
        html3:''
      };
    },
   beforeMount() {
      this.carouselHeight = (window.innerHeight)*0.95 + 'px';
      this.load_XZ()
      this.load_GH()    
      this.load_ZC()
    },
    mounted(){
    },
    methods: {
      load_XZ(){
        fetch("http://121.196.60.135:1338/data/hyqgcsjcyfzxz")
          .then(result => result.json())
          .then(result => {            
            this.html1=result.content
          })
      },
      load_GH(){
        fetch("http://121.196.60.135:1338/data/hyqgcsjcyfzgh")
          .then(result => result.json())
          .then(result => {            
            this.html2=result.content
          })
      },
      load_ZC(){
        fetch("http://121.196.60.135:1338/data/gcsjjzlqyxgzc")
          .then(result => result.json())
          .then(result => {            
            this.html3=result.content
          })
      }
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
 #LQGC0{
    margin-top: 3%;
    padding: 4%;
 }
 #hj{
  display: inline-block;
  height: auto;
  max-width: 100%;
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