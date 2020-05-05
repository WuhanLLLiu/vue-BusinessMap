<template>
  <div id="QCHSC">
    <van-tabs v-model="active" background="#355BFA" color="white">
        <van-tab title="市场情况">
          <div id="row">
             <p id ='row1'>汉阳区汽车后市场情况</p>
          </div>
          <el-divider class="el-divider1"></el-divider>
          <div id='QCHSC0'>
             <p id='ZC' v-html='html1'></p>
          </div>
        </van-tab>
        <van-tab title="招商计划与政策">
          <div id="row">
             <p id ='row1'>汉阳区汽车后市场产业招商计划和措施</p>
          </div>
          <el-divider class="el-divider1"></el-divider>
          <div id='QCHSC0'>
             <p id='ZC' v-html='html2'></p>
          </div>
        </van-tab>         
    </van-tabs>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: "QCHSC",
    data() {
      return {
        active:0,
        html1:'',
        html2:''
      };
    },
   beforeMount() {
      this.load_SCQK()
      this.load_JHZC()    
    },
    mounted(){
    },
    methods: {
      load_SCQK(){
        fetch("http://121.196.60.135:1338/data/hyqqchshqk")
          .then(result => result.json())
          .then(result => {            
            this.html1=result.content
          })
      },
      load_JHZC(){
        fetch("http://121.196.60.135:1338/data/hyqqchsccyzsjhhcs")
          .then(result => result.json())
          .then(result => {            
            this.html2=result.content
          })
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
 #QCHSC0{
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