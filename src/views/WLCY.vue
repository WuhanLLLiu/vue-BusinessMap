<template>
  <div id="WLCY">
    <div id="row">
        <p id ='row1'>文旅产业招商计划</p>
        <!--<p id ='row2'>来源：汉阳发展改革局 发布时间：2019-3</p>-->
    </div>
    <el-divider class="el-divider1"></el-divider>
    <div id='WLCY0'>
        <p id='WL' v-html='html3'></p>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: "WLCY",
    data() {
      return {
        html3:"",
      };
    },
    mounted(){
      this.load_WLCY()
    },
    methods: {
      load_WLCY(){
        fetch("http://121.196.60.135:1338/data/whcydzzjh")
          .then(result => result.json())
          .then(result => {            
            this.html3=result.content
          })
      },
    }
  }
</script>

<!-- 限定局部有效的样式 -->
<style scoped src="../css/WLCY.css">
</style>