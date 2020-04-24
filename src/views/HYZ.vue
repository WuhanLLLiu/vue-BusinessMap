<template>
  <div id="HYZ" class="layout">
    <div id="row">
        <p id ='row1'>武汉汉阳造文化创意产业园区简介</p>
        <p id ='row2'>来源：汉阳区商务局</p>
    </div>

    <el-divider class="el-divider1"></el-divider>

    <div id='Selfform'>
        <p>武汉汉阳造文化创意产业园坐落于两江交汇、生态宜人、环境清幽的龟北路1号，其位置也处于武汉中心城区汉阳、汉口、武昌三镇交接点的“武汉之心”。</p>
        <br/>
        <p>武汉汉阳造文化创意产业园用地为航天科工武汉磁电公司厂区（原鹦鹉磁带厂），2011年建成并对外招商。项目占地90亩，建筑面积4.2万平方米，集聚了广告创意、影视制作、艺术设计、新媒体技术等四大产业企业397家，建有广告云计算中心、广告影视棚、广告文化展示中心等一批公共服务平台。园区成功获批“国家广告产业园区”、“国家文化产业示范基地”、“全国版权示范园区”“湖北省文化产业示范基地”、“湖北省旅游创新创业基地”、“湖北省现代服务业示范园区”、“武汉市文化创意产业最佳园区”、“武汉市首批现代服务业集聚示范区”、“武汉市首批文化与科技融合示范园区”等称号，并进入《中国文化发展指数》文化创意类文化产业园前10名。</p>
        <br/>
        <p>从“旧的重工业基地”到“汉阳造文化创意产业园”的华丽转身，园区完成了从“汉阳制造”向“汉阳创造”的美丽蜕变，迅速崛起为华中地区文化创意领域的新地标。</p>
        <img src="./../assets/汉阳造文化创意产业园1.png" id='hj'/>
        <img src="./../assets/汉阳造文化创意产业园2.png" id='hj'/>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  export default {
    name: "HYZ",

    components: {

    },

    data() {
      return {
      };
    },
   
   beforeMount() {
    },

    methods: {
    },

    mounted() {
      //增加统计图表
    }
  };
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
#row{
 padding: 4%;
}
#row1{
  padding: 1%;
  font-size:48px;
  font-family:PingFang SC;
  font-weight:900;
  color:rgba(51,51,51,1);
  line-height:64px;
}

#row2{
  font-size:35px;
  font-family:PingFang SC;
  font-weight: lighter;
  color:rgba(51,51,51,1);
  opacity:0.5;
}
#Selfform{
  margin-top: 3%;
  padding: 5%;
  font-size:36px;
  line-height:58px;
  font-family:PingFang SC;
}
#hj{
  display: inline-block;
  height: auto;
  max-width: 100%;
}
</style>