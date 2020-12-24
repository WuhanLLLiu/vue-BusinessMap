<template>
  <div class="KCXL">
    <!-- <div id="container"></div> -->
    <div id='Selfform'>
        <img src="http://121.196.60.135/cdn/大健康产业/考察线路一/考察线路一01.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/大健康产业/考察线路一/考察线路一02.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/大健康产业/考察线路一/考察线路一03.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/大健康产业/考察线路一/考察线路一04.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/大健康产业/考察线路一/考察线路一05.png" id='hj'/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

var container;
export default {
  name: "KCXL",
  props: {
    msg: String
  },
  data() {
    return {
        fullscreenLoading: false
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  /* color: #42b983; */
  color: black;
  font-size:36px;
  font-weight: 700;
  line-height:58px;
  font-family:PingFang SC;
  
}
#hj{
  display: inline-block;
  height: auto;
  max-width: 100%;
}
#Selfform{
  margin-top: 3%;
  padding: 5%;
  font-size:36px;
  line-height:58px;
  font-family:PingFang SC;
}

</style>