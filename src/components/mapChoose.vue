<template>
    <div id="mapChoose">
    <el-popover
        trigger="manual"
        placement="left-start"
        v-model="visible">
        <div id="div1">
            <img src="../assets/screenage.png" height="80em" width="auto" style= "border-right : 1%" @click="click1">
            <img src="../assets/vector.png" height="80em" width="auto" @click="click2">
        </div >
        <el-button slot="reference" @click="clickbutton" icon="el-icon-document-copy" style="font-size: 1.5em"></el-button>
    </el-popover>
    </div>
</template>

<script>
    export default {
    name: 'mapChoose',
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        clickbutton(){
            this.visible = !this.visible;
        },
        click1(){
            this.$parent.hybird_map()
        },
        click2(){
            this.$parent.Vector_map();
        }

    },
    mounted () {
    }
    }
</script>

<!-- 限定局部有效的样式 -->
<style scoped>
  #mapChoose {
    top: 7.1%;
    width: 100%;
    position: absolute;
    z-index: 2;
  }
  .el-button{
    position: fixed;
    padding: 1%;
    size : 1.5em;
    z-index:2;
    right: 2%;
    bottom: 3%;
    
  }
  #div1 {
    margin: 0%;
    padding: 0;
  }
  .el-popover{
      /* width: 150em; */
      margin-right: 0%;
      background: cornflowerblue;
  }
</style>