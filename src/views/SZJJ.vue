<template>
  <div class="SZJJ">
    <!-- <div id="container"></div> -->
    <div id='Selfform'>
        <img src="http://121.196.60.135/cdn/汉阳数字经济/hanyangshuzijingji_01.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/汉阳数字经济/hanyangshuzijingji_02.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/汉阳数字经济/hanyangshuzijingji_03.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/汉阳数字经济/hanyangshuzijingji_04.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/汉阳数字经济/hanyangshuzijingji_05.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/汉阳数字经济/hanyangshuzijingji_06.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/汉阳数字经济/hanyangshuzijingji_07.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/汉阳数字经济/hanyangshuzijingji_08.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/汉阳数字经济/hanyangshuzijingji_09.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/汉阳数字经济/hanyangshuzijingji_10.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/汉阳数字经济/hanyangshuzijingji_11.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/汉阳数字经济/hanyangshuzijingji_12.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/汉阳数字经济/hanyangshuzijingji_13.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/汉阳数字经济/hanyangshuzijingji_14.png" id='hj'/>
        <img src="http://121.196.60.135/cdn/汉阳数字经济/hanyangshuzijingji_15.png" id='hj'/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

var container;
export default {
  name: "SZJJ",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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