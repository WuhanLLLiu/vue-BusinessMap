<template>
  <div id="Dialog">
      <el-button id='button1' type="primary"  @click="centerDialogVisible = true" icon="el-icon-reading" round style="font-size: 1.0em">相关政策</el-button>
        
        <el-dialog
        id='dialog1'
        title="相关政策"
        :visible.sync="centerDialogVisible"
        center
        >
        <span id='policy'>
          <li>
            <a href="http://www.hanyang.gov.cn/ZWGK/XXGKML/ZFWJ/GFXWJ/detail-85141.html" >汉阳区营商留商奖励政策</a>
          </li>
          <br/>
          <li>
            <a href="../assets/汉阳区大健康产业扶持政策.html" >汉阳区大健康产业扶持政策</a>
          </li>
          <br/>
          <li>
            <a href="http://www.huaxia.com/whtb/stzc/2013/07/3429108.html" >汉阳区楼宇扶持政策</a>
          </li>
          <!--<li>
            <a href="'./../assets/楼宇扶持政策.html'" >汉阳区楼宇扶持政策</a>
          </li>-->
        </span>
        <!-- <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span> -->
        </el-dialog>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    },
    methods: {
      // handleClose(done) {
      //   this.$confirm('确认关闭？')
      //     .then(_ => {
      //       done();
      //     })
      //     .catch(_ => {});
      // }
    }
  }
</script>

<!-- 限定局部有效的样式 -->
<style scoped>
  #Dialog {
    top: 35%;
    /*left:78%;*/
    width: 100%;
    position: absolute;
    z-index: 2;
  }
  #button1 {
    position: fixed;
    padding: 2%;
    size : 5em;
    z-index:2;
    right: 2%;
    /*bottom: 3%;  */
  }
  #policy{
    font-size: 27px
  }
  #dialog1{
    width:100%
    /* right:50% */
  }
  /*.el-dialog__title{
    font-size: 30px
  }*/
  #header-title{
    font-size: 18px;
    font:bolder;
  }
  .el-dialog.el-dialog__header{
    font-size: 18px
  }
</style>