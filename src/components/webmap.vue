<!-- 主要界面地图模版 -->
<template>
  <div id="WebMap"> </div>
</template>

<script>
  import Vue from 'vue';
  import * as maptalks from 'maptalks';
  import 'maptalks/dist/maptalks.css';

  import imgURL_loc from '../assets/marker.png'
  import imgURL_loc2 from '../assets/choosed.png'

  // import tdxx from '../assets/tdxx.js'
  // import lyxx from '../assets/lyxx.js'
  // import QJ from "../assets/vtour/tour.html"
  //引入百度api,需要安装npm i vue-baidu-map --save
  // import BaiduMap from 'vue-baidu-map'
  // Vue.use(BaiduMap, {
  //   ak: 'ZhHamcsfqBewPZERHpGAvzBZZqQ643tN'  //这个地方是官方提供的ak密钥
  // })

  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "WebMap",
    components: {},
    data() {
      //这里存放数据
      return {
        TDitem:[]
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      //three.js
      buildings() {
        var threeLayer = new ThreeLayer('t', {
          forceRenderOnMoving: true,
          forceRenderOnRotating: true
        });
        var material = new THREE.MeshBasicMaterial({
          color: 'white'
        });
        var highlightmaterial = new THREE.MeshBasicMaterial({
          color: 'yellow'
        });
        threeLayer.prepareToDraw = function (gl, scene, camera) {
          var light = new THREE.DirectionalLight(0xffffff);
          light.position.set(0, -10, 10).normalize();
          scene.add(light);
          for (var i = 0; i < 5; i++) {
            var bar = threeLayer.toBar(bar_Self.bar_Self[i].coordinates, {
              height: 1000 * bar_Self.bar_Self[i].height,
              radius: 150,
              topColor: 'white',
            }, material);
            // tooltip test
            bar.setToolTip(bar_Self.bar_Self[i].name, {
              showTimeout: 0,
              eventsPropagation: true,
              dx: 10
            });
            //infowindow test
            bar.setInfoWindow({
              content: '<div style="font-size:14px;">' + bar_Self.bar_Self[i].content +
                '<br/>' + '<br/>' + bar_Self.bar_Self[i].contact + '<br/>' + bar_Self.bar_Self[i].img,
              title: bar_Self.bar_Self[i].name + '</div>',
              animationDuration: 0,
              // autoOpenOn: false,
              'autoCloseOn': 'click',
            });
            threeLayer.addMesh(bar);
            threeLayer.config('animation', true);
          }
        };
        threeLayer.addTo(Vue.mapInstance);
      },
      //地块
      HYparcel(){
        fetch("http://121.196.60.135:1338/data/tdxx").then(result => result.json()).then(result => {
          Vue.mapInstance.addLayer(new maptalks.VectorLayer('v1'))
          var county = JSON.parse(result.content)
          const geometries = maptalks.GeoJSON.toGeometry(county);
          for (var i = 0; i < geometries.length; i++) {
            var a = geometries[i];
            a._id = i
          }
          const vectorLayer = Vue.mapInstance.getLayer('v1').addGeometry(geometries);
          //设置style
          vectorLayer.setStyle([{
              'symbol': {
                  'lineColor': '#2348E5',
                  'lineWidth': 4,
                  'polygonFill': '#355BFA',
                  'polygonOpacity': 0.6,
                  'markerFile': imgURL_loc,
                  'markerWidth': { stops: [[6, 0], [14, 30]] },
                  'markerHeight': { stops: [[6, 0], [14, 40]] }
              }
            }]);
          // Vue.mapInstance.addLayer(vectorLayer);
          Vue.mapInstance.getLayer('v1').bringToBack()
        //信息框显示marker_self.
          // for (var j = 0; j < geometries.length; j++) {
          //   Vue.mapInstance.getLayer('v1').getGeometryById(j).setInfoWindow({
          //     'content': '<div style="font-size:14px;">' + '<B>' + geometries[j].properties.name +'</B>'+ '<br/><br/>'
          //      + '<B>位置：</B>' + geometries[j].properties.location +'<br/><br/>'
          //      + '<B>面积：</B>' + geometries[j].properties.area +'亩<br/><br/>'
          //      + '<B>公建比：</B>' + geometries[j].properties.proportion +'<br/><br/>'
          //      + '<B>招商方向：</B>' + geometries[j].properties.direction +'<br/><br/>'
          //      + '<B>详细信息：</B>' + geometries[j].properties.around + '</div>',
          //     'autoCloseOn': 'click',
          //     // 'autoPan': true,
          //     // 'width': 430,
          //   });
          // }
          //click 事件
          for (var j = 0; j < geometries.length; j++) {
            Vue.mapInstance.getLayer('v1').getGeometryById(j).on('click', function (param) {
              for (var a = 0; a < geometries.length; a++){
                Vue.mapInstance.getLayer('v1').getGeometryById(a).updateSymbol({
                  'lineColor': '#2348E5',
                  'lineWidth': 4,
                  'polygonFill': '#355BFA',
                  'polygonOpacity': 0.6,
                  'markerFile': imgURL_loc,
                  'markerWidth': { stops: [[6, 0], [14, 30]] },
                  'markerHeight': { stops: [[6, 0], [14, 40]] }
                })
              }
  
              document.getElementById('bottom0').style.display="block";
              document.getElementById('name').innerHTML = param.target.properties.name
              document.getElementById('area').innerHTML = param.target.properties.area +'亩'
              document.getElementById('proportion').innerHTML = '公建比  '+param.target.properties.proportion
              document.getElementById('direction').innerHTML = param.target.properties.direction
              document.getElementById('around').innerHTML = param.target.properties.around
              document.getElementById('location').innerHTML = param.target.properties.location
              param.target.updateSymbol({
                    'lineColor': '#E52323',
                    'lineWidth': 4,
                    'polygonFill': '#FA3535',
                    'polygonOpacity': 0.6,
                    'markerFile': imgURL_loc2,
                    'markerWidth': { stops: [[6, 0], [14, 40]] },
                    'markerHeight': { stops: [[6, 0], [14, 54]] }
              })
            })
          }
        })
      },
      //楼宇
      HYbuildings(){
        fetch("http://121.196.60.135:1338/data/lyxx").then(result => result.json()).then(result => {
          Vue.mapInstance.addLayer(new maptalks.VectorLayer('ly'))
          var county = JSON.parse(result.content)
          const geometries = maptalks.GeoJSON.toGeometry(county);
          for (var i = 0; i < geometries.length; i++) {
            var a = geometries[i];
            a._id = i
          }
          const vectorLayer = Vue.mapInstance.getLayer('ly').addGeometry(geometries);
          //设置style
          vectorLayer.setStyle([{
              'symbol': {
                  'markerFile': imgURL_loc,
                  'markerWidth': { stops: [[6, 0], [14, 30]] },
                  'markerHeight': { stops: [[6, 0], [14, 40]] }
              }
            }]);
          // Vue.mapInstance.addLayer(vectorLayer);
          Vue.mapInstance.getLayer('ly').bringToBack()
        //信息框显示marker_self.
          // for (var j = 0; j < geometries.length; j++) {
          //   Vue.mapInstance.getLayer('ly').getGeometryById(j).setInfoWindow({
          //     'content': '<div style="font-size:14px;">' + '<B>' + geometries[j].properties.name +'</B>'+ '<br/><br/>'
          //      + '<B>位置：</B>' + geometries[j].properties.address +'<br/><br/>'
          //      + '<B>层数：</B>' + geometries[j].properties.floor_num +'<br/><br/>'
          //      + '<B>建筑体量（平米）：</B>' + geometries[j].properties.volume +'<br/><br/>'
          //      + '<B>已入驻企业数量：</B>' + geometries[j].properties.settled_en +'<br/><br/>'
          //      + '<B>客梯数量：</B>' + geometries[j].properties.passenger_ +'<br/><br/>'
          //      + '<B>停车位数量：</B>' + geometries[j].properties.parking_nu +'<br/><br/>'
          //      + '<B>租金（元/平米每月）：</B>' + geometries[j].properties.monthly_re +'<br/><br/>'
          //      + '<B>物业管理费（元/平米每月）：</B>' + geometries[j].properties.property_m + '<br/><br/>'
          //      + '<a href="https://720yun.com/t/a472babuccs?scene_id=844024" >查看照片</a>'+'</div>',
          //     'autoCloseOn': 'click',
          //     // 'autoPan': true,ly
          //     // 'width': 430,
          //   });
          // }
          //click 事件
          for (var j = 0; j < geometries.length; j++) {
            Vue.mapInstance.getLayer('ly').getGeometryById(j).on('click', function (param) {
              for (var a = 0; a < geometries.length; a++){
                Vue.mapInstance.getLayer('ly').getGeometryById(a).updateSymbol({
                  'markerFile': imgURL_loc,
                  'markerWidth': { stops: [[6, 0], [14, 30]] },
                  'markerHeight': { stops: [[6, 0], [14, 40]] }
                })
              }
  
              document.getElementById('bottomly').style.display="block";
              document.getElementById('lyname').innerHTML = param.target.properties.name
              document.getElementById('lylocation').innerHTML = param.target.properties.address 
              document.getElementById('lycs').innerHTML = param.target.properties.floor_num
              document.getElementById('lytl').innerHTML = param.target.properties.volume
              document.getElementById('lyqy').innerHTML = param.target.properties.settled_en
              document.getElementById('lykt').innerHTML = param.target.properties.passenger_
              document.getElementById('lytc').innerHTML = param.target.properties.parking_nu
              document.getElementById('lyzj').innerHTML = param.target.properties.monthly_re
              document.getElementById('lywy').innerHTML = param.target.properties.property_m

              param.target.updateSymbol({
                  'markerFile': imgURL_loc2,
                  'markerWidth': { stops: [[6, 0], [14, 40]] },
                  'markerHeight': { stops: [[6, 0], [14, 50]] }
              })
            })
          }
        })
      },
      //根据属性筛选土地
      TDfilter(value1,value2,value3) {
        var that = this
        var v1 = String(value1)
        var v2 = String(value2)
        var v3 = String(value3)
        Vue.mapInstance.getLayer('v1').filter(['!=', 'id', null])
          .forEach(function (feature) {
            feature.hide();
        });
        if(v1 == '0'){
          if(v2 == '0'){
            if(v3 == '0'){
                that.TDitem = []
                Vue.mapInstance.getLayer('v1').filter(['!=', 'id', null])
                  .forEach(function (feature) {
                    feature.show();
                    that.TDitem.push(feature.properties)
                });
                that.$emit('changeCard',that.TDitem) 
            }
            else{
                that.TDitem = []
                 Vue.mapInstance.getLayer('v1').filter(['==', 'dev_degree', v3])
                  .forEach(function (feature) {
                    feature.show();
                    that.TDitem.push(feature.properties)
                });     
                that.$emit('changeCard',that.TDitem)        
            }
          }
          else{
            if(v3 == '0'){
                that.TDitem = []
                 Vue.mapInstance.getLayer('v1').filter(['==', 'use', v2])
                  .forEach(function (feature) {
                    feature.show();
                    that.TDitem.push(feature.properties)
                });   
                that.$emit('changeCard',that.TDitem)  
            }
            else{
                that.TDitem = []
                Vue.mapInstance.getLayer('v1').filter(['==', 'use', v2])
                  .forEach(function (feature) {
                    if(feature.properties.dev_degree == v3){
                      feature.show();
                      that.TDitem.push(feature.properties)
                    }
                });  
                that.$emit('changeCard',that.TDitem) 
            }
          }
        }
        else{
          if(v2 == '0'){
            if(v3 == '0'){
                 that.TDitem = []
                 Vue.mapInstance.getLayer('v1').filter(['==', 'street', v1])
                  .forEach(function (feature) {
                    feature.show();
                    that.TDitem.push(feature.properties)
                });  
                that.$emit('changeCard',that.TDitem)         
            }
            else{
                 that.TDitem = []
                 Vue.mapInstance.getLayer('v1').filter(['==', 'street', v1])
                  .forEach(function (feature) {
                    if(feature.properties.dev_degree == v3){
                      feature.show();
                      that.TDitem.push(feature.properties)
                    }
                });   
                that.$emit('changeCard',that.TDitem)  
            }
          }
          else{
            if(v3 == '0'){
                 that.TDitem = []
                 Vue.mapInstance.getLayer('v1').filter(['==', 'street', v1])
                  .forEach(function (feature) {
                    if(feature.properties.use == v2){
                      feature.show();
                      that.TDitem.push(feature.properties)
                    }
                });  
                that.$emit('changeCard',that.TDitem)  
            }
            else{
                that.TDitem = []
                Vue.mapInstance.getLayer('v1').filter(['==', 'street', v1])
                  .forEach(function (feature) {
                    if(feature.properties.use == v2)
                      if(feature.properties.dev_degree == v3)
                        {feature.show();that.TDitem.push(feature.properties);}
                });   
                that.$emit('changeCard',that.TDitem)
            }
          }
        }
      },     
      //加载影像底图
      hybird_map() {
        Vue.mapInstance.removeLayer("base");
        Vue.mapInstance.setBaseLayer(new maptalks.TileLayer("base", {
          urlTemplate: 'http://121.196.60.135:1338/layer/google/{z}/{x}/{y}',
          attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
        }));
      },

      //加载矢量地图e
      Vector_map() {
        Vue.mapInstance.removeLayer("base");
        const dpr = Vue.mapInstance.getDevicePixelRatio();
        const scaler = dpr > 1 ? 2 : 1;
        //gaode
        // Vue.mapInstance.setBaseLayer(new maptalks.TileLayer("base", {
        //   'urlTemplate': 'http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
        //   'subdomains': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        //   'attribution': '&copy; <a target="_blank" href="https://map.gaode.com">Gaode</a>'
        // }));
        Vue.mapInstance.setBaseLayer(new maptalks.TileLayer("base", {
          urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
          subdomains: ['a','b','c','d'],
          attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
        }));
      },

   },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      //构建map
      var image = new Image();
      Vue.mapInstance = new maptalks.Map("WebMap", {
        // center: [113.5, 31.1],
        center: [114.210649, 30.540374],
        zoom: 14,
        // pitch: 50,
        // zoom: 17,
        // spatialReference: {
        //   projection: 'EPSG:4326'
        // },
        // layers: [
        //   new maptalks.VectorLayer('v')
        // ]
      });
      // const dpr = Vue.mapInstance.getDevicePixelRatio();
      // const scaler = dpr > 1 ? 2 : 1;
      // //https://maponline0.bdimg.com/starpic/?qt=satepc&u=x=778;y=218;z=12;v=009;type=sate&fm=46&app=webearth2&v=009&udt=20200225
      // Vue.mapInstance.setBaseLayer(new maptalks.TileLayer("base", {
      //   'urlTemplate': `http://online2.map.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=${scaler}&udt=20190704`,
      //   'subdomains': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      //   'attribution': '&copy; <a target="_blank" href="https://map.baidu.com">Baidu</a>'
      // }));

      Vue.mapInstance.setBaseLayer(new maptalks.TileLayer('base', {
          urlTemplate: 'http://121.196.60.135:1338/layer/google/{z}/{x}/{y}',
          attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
      }));
    },

    beforeCreate() {}, //生命周期 - 创建之前rk
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
  };
</script>

<!-- 限定局部有效的样式 -->
<style scoped>
  #WebMap {
    height: 100%;
    position: absolute;
    /* position:relative; */
    top: 0px;
    left: 0px;
    width: 100%;
  }

  * {
    touch-action: pan-y;
  }
</style>