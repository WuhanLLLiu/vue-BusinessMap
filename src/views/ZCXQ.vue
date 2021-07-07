<template>
  <div id="ZCXQ">
    <div id="row">
        <p id ='row1'>汉阳区促进楼宇经济发展奖励办法（试行）</p>
    </div>
    <el-divider class="el-divider1"></el-divider>
    <div id='ZC'>
      <p id='ZC1' v-html='html1'></p>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: "ZCXQ",
    data() {
      return {
        html1:"",
      };
    },
    mounted(){
      this.load()
    },
    methods: {
      load(){
        fetch("http://121.196.60.135:1338/data/lyfczc")
          .then(result => result.json())
          .then(result => {           
            this.html1=result.content
          })
      }
    }
  }
</script>

<!-- 限定局部有效的样式 -->
<style scoped src="../css/ZCXQ.css">
 
</style>