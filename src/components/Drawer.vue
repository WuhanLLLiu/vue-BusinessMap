<template>
    <div id="Drawer">
        <el-button id="bottom" @click="drawer = true"  style="color:#0000FF;border:0px;text-align:center;font-size: 0.7em; ">
                更多信息，点击上拉显示
        </el-button>
        <el-drawer
        title="我是 Drawer"
        direction="btt"
        :visible.sync="drawer"
        :with-header="false"
        size="90%">
        <div id='drawer-content'>
            <el-row id="row1">
                <!--{{item.address}} {{item.risk}}-->
                <span>江夏第四中学</span>
                <span class="risk-level-3">高风险</span>
            <el-button @click="drawer = false" id="false" icon='el-icon-close' style="float:right;border:0px"></el-button>
            </el-row>
                <el-divider class="el-divider1"></el-divider>
            <el-row id="row2">
                <span>
                    3公里内累计确诊：
                </span>
                <span id="num" style="color:red">
                    {{num}}
                </span>
                <span>
                    人
                </span>
            </el-row>
            <el-row id="row3">
                    您当前附近范围疫情风险较高，请注意防护。
            </el-row>
            <el-divider class="el-divider1"></el-divider>
            <div id='Selfform'>
            <div class="meg" v-for="(item,index) in viewArr" v-bind:key="index">
              <el-card class="box-card">
                  <el-col :span='2' class="index">
                      <span>{{ index + 1 }}</span>
                  </el-col>
                  <!-- <el-col :span='3' class='line'>
                      <el-divider direction="vertical"></el-divider>
                  </el-col> -->
                  <el-col :span='22' class="content">
                    <div class='address'>
                      <i class="el-icon-location-information icon-size" ></i>
                      地址 ：{{item.address}}
                    </div>
                    <div class='time'>
                      <i class="el-icon-date icon-size" ></i>
                      住院时间： {{item.time}}
                    </div>
                  </el-col>
              </el-card>
            </div>
            </div>
        </div>
        </el-drawer>
    </div>
</template>

<script>
    import Vue from 'vue';
    // import Selfform from './Selfform'
    import * as maptalks from 'maptalks';
    import 'maptalks/dist/maptalks.css';
    import { MP } from './map.js'
    export default {
    name: 'Drawer',
    // components: {
    //   Selfform: Selfform
    // },
    data() {
        return {
            drawer: false,
            num:0,
            viewArr:[
            ]
        };
    },
    methods: {
    //3公里内确诊人数
      patient_3(lon, lat) {
        var that = this;
        var n = 0
        var patient_3 =[];
        var patient_3Layer = new maptalks.VectorLayer('patient_3');
        Vue.mapInstance.addLayer(patient_3Layer);
        const circle = new maptalks.Circle([lon, lat], 3000);
        patient_3Layer.addGeometry(circle);
        fetch("http://120.77.76.166/coronavius/assets/jxpoints.json").then(result => result.json()).then(result => {
          const jxpatients = result.features;
          var jxmultiponits=[];
          for (var i = 0; i < jxpatients.length; i++) {
            jxmultiponits.push(jxpatients[i].geometry.coordinates);
          }
          var r=new maptalks.MultiPoint(jxmultiponits);
          patient_3Layer.addGeometry(r);
          var jxpoints2=patient_3Layer.getGeometries();
          //console.log(jxpoints2[1]._geometries.length);
          for(var j=0;j<jxpoints2[1]._geometries.length;j++){
            var contains_3=circle.containsPoint(jxpoints2[1]._geometries[j]._coordinates);
            if(contains_3){
              patient_3.push(jxpatients[j].properties);
              that.viewArr.push(jxpatients[j].properties);
              n++
            }
          }  
          that.num = n
          Vue.mapInstance.removeLayer('patient_3') ;
        });
      },
    },
    mounted () {
      this.patient_3(114.319815, 30.360594)
    }
    }
</script>

<!-- 限定局部有效的样式 -->
<style scoped>
#Drawer {
  /* position: fixed;*/
  width: 100%;
}
#bottom {
  position: fixed;
  padding-bottom: 1%;
  padding-top: 1%;
  padding-right: 0%;
  padding-left: 0%;
  /* size : 1.5em; */
  z-index: 2;
  width: 100%;
  bottom: 0%;
}
#false {
  margin-right: 2%;
  /* right: 1%; */
  padding: 1%;
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
.risk-level-1{
  background: #94e392;
  display: inline-block;
  color: #333333;
  border-radius: 15px;
  padding: 3px 15px;
  font-size: 14px;
  margin:0 10px 0 10px;
}
.risk-level-2{
  background: #ffb502;
  display: inline-block;
  color: #333333;
  border-radius: 15px;
  padding: 3px 15px;
  font-size: 14px;
  margin:0 10px 0 10px;
}
.risk-level-3{
  background: #db1717;
  display: inline-block;
  color: #ffffff;
  border-radius: 15px;
  padding: 3px 15px;
  font-size: 14px;
  margin:0 10px 0 10px;
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
  border:1px solid #004acc;
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
#el-divider1 {
  margin: 2%;
}
#drawer-content {
  height: 99.5%;
  overflow: auto;
}
.el-card{
  width: 90%;
  text-align: center;
  left: 5em;
  margin-bottom: 2%;
  margin-top: 2%;
  margin-left: 5%;
}
.index span{
  font-family: '微软雅黑','Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font:bolder;
  font-size:1em;
  display: inline-block;
  padding: 8px 15px 0 0;
}
.line{
  margin: 0%;
  border: 0%;
  width: 4%;
}
.content{
  font-family: '微软雅黑','Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: lighter;
  font-size: 14px;
  text-align: left;
  border-left:1px solid #dddddd;
  padding: 0 0 0 15px;
  margin: 0 0 20px 0;
}
.icon-size{
  font-size: 1em;
  font-weight: bolder;
}
/* .el-divider{
  width:1%
} */

</style>