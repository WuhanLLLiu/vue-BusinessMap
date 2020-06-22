<template>
  <div id="HYC" class="layout">
    <div id='Selfform'>
      <p id='title'>“汉阳招商云地图”欢迎辞</p>
      <p class="indentation">
        千年汉阳琴、百年汉阳造。这里流传着高山流水遇知音的不朽传说，这里孕育了中国近代工业的肇兴辉煌，这里俯瞰"两江春水"、坐拥"十山六湖"，这里就是拥有2000多年建城史的汉阳。汉阳独踞武汉三镇一方，不仅以优越的自然资源、独特的地理区位、深厚的文化积淀闻名于世，更以一流的营商环境、高效的行政服务、优厚的招商政策、健全的人才机制，被广大投资者青睐：
      </p>
      <br />
      <p class="indentation">
        这里是“路桥设计之都”，汇聚中铁大桥局、省交投等行业龙头；是“都市工业聚集地”，培育苏泊尔、百威、味好美等全国知名品牌；是“华中会展博览之城”，拥有中部最大、全国第三的武汉国际博览中心；是“大健康产业高地”，云集九州通、健民等明星企业；是“汽车销售服务中心”，以恒信德龙为代表的近百家汽车服务企业扎根于此；是“武汉城市客厅”，拥有琴台大剧院、琴台音乐厅等文化地标，汉阳造广告创意产业园跻身全国同类园区十强。
      </p>
      <br />
      <p class="indentation">
        武汉是一座英雄的城市，汉阳人民历来拥有“越是艰险越向前”的英雄精神。尽管历经新冠疫情考验，但经过艰苦卓绝的努力，汉阳经济社会正加快复苏，这里江水依旧、琴声依旧，赶超发展态势依旧。
      </p>
      <br />
      <p class="indentation">
        筑巢引凤栖，花开蝶自来。为贯彻落实中央和省委、市委优化营商环境重要部署，吸引更多知音参与汉阳高质量发展，我们因时因势推出“汉阳招商云地图”，力求为您生动展示汉阳最全面的招商信息。包括五大模块：土地信息，方便您为项目迅速匹配土地资源；楼宇信息，帮助您寻找最优办公场所；招商政策，让您深度了解各项奖励扶持政策；招商推介，帮助您从全局高度掌握汉阳的发展优势；重点产业，为您呈现汉阳最新最全的产业发展规划，助您发现新商机。
      </p>
      <br>
      <p class="indentation">
        习近平总书记高度重视湖北武汉疫后重振，中央支持湖北武汉一揽子政策正在加速落地，到汉阳投资兴业，正当其时、恰逢其势。我们坚信，阳光总在风雨后。真心期盼、真诚邀请各方有识之士关注汉阳、投资汉阳，与我们共同谱写汉阳高质量发展新篇章。
      </p>
      <img src="../assets/书记签字.png" height="100" style="margin-left: 50px">
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  export default {
    name: "HYC",

    components: {

    },

    data() {
      return {};
    },

    beforeMount() {},

    methods: {},

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

  .indentation {
    text-indent: 2em;
  }

  #row {
    padding: 4%;
  }

  #row1 {
    padding: 1%;
    font-size: 48px;
    font-family: PingFang SC;
    font-weight: 900;
    color: rgba(51, 51, 51, 1);
    line-height: 64px;
  }

  #row2 {
    font-size: 35px;
    font-family: PingFang SC;
    font-weight: lighter;
    color: rgba(51, 51, 51, 1);
    opacity: 0.5;
  }

  #Selfform {
    margin-top: 3%;
    padding: 5%;
    font-size: 36px;
    line-height: 58px;
    font-family: PingFang SC;
  }

  #title {
    font-size: 41px;
    font-weight: bolder;
    font-family: PingFang SC;
    text-align: center;
    padding-bottom: 2%;
  }

  #hj {
    display: inline-block;
    height: auto;
    max-width: 100%;
  }
</style>