<template>
  <div id="JKCY" class="layout">
    <div id='top'>
        <van-tabs v-model="active" background="#355BFA" color="white">
            <van-tab title="健康产业规划">
            <div id="row">
                <p id ='row1'>健康产业规划</p>
                <p id ='row2'>来源：汉阳区商务局 发布时间：2019年3月</p>
            </div>
            <el-divider class="el-divider1"></el-divider>
            <div id='Selfform'>
                <p id = 'title'>一、发展目标</p>
                <p>打造医药流通为主体，中医药、健康服务为特色，智能制造、健康金融为支撑的产业发展体系，构建以“龙阳湖健康谷”为中心，以东部四新生态新城“智慧医养服务区”和西部黄金口都市工业园“健康智能制造区”为双翼的“一谷两区”空间格局。</p>
                <br/>
                <p>到2025年，全区大健康产业营业收入突破2000亿元，年均增长15%以上，形成以九州通为核心的医药流通、健康服务产业集群，助力汉阳成为武汉市乃至全国最具代表性的“互联网+大健康”综合示范区。</p>
                <br/>
                <p>到2035年，全区大健康产业营业收入达到6000亿元，形成“健康生活·汉阳造”品牌文化，“健康中国·幸福汉阳”理念深入人心。</p>
                <br/>
                <p id = 'title'>二、空间布局</p>
                <p>按照生态、生活、生产“三位一体”的发展思路，形成以“龙阳湖健康谷”为中心，以四新生态新城“智慧医养服务区”和黄金口都市工业园“健康智能制造区”为双翼的“一谷两区”空间格局。充分依托汉阳在医药流通和中医药领域的特色与优势，发挥九州通、健民药业等龙头企业的带动作用，促进互联网、大数据、云平台技术在医药贸易、医疗卫生、健康养老等产业中的深入应用，创新发展健康金融集聚区，着力构建武汉市乃至全国最具代表性的“互联网+大健康”综合示范区。</p>
                <br/>
                <p>一谷：龙阳湖健康谷。结合龙阳湖健康谷产业规划，依托九州通的行业龙头地位，发挥行业优势，重点发展医药物流、健康大数据等产业，沿龙阳湖东路发展轴两侧，形成医药电商孵化区、健康大数据创新区、高端医疗器械研发区、健康生态体验区等功能组团，打造区域健康智慧物流园。打造龙阳湖“大湖+”样板湖区，打造都市健康商务板块、龙阳湖旅游板块、磨山文创板块。</p>
                <img src="./../assets/lhght.png" id='hj'/>
                <p id="SM">上图龙阳湖健康谷规划图<p>
                <br/>
                <p>两区：分为东区和西区。</p>
                <p>东部为智慧医养服务区：在四新生态新城区域内，以泰康同济国际医院为核心，联合市中医院汉阳院区、五医院西园，充分发挥四新方岛区域医疗产业项目、国博片区会展、设计等产业优势，发展高端国际医疗、健康会展、个性诊疗、健康金融等医疗配套服务，打造国际高端医疗服务区。</p>
                <img src="./../assets/zhyl.png" id='hj'/>
                <p id="SM">上图智慧医养服务区</p>
                <br/>
                <p>西部为健康智能制造区：利用好黄金口都市工业园现有的存量土地，依托黄金口都市工业园转型升级，“新两园”建设，及黄金口、米粮村级产业园搬迁升级的机遇，打造智能健康制造、创新孵化区、医疗器械制造区、健康食品加工区、专业细分物流交易区。</p>
                <img src="./../assets/jkzn.png" id='hj'/>
                <p id="SM">上图健康智能制造区</p>
                <br/>
            </div>
            </van-tab>
            <van-tab title="健康产业政策">

            </van-tab>
            <van-tab title="健康产业企业">

            </van-tab>
        </van-tabs>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  export default {
    name: "JKCY",

    components: {

    },

    data() {
      return {
          active: 0,
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
#title{
  font-size:41px;
  font-weight: bolder;
  font-family:PingFang SC;
}
#hj{
  display: inline-block;
  height: auto;
  max-width: 100%;
}
#SM{
    text-align: center;
    font-size:34px;
    font-weight:normal
}

</style>

<style>
.van-tabs--line .van-tabs__wrap{
    height: 80px;
}
.van-tab__text {
    position: relative;
    color: #fff;
    font-size: 34px;
}
.van-tab{
    padding-top: 2%;
}
</style>