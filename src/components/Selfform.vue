<template>
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
            地址 ：{{item.name}}
          </div>
          <div class='time'>
            <i class="el-icon-date icon-size" ></i>
            住院时间： {{item.type}}
          </div>
        </el-col>
    </el-card>
  </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "Selfform",
  data(){
    return{
      viewArr:[
        {name:"1",type:1},
        {name:"2",type:2}
      ]
    }
  },
  methods: {
    update(){
        var result = this.$parent.patient_3(114.319815, 30.360594)
        console.log(result)
    }
    
  },
  mounted(){
    this.update()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.el-divider{
  width:1%
}

</style>