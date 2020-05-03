<template>
  <div id="LQGC">
    <div id="row">
        <p id ='row1'>设计类企业</p>
        <!--<p id ='row2'>来源：汉阳发展改革局 发布时间：2019-3</p>-->
    </div>
    <el-divider class="el-divider1"></el-divider>
    <div id='LQGC0'>
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
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: "LQGC",
    data() {
      return {
      };
    },
    mounted(){
    },
    methods: {
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