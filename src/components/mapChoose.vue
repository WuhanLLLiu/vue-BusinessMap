<template>
  <div id="mapChoose">
    <el-popover trigger="manual" placement="right" v-model="visible">
      <div id="div1">
        <el-col>
          <ul>
            <li id="imgSL">
              <img
                src="../assets/矢量图.png"
                height="auto"
                width="80px"
                @click="click2"
              />
            </li>
            <li id="type">矢量图</li>
          </ul>
        </el-col>
        <el-col>
          <ul>
            <li id="imgYX">
              <img
                src="../assets/影像图.png"
                height="auto"
                width="80px"
                @click="click1"
              />
            </li>
            <li id="type">影像图</li>
          </ul>
        </el-col>
        <!-- <img src="../assets/screenage.png" height="80em" width="auto" style= "border-right : 1%" @click="click1">
            <img src="../assets/vector.png" height="80em" width="auto" @click="click2"> -->
      </div>
      <el-button
        slot="reference"
        @click="clickbutton"
        icon="el-icon-document-copy"
        style="font-size: 1.5em"
      >
        <div id="button0">图层</div>
      </el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "mapChoose",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    clickbutton() {
      this.visible = !this.visible;
    },
    click1() {
      this.$parent.hybird_map();
      this.visible = !this.visible;
    },
    click2() {
      this.$parent.Vector_map();
      this.visible = !this.visible;
    },
  },
  mounted() {},
};
</script>

<!-- 限定局部有效的样式 -->
<style scoped>
#mapChoose {
  top: 7.1%;
  width: 100%;
  position: absolute;
  z-index: 2;
}
.el-button {
  position: fixed;
  padding: 1%;
  z-index: 3;
  right: 2%;
  bottom: 12%;
  width: 1.5em;
  height: 2.4em;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
  border-radius: 10px;
  word-wrap: break-word;
}
#div1 {
  margin: 0%;
  padding: 0;
}
.el-popover {
  /* width: 150em; */
  margin-right: 0%;
  background: cornflowerblue;
}
.el-col {
  width: 50%;
  text-align: center;
}

#type {
  font-size: 25px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 60px;
}
#button0 {
  font-size: 0.5em;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 60px;
}
</style>

<style >
.element.style {
  transform-origin: right center;
  z-index: 4;
  display: none;
}
</style>

