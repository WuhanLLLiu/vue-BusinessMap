<template>
  <div id="Dialog">
      <el-button id='button1' type="primary"  @click="dialogVisible = true" icon="el-icon-reading" round>相关政策</el-button>

        <el-dialog
        title="汉阳区大健康产业扶持政策"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose">
        <span>
        <iframe src ='./../assets/汉阳区大健康产业扶持政策.html'>
        </iframe>
        </span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
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
    padding: 1%;
    /*size : 5em;*/
    z-index:2;
    right: 2%;
    /*bottom: 3%;  */
  }
</style>