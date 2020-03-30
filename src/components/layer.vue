<template>
    <div id="layer">
    <el-popover
        id ="el-popover"
        trigger="manual"
        placement="left-start"
        v-model="visible">
        <div class="scroll-container">
            <div id="div1">
                <el-checkbox v-model="checked1"  @change="check1" label="区县风险图" border size="medium"></el-checkbox>
                <el-checkbox v-model="checked3" @change="check3" label="疫情聚合图" border size="medium"></el-checkbox>
            </div >
            <div id ="div2" >
                <el-checkbox v-model="checked4" @change="check4" label="确诊统计图" border size="medium"></el-checkbox>
                <el-checkbox v-model="checked5" @change="check5" label="治愈统计图" border size="medium"></el-checkbox>
            </div>
            <!-- <div id ="div3" >
                <el-checkbox v-model="checked2" @change="check2" label="疫情热力图" border size="medium"></el-checkbox>
            </div> -->
        </div>
        <el-button slot="reference" @click="clickbutton" icon="el-icon-s-fold" style="font-size: 1.5em"></el-button>
    </el-popover>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
    name: 'layer',
    data() {
        return {
            visible: false,
            checked1: true,
            checked2: false,
            checked3: false,
            checked4: false,
            checked5: false,
            fullscreenLoading: false,
        };
    },
    methods: {
        clickbutton(){
            this.visible = !this.visible;
        },
        check1(){
            this.$parent.display_riskmap(this.checked1)
            this.$parent.display_img(this.checked1)
        },
        check2(){
            this.$parent.display_heatmap(this.checked2)
        },
        check3(){
            if(Vue.Flag == 1){
                const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
                });
                this.$parent.display_cluster(this.checked3)
                loading.close();
                Vue.Flag += 1
            }
            else{
                this.$parent.display_cluster(this.checked3)
            }
        },
        check4(){
            this.$parent.display_patient(this.checked4)
            this.$parent.display_img2(this.checked4)
        },
        check5(){
            this.$parent.display_heal(this.checked5)
            this.$parent.display_img3(this.checked5)
        }
    },
    mounted () {
         Vue.Flag = 1;
    }
    }
</script>

<!-- 限定局部有效的样式 -->
<style scoped>
  #layer {
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
    bottom: 10%;
  }
  .el-checkbox{
      width: 44%;
      margin-right: 4%;
      font-size: 0.8em;

  }
  #div1 {
    margin: 0%;
    padding: 0;
  }
  #div2 {
    padding: 0;
    margin-top: 0.8em;
  }
  #div3 {
    padding: 0;
    margin-top: 0.8em;
  }
  #el-popover{
      /* width: 2em; */
      margin-right: 0%;
      padding-right: 0%;
  }
  .scroll-container{
      width: 18em;
      height: 6em;
      overflow: auto;
      position: relative;
      left:0.5em
  }
     * { touch-action: pan-y; } 
</style>