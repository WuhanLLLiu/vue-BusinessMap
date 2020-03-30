<template>
    <div id="info">
        <el-row id="row1" >
                <!--{{item.address}} {{item.risk}}-->
                <span>江夏第四中学</span>
                <span class="risk-level-3">高等级</span>
        </el-row>
            <el-divider></el-divider>
        <el-row id="row2">
            <span>
                3公里内累计确诊：
            </span>
            <span id="num" style="color:red">
                558
            </span>
            <span>
                人
            </span>
        </el-row>
        <el-row id="row3">
                您当前附近范围疫情风险较高，请注意防护。
        </el-row>
            <el-divider></el-divider>
    </div>
</template>
 
 

<script>
import Vue from 'vue';
import { MP } from './map.js'
export default {
  name: 'info',

  data() {
    return{
        item:{
          'address':Vue.address||0
        }
    }
  },
  methods: {
     update(){
          console.log('1'+Vue.address)
          this.$set(this.item,'address',Vue.address)
      }
  },
  mounted () {
      this.update()
  },
}
</script>

<!-- 限定局部有效的样式 -->
<style scoped>
/* @import "../assets/common/style.css"; */

#info {
  bottom: 0%;
  width: 100%;
  height: 25%;
  position: fixed;
  z-index: 2;
  background: #f4f4f4;
}
#row1 {
  opacity: 100%;
  width: 100%;
  left: 1%;
  padding: 1%;
  padding-top: 3%;
  font-size: 1em;
  font-family: "微软雅黑";
  font: bolder;
}

#row2 {
  opacity: 100%;
  width: 100%;
  left: 1%;
  display: table;
  padding: 1%;
  font-family: "黑体";
  font: bolder;
  padding-bottom: 2%;
  font-size: 1em;
}
#row3 {
  font-size: 0.9em;
  padding: 6px 20px;
  margin: 0 10px;
  display: inline-block;
  border-radius: 4px;
  background: #cfe0ff;
  border: 1px solid #004acc;
}

.risk-level-1 {
  background: #94e392;
  display: inline-block;
  color: #333333;
  border-radius: 15px;
  padding: 3px 15px;
  font-size: 14px;
  margin: 0 10px 0 10px;
}
.risk-level-2 {
  background: #ffb502;
  display: inline-block;
  color: #333333;
  border-radius: 15px;
  padding: 3px 15px;
  font-size: 14px;
  margin: 0 10px 0 10px;
}
.risk-level-3 {
  background: #db1717;
  display: inline-block;
  color: #ffffff;
  border-radius: 15px;
  padding: 3px 15px;
  font-size: 14px;
  margin: 0 10px 0 10px;
}
#row4 {
  opacity: 100%;
  width: 100%;
  display: table;
  text-align: center;
  font-size: 0.7em;
  bottom: 0%;
}
#num {
  font: bolder;
  font-size: 1.2em;
  text-align: left;
  /* width: 1.em */
}
.el-divider {
  margin: 2%;
}
</style>