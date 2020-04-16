<!-- 主要界面地图模版 -->
<template>
  <div id="WebMap"> </div>
</template>

<script>
  import Vue from 'vue';
  import * as maptalks from 'maptalks';
  import {
    ThreeLayer
  } from 'maptalks.three'
  import 'maptalks/dist/maptalks.css';
  import {
    ClusterLayer
  } from 'maptalks.markercluster';
  import {
    HeatLayer
  } from 'maptalks.heatmap';
  import * as THREE from 'three';


  import imgURL_patient from '../assets/patient_marker.png';
  import imgURL_heal from '../assets/heal_marker.png';
  import imgURL_loc from '../assets/loc.png'
  import imgURL_jd from '../assets/jd.png'

  import marker_Self from '../assets/marker.js'
  import bar_Self from '../assets/bar.js'
  import tdxx from '../assets/tdxx.js'
  import lyxx from '../assets/lyxx.js'
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
      return {};
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      //聚点图
      markInfo(i) {
        if (i) {
          if (Vue.mapInstance.getLayer('cluster') != null) {
            Vue.mapInstance.getLayer('cluster').show()
          } else {
            fetch("https://ncp.gsafety.com/coronavius/assets/hbqx.json").then(result => result.json()).then(result => {
              let markers = []
              var features = result.features;
              for (var i = 0; i < features.length; i++) {
                var a = features[i];
                if (!a.properties.ALLPATIENT) {
                  a.properties.ALLPATIENT = 0;
                }
                for (var c = 0; c < a.properties.ALLPATIENT; c++) {
                  markers.push(new maptalks.Marker(a.geometry.coordinates));
                }
              }
              let clusterLayer = new ClusterLayer('cluster', markers, {
                'noClusterWithOneMarker': false,
                'maxClusterZoom': 18,
                //"count" is an internal variable: marker count in the cluster.
                'symbol': {
                  'markerType': 'ellipse',
                  'markerFill': {
                    property: 'count',
                    type: 'interval',
                    stops: [
                      [100, 'rgb(135, 196, 240)'],
                      [200, '#1bbc9b'],
                      [300, 'rgb(216, 115, 149)']
                    ]
                  },
                  'markerFillOpacity': 0.7,
                  'markerLineOpacity': 1,
                  'markerLineWidth': 3,
                  'markerLineColor': '#fff',
                  'markerWidth': {
                    property: 'count',
                    type: 'interval',
                    stops: [
                      [0, 40],
                      [9, 60],
                      [99, 80]
                    ]
                  },
                  'markerHeight': {
                    property: 'count',
                    type: 'interval',
                    stops: [
                      [0, 40],
                      [9, 60],
                      [99, 80]
                    ]
                  }
                },
                'drawClusterText': true,
                'geometryEvents': true,
                'single': true
              });
              Vue.mapInstance.addLayer(clusterLayer);
            });
          }
        } else {
          Vue.mapInstance.getLayer('cluster').hide()
        }
      },
      //江夏聚点图
      markInfo2() {
        fetch("https://ncp.gsafety.com/coronavius/assets/points.json").then(result => result.json()).then(result => {
          let markers = []
          const testpoints = result.points;
          for (var i = 0; i < testpoints.length; i++) {
            var a = testpoints[i];
            markers.push(new maptalks.Marker([a[1], a[0]]))
          }
          let clusterLayer = new ClusterLayer('cluster2', markers, {
            'noClusterWithOneMarker': false,
            'maxClusterZoom': 18,
            //"count" is an internal variable: marker count in the cluster.
            'symbol': {
              'markerType': 'ellipse',
              'markerFill': {
                property: 'count',
                type: 'interval',
                stops: [
                  [0, 'rgb(135, 196, 240)'],
                  [9, '#1bbc9b'],
                  [99, 'rgb(216, 115, 149)']
                ]
              },
              'markerFillOpacity': 0.7,
              'markerLineOpacity': 1,
              'markerLineWidth': 3,
              'markerLineColor': '#fff',
              'markerWidth': {
                property: 'count',
                type: 'interval',
                stops: [
                  [0, 40],
                  [9, 60],
                  [99, 80]
                ]
              },
              'markerHeight': {
                property: 'count',
                type: 'interval',
                stops: [
                  [0, 40],
                  [9, 60],
                  [99, 80]
                ]
              }
            },
            'drawClusterText': true,
            'geometryEvents': true,
            'single': true
          });
          Vue.mapInstance.addLayer(clusterLayer);
          console.log(Vue.mapInstance)
        });
      },
      //加载企业复工热力图
      heatMapInfo(i) {
        if (i) {
          if (Vue.mapInstance.getLayer('heat') != null) {
            Vue.mapInstance.getLayer('heat').show()
          } else {
            fetch("https://ncp.gsafety.com/coronavius/assets/hbqx.json").then(result => result.json()).then(result => {
              let patient = []
              var features = result.features;
              for (var i = 0; i < features.length; i++) {
                var a = features[i];
                if (!a.properties.ALLPATIENT) {
                  a.properties.ALLPATIENT = 0;
                }
                for (var c = 0; c < a.properties.ALLPATIENT; c++) {
                  patient.push(a.geometry.coordinates);
                }
              }
              // const testpoint = result.points;
              let data = patient.map(function (p) {
                return [p[0], p[1]];
              });
              let heatLayer = new HeatLayer('heat', data, {
                'heatValueScale': 0.4,
                'forceRenderOnRotating': true,
                'forceRenderOnMoving': false
              });
              Vue.mapInstance.addLayer(heatLayer);
            });
          }
        } else {
          Vue.mapInstance.getLayer('heat').hide()
        }
      },
      //加载区划信息风险等级图
      polygon(i) {
        if (i) {
          if (Vue.mapInstance.getLayer('v') != null) {
            Vue.mapInstance.getLayer('v').show()
          } else {
            fetch("https://ncp.gsafety.com/coronavius/assets/county.json").then(result => result.json()).then(
              county => {
                Vue.mapInstance.addLayer(new maptalks.VectorLayer('v'))
                const geometries = maptalks.GeoJSON.toGeometry(county);
                const vectorLayer = Vue.mapInstance.getLayer('v').addGeometry(geometries);
                //设置style
                vectorLayer.setStyle([{
                    'filter': ['==', 'RISK', '低风险'],
                    'symbol': {
                      'polygonFill': 'rgb(0,255,0)',
                      // 'polygonOpacity': { stops: [[6, 0.5], [10, 0]] },
                      'polygonOpacity': 0.5,
                      'lineColor': '#fff',
                      'lineWidth': 0.3
                    }
                  },
                  {
                    'filter': ['==', 'RISK', '中风险'],
                    'symbol': {
                      'polygonFill': 'rgb(255,255,0)',
                      // 'polygonOpacity': { stops: [[6, 0.5], [10, 0]] },
                      'polygonOpacity': 0.5,
                      'lineColor': '#fff',
                      'lineWidth': 0.3
                    }
                  },
                  {
                    'filter': ['==', 'RISK', '高风险'],
                    'symbol': {
                      'polygonFill': 'rgb(255,0,0)',
                      // 'polygonOpacity': { stops: [[6, 0.5], [10, 0]] },
                      'polygonOpacity': 0.5,
                      'lineColor': '#fff',
                      'lineWidth': 0.3
                    }
                  }
                ]);
                console.log(Vue.mapInstance)
                Vue.mapInstance.getLayer('v').bringToBack()
              });
          }
        } else {
          Vue.mapInstance.getLayer('v').hide()
        }
      },

      //加载区县疫情确诊图
      allPatient(i) {
        if (i) {
          if (Vue.mapInstance.getLayer('patient') != null) {
            Vue.mapInstance.getLayer('patient').show()
            //信息框显示
            for (var j = 0; j < Vue.Patientfeatures.length; j++) {
              Vue.mapInstance.getLayer('patient').getGeometryById(j).setInfoWindow({
                'title': '累计确诊人数',
                'content': '行政区划：' + Vue.Patientfeatures[j].properties.NAME + ' ' + '确诊人数：' + Vue.Patientfeatures[j]
                  .properties.ALLPATIENT,
                'autoCloseOn': 'click'
              });
              // Vue.mapInstance.getLayer('patient').getGeometryById(8).openInfoWindow();
            }
          } else {
            fetch("https://ncp.gsafety.com/coronavius/assets/hbqx.json").then(result => result.json()).then(result => {
              Vue.Patientfeatures = result.features;
              //var layer=Vue.mapInstance.getLayer('v');
              var patientLayer = new maptalks.VectorLayer('patient');
              for (var i = 0; i < Vue.Patientfeatures.length; i++) {
                var a = Vue.Patientfeatures[i];
                if (!a.properties.ALLPATIENT) {
                  a.properties.ALLPATIENT = '暂无数据';
                }
                //console.log(a.geometry.coordinates);
                var marker = new maptalks.Marker(
                  a.geometry.coordinates, {
                    'id': i,
                    'properties': {
                      'name': '行政区划：' + a.properties.NAME + '\n' + '确诊人数：' + a.properties.ALLPATIENT
                    },
                    symbol: [{
                        markerType: 'ellipse',
                        //'markerFile': imgURL_patient,
                        // 'markerWidth': { stops: [[6, 0], [14, 60]] },
                        // 'markerHeight': { stops: [[6, 0], [14, 60]] }
                      },
                      // {
                      //   'textFaceName' : 'sans-serif',
                      //   'textName' : '{name}',
                      //   'textSize' : 14,
                      //   'textDy'   : 24
                      // }
                    ]
                  }
                );
                if (a.properties.ALLPATIENT != '暂无数据') {
                  if ((parseInt(a.properties.ALLPATIENT) <= 50) && (parseInt(a.properties.ALLPATIENT) >= 0)) {
                    marker.updateSymbol({
                      'markerWidth': {
                        stops: [
                          [6, 0],
                          [14, 50]
                        ]
                      },
                      'markerHeight': {
                        stops: [
                          [6, 0],
                          [14, 50]
                        ]
                      },
                      'markerFill': 'rgb(0,255,0)',
                      'markOpacity': 0.5,
                      'lineColor': '#fff',
                      'lineWidth': 0.3
                    });
                  } else if ((parseInt(a.properties.ALLPATIENT) > 50) && (parseInt(a.properties.ALLPATIENT) <=
                      200)) {
                    marker.updateSymbol({
                      'markerWidth': {
                        stops: [
                          [6, 0],
                          [14, 70]
                        ]
                      },
                      'markerHeight': {
                        stops: [
                          [6, 0],
                          [14, 70]
                        ]
                      },
                      'markerFill': 'rgb(255,255,0)',
                      'markOpacity': 0.5,
                      'lineColor': '#fff',
                      'lineWidth': 0.3
                    });
                  } else if (parseInt(a.properties.ALLPATIENT) > 200) {
                    marker.updateSymbol({
                      'markerWidth': {
                        stops: [
                          [6, 0],
                          [14, 90]
                        ]
                      },
                      'markerHeight': {
                        stops: [
                          [6, 0],
                          [14, 90]
                        ]
                      },
                      'markerFill': 'rgb(255,0,0)',
                      'markOpacity': 0.5,
                      'lineColor': '#fff',
                      'lineWidth': 0.3
                    });
                  };
                };
                patientLayer.addGeometry(marker);
              }
              Vue.mapInstance.addLayer(patientLayer);
              //信息框显示
              for (var j = 0; j < Vue.Patientfeatures.length; j++) {
                Vue.mapInstance.getLayer('patient').getGeometryById(j).setInfoWindow({
                  'title': '累计确诊人数',
                  'content': '行政区划：' + Vue.Patientfeatures[j].properties.NAME + ' ' + '确诊人数：' + Vue
                    .Patientfeatures[j].properties.ALLPATIENT,
                  'autoCloseOn': 'click'
                });
                // marker.openInfoWindow();
              }
            });
          }
        } else {
          Vue.mapInstance.getLayer('patient').hide()
        }
      },
      //加载区县疫情治愈图
      allHeal(i) {
        if (i) {
          if (Vue.mapInstance.getLayer('heal') != null) {
            Vue.mapInstance.getLayer('heal').show()
            //信息框显示
            // const features = result.features;
            for (var j = 0; j < Vue.features.length; j++) {
              Vue.mapInstance.getLayer('heal').getGeometryById(j).setInfoWindow({
                'title': '累计治愈人数',
                'content': '行政区划：' + Vue.features[j].properties.NAME + ' ' + '治愈人数：' + Vue.features[j].properties
                  .ALLREHEAL,
                'autoCloseOn': 'click'
              });
              //Vue.mapInstance.getLayer('heal').getGeometryById(4).openInfoWindow();
            }
          } else {
            fetch("https://ncp.gsafety.com/coronavius/assets/hbqx.json").then(result => result.json()).then(result => {
              Vue.features = result.features;
              var healLayer = new maptalks.VectorLayer('heal');
              for (var i = 0; i < Vue.features.length; i++) {
                var a = Vue.features[i];
                if (!a.properties.ALLREHEAL) {
                  a.properties.ALLREHEAL = '暂无数据';
                }
                var marker = new maptalks.Marker(
                  a.geometry.coordinates, {
                    'id': i,
                    'properties': {
                      'name': '行政区划：' + a.properties.NAME + '/n' + '治愈人数：' + a.properties.ALLREHEAL
                    },
                    symbol: [{
                      'markerType': 'ellipse',
                      // 'markerWidth': { stops: [[6, 0], [14, 60]] },
                      // 'markerHeight': { stops: [[6, 0], [14, 60]] }
                    }, ]
                  }
                );
                if (a.properties.ALLREHEAL != '暂无数据') {
                  if ((parseInt(a.properties.ALLREHEAL) <= 50) && (parseInt(a.properties.ALLREHEAL) >= 0)) {
                    marker.updateSymbol({
                      'markerWidth': {
                        stops: [
                          [6, 0],
                          [14, 50]
                        ]
                      },
                      'markerHeight': {
                        stops: [
                          [6, 0],
                          [14, 50]
                        ]
                      },
                      'markerFill': 'rgb(255,0,0)',
                      'markOpacity': 0.5,
                      'lineColor': '#fff',
                      'lineWidth': 0.3
                    });
                  } else if ((parseInt(a.properties.ALLREHEAL) <= 200) && (parseInt(a.properties.ALLREHEAL) > 50)) {
                    marker.updateSymbol({
                      'markerWidth': {
                        stops: [
                          [6, 0],
                          [14, 70]
                        ]
                      },
                      'markerHeight': {
                        stops: [
                          [6, 0],
                          [14, 70]
                        ]
                      },
                      'markerFill': 'rgb(255,255,0)',
                      'markOpacity': 0.5,
                      'lineColor': '#fff',
                      'lineWidth': 0.3
                    });
                  } else if (parseInt(a.properties.ALLREHEAL) > 200) {
                    marker.updateSymbol({
                      'markerWidth': {
                        stops: [
                          [6, 0],
                          [14, 90]
                        ]
                      },
                      'markerHeight': {
                        stops: [
                          [6, 0],
                          [14, 90]
                        ]
                      },
                      'markerFill': 'rgb(0,255,0)',
                      'markOpacity': 0.5,
                      'lineColor': '#fff',
                      'lineWidth': 0.3
                    });
                  };
                };
                healLayer.addGeometry(marker);
              }
              Vue.mapInstance.addLayer(healLayer);
              //信息框显示
              for (var j = 0; j < Vue.features.length; j++) {
                Vue.mapInstance.getLayer('heal').getGeometryById(j).setInfoWindow({
                  'title': '累计治愈人数',
                  'content': '行政区划：' + Vue.features[j].properties.NAME + ' ' + '治愈人数：' + Vue.features[j]
                    .properties.ALLREHEAL,
                  'autoCloseOn': 'click'
                });
                // marker.openInfoWindow();
              }
            });
          }
        } else {
          Vue.mapInstance.getLayer('heal').hide()
        }
      },

      //加载行政区划
      boundary() {
        if (Vue.mapInstance.getLayer('boundary') != null) {
          Vue.mapInstance.getLayer('boundary').show()
        } else {
          fetch("https://ncp.gsafety.com/coronavius/assets/county.json").then(result => result.json()).then(county => {
            Vue.mapInstance.addLayer(new maptalks.VectorLayer('boundary'))
            const geometries = maptalks.GeoJSON.toGeometry(county);
            const vectorLayer = Vue.mapInstance.getLayer('boundary').addGeometry(geometries);
            //设置style
            vectorLayer.setStyle([{
              'symbol': {
                'lineColor': '#000',
                'lineWidth': 0.8
              }
            }]);
            Vue.mapInstance.getLayer('boundary').bringToBack()
          });
        }

      },
      //加载影像底图
      hybird_map() {
        Vue.mapInstance.removeLayer("base");
        const dpr = Vue.mapInstance.getDevicePixelRatio();
        const scaler = dpr > 1 ? 2 : 1;
        Vue.mapInstance.setBaseLayer(new maptalks.TileLayer("base", {
          'urlTemplate': `https://maponline0.bdimg.com/starpic/?qt=satepc&u=x={x};y={y};z={z};v=009;type=sate&fm=46&app=webearth2&v=009&udt=20200225`,
          'subdomains': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          'attribution': '&copy; <a target="_blank" href="https://map.baidu.com">Baidu</a>'
        }));
        // this.$options.methods.boundary();
      },

      //加载矢量地图e
      Vector_map() {
        Vue.mapInstance.removeLayer("base");
        const dpr = Vue.mapInstance.getDevicePixelRatio();
        const scaler = dpr > 1 ? 2 : 1;
        Vue.mapInstance.setBaseLayer(new maptalks.TileLayer("base", {
          'urlTemplate': `https://online2.map.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=${scaler}&udt=20190704`,
          'subdomains': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          'attribution': '&copy; <a target="_blank" href="https://map.baidu.com">Baidu</a>'
        }));
      },

      //3公里内确诊人数
      patient_3(lon, lat) {
        var patient_3 = [];
        var patient_3Layer = new maptalks.VectorLayer('patient_3');
        Vue.mapInstance.addLayer(patient_3Layer);
        const circle = new maptalks.Circle([lon, lat], 3000);
        patient_3Layer.addGeometry(circle);
        fetch("https://ncp.gsafety.com/coronavius/assets/jxpoints.json").then(result => result.json()).then(result => {
          const jxpatients = result.features;
          var jxmultiponits = [];
          for (var i = 0; i < jxpatients.length; i++) {
            jxmultiponits.push(jxpatients[i].geometry.coordinates);
          }
          var r = new maptalks.MultiPoint(jxmultiponits);
          patient_3Layer.addGeometry(r);
          var jxpoints2 = patient_3Layer.getGeometries();
          //console.log(jxpoints2[1]._geometries.length);
          for (var j = 0; j < jxpoints2[1]._geometries.length; j++) {
            var contains_3 = circle.containsPoint(jxpoints2[1]._geometries[j]._coordinates);
            if (contains_3) {
              patient_3.push(jxpatients[j].properties);
            }
          }
          Vue.mapInstance.removeLayer('patient_3Layer');
          // console.log(patient_3);
          return patient_3;
        });
      },
      //汉阳地块
      parcel(i) {
        if (i) {
          if (Vue.mapInstance.getLayer('parcel') != null) {
            Vue.mapInstance.getLayer('parcel').show()
          } else {
            var parcelLayer = new maptalks.VectorLayer('parcel')
            var polygon = new maptalks.Polygon([
              [
                [114.280435, 30.554898],
                [114.260435, 30.555898],
                [114.260435, 30.550898],
                [114.265435, 30.546898],
                [114.277435, 30.549898],
                [114.280435, 30.554898],
              ]
            ], {
              visible: true,
              editable: true,
              cursor: 'pointer',
              shadowBlur: 0,
              shadowColor: 'black',
              draggable: false,
              dragShadow: false, // display a shadow during dragging
              drawOnAxis: null, // force dragging stick on a axis, can be: x, y
              symbol: {
                'lineColor': '#34495e',
                'lineWidth': 2,
                'polygonFill': 'rgb(135,196,240)',
                'polygonOpacity': 0.6
              }
            });
            parcelLayer.addGeometry(polygon);
            Vue.mapInstance.addLayer(parcelLayer);
          }
        } else {
          Vue.mapInstance.getLayer('parcel').hide()
        }
      },
      //汉阳地块marker
      HYmarker() {
        // console.log(marker_Self.marker_Self)
        Vue.marker_Self = marker_Self;
        var marker_SelfLayer = new maptalks.VectorLayer('marker_Self');
        for (var i = 0; i < 7; i++) {
          var a = marker_Self.marker_Self[i];
          var marker = new maptalks.Marker(
            a.coordinates, {
              'id': i,
              'properties': {
                'name': '地块名称：' + a.name + '\n' + '详细信息：' + a.content
              },
              symbol: [{
                // markerType: 'ellipse',
                'markerFile': imgURL_loc,
                // 'markerWidth': { stops: [[6, 0], [14, 60]] },
                // 'markerHeight': { stops: [[6, 0], [14, 60]] }
              }, ]
            }
          );
          marker_SelfLayer.addGeometry(marker);
        }
        Vue.mapInstance.addLayer(marker_SelfLayer);
        console.log(Vue.mapInstance)
        //信息框显示marker_self.
        for (var j = 0; j < 7; j++) {
          Vue.mapInstance.getLayer('marker_Self').getGeometryById(j).setInfoWindow({
            'title': '地块信息',
            'content': '<div style="font-size:14px;">' + '地块名称：' + marker_Self.marker_Self[j].name + '<br/>' +
              '<br/>' + '详细信息：' + marker_Self
              .marker_Self[j].content + '</div>',
            'autoCloseOn': 'click',
            // 'autoPan': true,
            // 'width': 430,
          });
        }
      },
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
        Vue.mapInstance.addLayer(new maptalks.VectorLayer('v1'))
        var county = tdxx.tdxx[0]
        const geometries = maptalks.GeoJSON.toGeometry(county);
        for (var i = 0; i < geometries.length; i++) {
          var a = geometries[i];
          a._id = i
        }
        const vectorLayer = Vue.mapInstance.getLayer('v1').addGeometry(geometries);
        //设置style
        vectorLayer.setStyle([{
            'symbol': {
                'lineColor': '#34495e',
                'lineWidth': 2,
                'polygonFill': 'rgb(135,196,240)',
                'polygonOpacity': 0.6
            }
          }]);
        // Vue.mapInstance.addLayer(vectorLayer);
        Vue.mapInstance.getLayer('v1').bringToBack()
       //信息框显示marker_self.
        for (var j = 0; j < geometries.length; j++) {
          Vue.mapInstance.getLayer('v1').getGeometryById(j).setInfoWindow({
            'content': '<div style="font-size:14px;">' + '<B>' + geometries[j].properties.name +'</B>'+ '<br/><br/>'
             + '<B>位置：</B>' + geometries[j].properties.location +'<br/><br/>'
             + '<B>面积：</B>' + geometries[j].properties.area +'亩<br/><br/>'
             + '<B>公建比：</B>' + geometries[j].properties.proportion +'<br/><br/>'
             + '<B>招商方向：</B>' + geometries[j].properties.direction +'<br/><br/>'
             + '<B>详细信息：</B>' + geometries[j].properties.around + '</div>',
            'autoCloseOn': 'click',
            // 'autoPan': true,
            // 'width': 430,
          });
        }
      },
      //楼宇
      HYbuildings(){
        Vue.mapInstance.addLayer(new maptalks.VectorLayer('ly'))
        var county = lyxx.lyxx[0]
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
            }
          }]);
        // Vue.mapInstance.addLayer(vectorLayer);
        Vue.mapInstance.getLayer('ly').bringToBack()
       //信息框显示marker_self.
        for (var j = 0; j < geometries.length; j++) {
          Vue.mapInstance.getLayer('ly').getGeometryById(j).setInfoWindow({
            'content': '<div style="font-size:14px;">' + '<B>' + geometries[j].properties.name +'</B>'+ '<br/><br/>'
             + '<B>位置：</B>' + geometries[j].properties.address +'<br/><br/>'
             + '<B>层数：</B>' + geometries[j].properties.floor_num +'<br/><br/>'
             + '<B>建筑体量（平米）：</B>' + geometries[j].properties.volume +'<br/><br/>'
             + '<B>已入驻企业数量：</B>' + geometries[j].properties.settled_en +'<br/><br/>'
             + '<B>客梯数量：</B>' + geometries[j].properties.passenger_ +'<br/><br/>'
             + '<B>停车位数量：</B>' + geometries[j].properties.parking_nu +'<br/><br/>'
             + '<B>租金（元/平米每月）：</B>' + geometries[j].properties.monthly_re +'<br/><br/>'
             + '<B>物业管理费（元/平米每月）：</B>' + geometries[j].properties.property_m + '<br/><br/>'
             + '<a href="https://720yun.com/t/a472babuccs?scene_id=844024" >查看照片</a>'+'</div>',
            'autoCloseOn': 'click',
            // 'autoPan': true,
            // 'width': 430,
          });
        }
      },
      //根据属性筛选土地
      TDfilter(value1,value2,value3) {
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
                Vue.mapInstance.getLayer('v1').filter(['!=', 'id', null])
                  .forEach(function (feature) {
                    feature.show();
                });
            }
            else{
                 Vue.mapInstance.getLayer('v1').filter(['==', 'dev_degree', v3])
                  .forEach(function (feature) {
                    feature.show();
                });             
            }
          }
          else{
            if(v3 == '0'){
                 Vue.mapInstance.getLayer('v1').filter(['==', 'use', v2])
                  .forEach(function (feature) {
                    feature.show();
                });   
            }
            else{
                Vue.mapInstance.getLayer('v1').filter(['==', 'use', v2])
                  .forEach(function (feature) {
                    if(feature.properties.dev_degree == v3){feature.show();}
                });   
            }
          }
        }
        else{
          if(v2 == '0'){
            if(v3 == '0'){
                 Vue.mapInstance.getLayer('v1').filter(['==', 'street', v1])
                  .forEach(function (feature) {
                    feature.show();
                });          
            }
            else{
                 Vue.mapInstance.getLayer('v1').filter(['==', 'street', v1])
                  .forEach(function (feature) {
                    if(feature.properties.dev_degree == v3){feature.show();}
                });   
            }
          }
          else{
            if(v3 == '0'){
                 Vue.mapInstance.getLayer('v1').filter(['==', 'street', v1])
                  .forEach(function (feature) {
                    if(feature.properties.use == v2){feature.show();}
                });   
            }
            else{
                Vue.mapInstance.getLayer('v1').filter(['==', 'street', v1])
                  .forEach(function (feature) {
                    if(feature.properties.use == v2)
                      if(feature.properties.dev_degree == v3)
                        {feature.show();}
                });   
            }
          }
        }
      },     

      TDfilter1(value1) {
        var v1 = String(value1)
        Vue.mapInstance.getLayer('v1').filter(['!=', 'id', null])
          .forEach(function (feature) {
            feature.hide();
        });
        if (v1 == '0' ){
          Vue.mapInstance.getLayer('v1').filter(['!=', 'id', null])
          .forEach(function (feature) {
            feature.show();
          });
        }
        else{
          Vue.mapInstance.getLayer('v1').filter(['==', 'street', v1])
            .forEach(function (feature) {
              feature.show();
          });
        }
      },

      TDfilter2(value2) {
        var v2 = String(value2)
        Vue.mapInstance.getLayer('v1').filter(['!=', 'id', null])
          .forEach(function (feature) {
            feature.hide();
        });
        if (v2 == '0' ){
          Vue.mapInstance.getLayer('v1').filter(['!=', 'id', null])
          .forEach(function (feature) {
            feature.show();
          });
        }
        else{
          Vue.mapInstance.getLayer('v1').filter(['==', 'use', v2])
            .forEach(function (feature) {
              feature.show();
            });
        }
      },

      TDfilter3(value3) {
        var v3 = String(value3)
        Vue.mapInstance.getLayer('v1').filter(['!=', 'id', null])
          .forEach(function (feature) {
            feature.hide();
        });
        if (v3 == '0' ){
          Vue.mapInstance.getLayer('v1').filter(['!=', 'id', null])
          .forEach(function (feature) {
            feature.show();
          });
        }
        else{
          Vue.mapInstance.getLayer('v1').filter(['==', 'dev_degree', v3])
            .forEach(function (feature) {
              feature.show();
            });
        }
        },

   },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      //构建map
      var image = new Image();
      image = imgURL_jd;
      Vue.mapInstance = new maptalks.Map("WebMap", {
        // center: [113.5, 31.1],
        center: [114.241649, 30.530374],
        zoom: 14,
        // pitch: 50,
        // zoom: 17,
        spatialReference: {
          projection: 'baidu'
        },
        // layers: [
        //   new maptalks.VectorLayer('v')
        // ]
      });
      const dpr = Vue.mapInstance.getDevicePixelRatio();
      const scaler = dpr > 1 ? 2 : 1;
      //https://maponline0.bdimg.com/starpic/?qt=satepc&u=x=778;y=218;z=12;v=009;type=sate&fm=46&app=webearth2&v=009&udt=20200225
      Vue.mapInstance.setBaseLayer(new maptalks.TileLayer("base", {
        'urlTemplate': `http://online2.map.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=${scaler}&udt=20190704`,
        'subdomains': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        'attribution': '&copy; <a target="_blank" href="https://map.baidu.com">Baidu</a>'
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