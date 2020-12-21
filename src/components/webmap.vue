<!-- 主要界面地图模版 -->
<template>
  <div id="WebMap"></div>
</template>

<script>
import Vue from "vue";
import * as maptalks from "maptalks";
import "maptalks/dist/maptalks.css";

import imgURL_loc from "../assets/marker.png";
import imgURL_loc2 from "../assets/choosed.png";

import imgURL_loc_area from "../assets/marker_area.png";
import imgURL_loc2_area from "../assets/choosed_area.png";

import imgURL_CYY1 from "../assets/汉阳造文化创意产业园.png";
import imgURL_CYY2 from "../assets/黄金口工业园.png";
import imgURL_CYY3 from "../assets/龙阳湖健康谷.png";

// import tdxx from '../assets/tdxx.js'
// import lyxx from '../assets/lyxx.js'
// import QJ from "../assets/vtour/tour.html"

//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "WebMap",
  components: {},
  data() {
    //这里存放数据
    return {
      TDitem: [],
      LYitem: [],
      LYid: 0,
      TDid: 0,
      imglist: []
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
      var threeLayer = new ThreeLayer("t", {
        forceRenderOnMoving: true,
        forceRenderOnRotating: true
      });
      var material = new THREE.MeshBasicMaterial({
        color: "white"
      });
      var highlightmaterial = new THREE.MeshBasicMaterial({
        color: "yellow"
      });
      threeLayer.prepareToDraw = function(gl, scene, camera) {
        var light = new THREE.DirectionalLight(0xffffff);
        light.position.set(0, -10, 10).normalize();
        scene.add(light);
        for (var i = 0; i < 5; i++) {
          var bar = threeLayer.toBar(
            bar_Self.bar_Self[i].coordinates,
            {
              height: 1000 * bar_Self.bar_Self[i].height,
              radius: 150,
              topColor: "white"
            },
            material
          );
          // tooltip test
          bar.setToolTip(bar_Self.bar_Self[i].name, {
            showTimeout: 0,
            eventsPropagation: true,
            dx: 10
          });
          //infowindow test
          bar.setInfoWindow({
            content:
              '<div style="font-size:14px;">' +
              bar_Self.bar_Self[i].content +
              "<br/>" +
              "<br/>" +
              bar_Self.bar_Self[i].contact +
              "<br/>" +
              bar_Self.bar_Self[i].img,
            title: bar_Self.bar_Self[i].name + "</div>",
            animationDuration: 0,
            // autoOpenOn: false,
            autoCloseOn: "click"
          });
          threeLayer.addMesh(bar);
          threeLayer.config("animation", true);
        }
      };
      threeLayer.addTo(Vue.mapInstance);
    },
    //地块
    HYparcel() {
      var that = this;
      fetch("http://121.196.60.135:1338/data/tdxx")
        .then(result => result.json())
        .then(result => {
          Vue.mapInstance.addLayer(new maptalks.VectorLayer("v1"));
          var county = JSON.parse(result.content);
          const geometries = maptalks.GeoJSON.toGeometry(county);
          for (var i = 0; i < geometries.length; i++) {
            var a = geometries[i];
            a._id = i;
          }
          const vectorLayer = Vue.mapInstance
            .getLayer("v1")
            .addGeometry(geometries);
          //设置style
          vectorLayer.setStyle([
            {
              symbol: {
                lineColor: "#2348E5",
                lineWidth: 2,
                polygonFill: "#355BFA",
                polygonOpacity: 0.6,
                markerFile: imgURL_loc_area,
                markerWidth: {
                  stops: [
                    [6, 0],
                    [14, 30]
                  ]
                },
                markerHeight: {
                  stops: [
                    [6, 0],
                    [14, 40]
                  ]
                }
              }
            }
          ]);
          Vue.mapInstance.getLayer("v1").bringToBack();
          //click 事件
          for (var j = 0; j < geometries.length; j++) {
            Vue.mapInstance
              .getLayer("v1")
              .getGeometryById(j)
              .on("click", function(param) {
                for (var a = 0; a < geometries.length; a++) {
                  Vue.mapInstance
                    .getLayer("v1")
                    .getGeometryById(a)
                    .updateSymbol({
                      lineColor: "#2348E5",
                      lineWidth: 4,
                      polygonFill: "#355BFA",
                      polygonOpacity: 0.6,
                      markerFile: imgURL_loc_area,
                      markerWidth: {
                        stops: [
                          [6, 0],
                          [14, 30]
                        ]
                      },
                      markerHeight: {
                        stops: [
                          [6, 0],
                          [14, 40]
                        ]
                      }
                    });
                }

                document.getElementById("bottom0").style.display = "block";
                document.getElementById("bottom0").style.height = "auto";
                document.getElementById("imgdk1").src = "";
                document.getElementById("imgdk2").src = "";
                document.getElementById("imgdk3").src = "";

                document.getElementById("name").innerHTML =
                  param.target.properties.name;
                document.getElementById("area").innerHTML =
                  param.target.properties.area + "亩";
                document.getElementById("proportion").innerHTML =
                  "公建比  " + param.target.properties.proportion;
                document.getElementById("direction").innerHTML =
                  param.target.properties.direction;
                document.getElementById("around").innerHTML =
                  param.target.properties.around;
                document.getElementById("location").innerHTML =
                  param.target.properties.location;
                that.TDid = param.target.properties.Id;
                that.$emit("changeTDid", that.TDid);

                param.target.updateSymbol({
                  lineColor: "#E52323",
                  lineWidth: 4,
                  polygonFill: "#FA3535",
                  polygonOpacity: 0.6,
                  markerFile: imgURL_loc2_area,
                  markerWidth: {
                    stops: [
                      [6, 0],
                      [14, 40]
                    ]
                  },
                  markerHeight: {
                    stops: [
                      [6, 0],
                      [14, 54]
                    ]
                  }
                });
              });
          }
        });
    },
    //楼宇
    HYbuildings() {
      var that = this;
      fetch("http://121.196.60.135:1338/data/lyxx")
        .then(result => result.json())
        .then(result => {
          Vue.mapInstance.addLayer(new maptalks.VectorLayer("ly"));
          var county = JSON.parse(result.content);
          const geometries = maptalks.GeoJSON.toGeometry(county);
          for (var i = 0; i < geometries.length; i++) {
            var a = geometries[i];
            a._id = i;
          }
          const vectorLayer = Vue.mapInstance
            .getLayer("ly")
            .addGeometry(geometries);
          //设置style
          vectorLayer.setStyle([
            {
              symbol: {
                markerFile: imgURL_loc,
                markerWidth: {
                  stops: [
                    [6, 0],
                    [14, 30]
                  ]
                },
                markerHeight: {
                  stops: [
                    [6, 0],
                    [14, 40]
                  ]
                }
              }
            }
          ]);
          Vue.mapInstance.getLayer("ly").bringToBack();
          //click 事件
          for (var j = 0; j < geometries.length; j++) {
            Vue.mapInstance
              .getLayer("ly")
              .getGeometryById(j)
              .on("click", function(param) {
                for (var a = 0; a < geometries.length; a++) {
                  Vue.mapInstance
                    .getLayer("ly")
                    .getGeometryById(a)
                    .updateSymbol({
                      markerFile: imgURL_loc,
                      markerWidth: {
                        stops: [
                          [6, 0],
                          [14, 30]
                        ]
                      },
                      markerHeight: {
                        stops: [
                          [6, 0],
                          [14, 40]
                        ]
                      }
                    });
                }

                document.getElementById("bottomly").style.display = "block";
                document.getElementById("bottomly").style.height = "auto";
                that.$emit("changeimgList", that.imglist);
                // document.getElementById("img1").src = "";
                // document.getElementById("img2").src = "";
                // document.getElementById("img3").src = "";

                document.getElementById("lyname").innerHTML =
                  param.target.properties.name;
                document.getElementById("lylocation").innerHTML =
                  param.target.properties.address;
                document.getElementById("lycs").innerHTML =
                  param.target.properties.floor_num;
                document.getElementById("lytl").innerHTML =
                  param.target.properties.volume;
                document.getElementById("lyqy").innerHTML =
                  param.target.properties.settled_en;
                document.getElementById("lykt").innerHTML =
                  param.target.properties.passenger_;
                document.getElementById("lytc").innerHTML =
                  param.target.properties.parking_nu;
                document.getElementById("lyzj").innerHTML =
                  param.target.properties.monthly_re;
                document.getElementById("lywy").innerHTML =
                  param.target.properties.property_m;
                document.getElementById("lcmj").innerHTML =
                  param.target.properties.Standard_f;
                document.getElementById("kzmj").innerHTML =
                  param.target.properties.vacant_are;                
                that.LYid = param.target.properties.id;
                that.$emit("changeLYid", that.LYid);

                param.target.updateSymbol({
                  markerFile: imgURL_loc2,
                  markerWidth: {
                    stops: [
                      [6, 0],
                      [14, 40]
                    ]
                  },
                  markerHeight: {
                    stops: [
                      [6, 0],
                      [14, 50]
                    ]
                  }
                });
              });
          }
        });
    },
    //加载产业园
    HYCYY(){
      var that = this;
      //汉阳造产业园
      var point = new maptalks.Marker(
        [114.26291, 30.55939],
        {
          id: 1,
          symbol : {
            markerFile: imgURL_CYY1,
            markerWidth: {
              stops: [
                [6, 0],
                [14, 40]
              ]
            },
            markerHeight: {
              stops: [
                [6, 0],
                [14, 40]
              ]
            }
          }
        }
      );
      //黄金口工业园
      var point2 = new maptalks.Marker(
        [114.15710, 30.58371],
        {
          id: 2,
          symbol : {
            markerFile: imgURL_CYY2,
            markerWidth: {
              stops: [
                [6, 0],
                [14, 40]
              ]
            },
            markerHeight: {
              stops: [
                [6, 0],
                [14, 40]
              ]
            }
          }
        }
      );
      //龙阳湖健康谷
      var point3 = new maptalks.Marker(
        [114.19250, 30.55256],
        {
          id: 3,
          symbol : {
            markerFile: imgURL_CYY3,
            markerWidth: {
              stops: [
                [6, 0],
                [14, 40]
              ]
            },
            markerHeight: {
              stops: [
                [6, 0],
                [14, 40]
              ]
            }
          }
        }
      );

      new maptalks.VectorLayer('CYY').addTo(Vue.mapInstance);
      point.addTo(Vue.mapInstance.getLayer("CYY"))
      point2.addTo(Vue.mapInstance.getLayer("CYY"))
      point3.addTo(Vue.mapInstance.getLayer("CYY"))
      console.log(Vue.mapInstance)
      Vue.mapInstance.getLayer("CYY").getGeometryById(1).on("click", function(param) {
        that.$emit('RouteHYZ')
      });
      Vue.mapInstance.getLayer("CYY").getGeometryById(2).on("click", function(param) {
        that.$emit('RouteHJK')
      });
      Vue.mapInstance.getLayer("CYY").getGeometryById(3).on("click", function(param) {
        that.$emit('RouteLYH')
      });
    },
    //根据属性筛选土地
    TDfilter(value1, value2, value3) {
      var that = this;
      var v1 = String(value1);
      var v2 = value2;
      var v3 = String(value3);
      Vue.mapInstance
        .getLayer("v1")
        .filter(["!=", "id", null])
        .forEach(function(feature) {
          feature.hide();
        });
      if (v1 == "0") {
        if (v2 == "0") {
          if (v3 == "0") {
            that.TDitem = [];
            Vue.mapInstance
              .getLayer("v1")
              .filter(["!=", "id", null])
              .forEach(function(feature) {
                feature.show();
                that.TDitem.push(feature.properties);
              });
            that.$emit("changeCard", that.TDitem);
          } else {
            that.TDitem = [];
            Vue.mapInstance
              .getLayer("v1")
              .filter(["==", "use", v3])
              .forEach(function(feature) {
                feature.show();
                that.TDitem.push(feature.properties);
              });
            that.$emit("changeCard", that.TDitem);
          }
        } else {
          if (v3 == "0") {
            that.TDitem = [];
            Vue.mapInstance
              .getLayer("v1")
              .filter(["==", "area1", v2])
              .forEach(function(feature) {
                feature.show();
                that.TDitem.push(feature.properties);
              });
            that.$emit("changeCard", that.TDitem);
          } else {
            that.TDitem = [];
            Vue.mapInstance
              .getLayer("v1")
              .filter(["==", "area1", v2])
              .forEach(function(feature) {
                if (feature.properties.use == v3) {
                  feature.show();
                  that.TDitem.push(feature.properties);
                }
              });
            that.$emit("changeCard", that.TDitem);
          }
        }
      } else {
        if (v2 == "0") {
          if (v3 == "0") {
            that.TDitem = [];
            Vue.mapInstance
              .getLayer("v1")
              .filter(["==", "street", v1])
              .forEach(function(feature) {
                feature.show();
                that.TDitem.push(feature.properties);
              });
            that.$emit("changeCard", that.TDitem);
          } else {
            that.TDitem = [];
            Vue.mapInstance
              .getLayer("v1")
              .filter(["==", "street", v1])
              .forEach(function(feature) {
                if (feature.properties.use == v3) {
                  feature.show();
                  that.TDitem.push(feature.properties);
                }
              });
            that.$emit("changeCard", that.TDitem);
          }
        } else {
          if (v3 == "0") {
            that.TDitem = [];
            Vue.mapInstance
              .getLayer("v1")
              .filter(["==", "street", v1])
              .forEach(function(feature) {
                if (feature.properties.area1 == v2) {
                  feature.show();
                  that.TDitem.push(feature.properties);
                }
              });
            that.$emit("changeCard", that.TDitem);
          } else {
            that.TDitem = [];
            Vue.mapInstance
              .getLayer("v1")
              .filter(["==", "street", v1])
              .forEach(function(feature) {
                if (feature.properties.area1 == v2)
                  if (feature.properties.use == v3) {
                    feature.show();
                    that.TDitem.push(feature.properties);
                  }
              });
            that.$emit("changeCard", that.TDitem);
          }
        }
      }
    },
    //根据属性筛选楼宇
    LYfilter(value1, value2, value3) {
      var that = this;
      var v1 = value1;
      var v2 = value2;
      var v3 = value3;
      Vue.mapInstance
        .getLayer("ly")
        .filter(["!=", "id", null])
        .forEach(function(feature) {
          feature.hide();
        });
      if (v1 == "0") {
        if (v2 == "0") {
          if (v3 == "0") {
            that.LYitem = [];
            Vue.mapInstance
              .getLayer("ly")
              .filter(["!=", "id", null])
              .forEach(function(feature) {
                feature.show();
                that.LYitem.push(feature.properties);
              });
            that.$emit("changeLYCard", that.LYitem);
          } else {
            that.LYitem = [];
            Vue.mapInstance
              .getLayer("ly")
              .filter(["==", "vacant1", v3])
              .forEach(function(feature) {
                feature.show();
                that.LYitem.push(feature.properties);
              });
            that.$emit("changeLYCard", that.LYitem);
          }
        } else {
          if (v3 == "0") {
            that.LYitem = [];
            Vue.mapInstance
              .getLayer("ly")
              .filter(["==", "volume1", v2])
              .forEach(function(feature) {
                feature.show();
                that.LYitem.push(feature.properties);
              });
            that.$emit("changeLYCard", that.LYitem);
          } else {
            that.LYitem = [];
            Vue.mapInstance
              .getLayer("ly")
              .filter(["==", "volume1", v2])
              .forEach(function(feature) {
                if (feature.properties.vacant1 == v3) {
                  feature.show();
                  that.LYitem.push(feature.properties);
                }
              });
            that.$emit("changeLYCard", that.LYitem);
          }
        }
      } else {
        if (v2 == "0") {
          if (v3 == "0") {
            that.LYitem = [];
            Vue.mapInstance
              .getLayer("ly")
              .filter(["==", "street1", v1])
              .forEach(function(feature) {
                feature.show();
                that.LYitem.push(feature.properties);
              });
            that.$emit("changeLYCard", that.LYitem);
          } else {
            that.LYitem = [];
            Vue.mapInstance
              .getLayer("ly")
              .filter(["==", "street1", v1])
              .forEach(function(feature) {
                if (feature.properties.vacant1 == v3) {
                  feature.show();
                  that.LYitem.push(feature.properties);
                }
              });
            that.$emit("changeLYCard", that.LYitem);
          }
        } else {
          if (v3 == "0") {
            that.LYitem = [];
            Vue.mapInstance
              .getLayer("ly")
              .filter(["==", "street1", v1])
              .forEach(function(feature) {
                if (feature.properties.volume1 == v2) {
                  feature.show();
                  that.LYitem.push(feature.properties);
                }
              });
            that.$emit("changeLYCard", that.LYitem);
          } else {
            that.LYitem = [];
            Vue.mapInstance
              .getLayer("ly")
              .filter(["==", "street1", v1])
              .forEach(function(feature) {
                if (feature.properties.volume1 == v2)
                  if (feature.properties.vacant1 == v3) {
                    feature.show();
                    that.LYitem.push(feature.properties);
                  }
              });
            that.$emit("changeLYCard", that.LYitem);
          }
        }
      }
    },
    //加载影像底图
    hybird_map() {
      Vue.mapInstance.removeLayer("base");
      Vue.mapInstance.setBaseLayer(
        new maptalks.TileLayer("base", {
          urlTemplate: "http://121.196.60.135:1338/layer/google/{z}/{x}/{y}",
          attribution:
            '&copy; <a href="https://map.tianditu.gov.cn//">天地图</a>,&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
        })
      );
    },
    //加载矢量地图e
    Vector_map() {
      Vue.mapInstance.removeLayer("base");
      const dpr = Vue.mapInstance.getDevicePixelRatio();
      const scaler = dpr > 1 ? 2 : 1;
      //tdt
      Vue.mapInstance.setBaseLayer(
        new maptalks.TileLayer("base", {
          urlTemplate:
            "http://{s}.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=d0c3c3be64e0042982f3d4a94cb15298",
          subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
          attribution:
            '&copy; <a href="https://map.tianditu.gov.cn//">天地图</a>,&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
        })
      );
      // console.log(Vue.mapInstance)
    },
    //获取楼宇
    LYchoose(id) {
      var that = this;
      Vue.mapInstance
        .getLayer("ly")
        .filter(["!=", "id", null])
        .forEach(function(feature) {
          feature.updateSymbol({
            markerFile: imgURL_loc,
            markerWidth: {
              stops: [
                [6, 0],
                [14, 30]
              ]
            },
            markerHeight: {
              stops: [
                [6, 0],
                [14, 40]
              ]
            }
          });
        });
      Vue.mapInstance
        .getLayer("ly")
        .filter(["==", "id", id])
        .forEach(function(feature) {
          feature.updateSymbol({
            markerFile: imgURL_loc2,
            markerWidth: {
              stops: [
                [6, 0],
                [14, 40]
              ]
            },
            markerHeight: {
              stops: [
                [6, 0],
                [14, 50]
              ]
            }
          });
          Vue.mapInstance.setCenter(feature.getCoordinates());
          document.getElementById("bottomly").style.display = "block";
          document.getElementById("bottomly").style.height = "auto";
          that.$emit("changeimgList", that.imglist);
          document.getElementById("lyname").innerHTML = feature.properties.name;
          document.getElementById("lylocation").innerHTML =
            feature.properties.address;
          document.getElementById("lycs").innerHTML =
            feature.properties.floor_num;
          document.getElementById("lytl").innerHTML = feature.properties.volume;
          document.getElementById("lyqy").innerHTML =
            feature.properties.settled_en;
          document.getElementById("lykt").innerHTML =
            feature.properties.passenger_;
          document.getElementById("lytc").innerHTML =
            feature.properties.parking_nu;
          document.getElementById("lyzj").innerHTML =
            feature.properties.monthly_re;
          document.getElementById("lywy").innerHTML =
            feature.properties.property_m;
          that.LYid = feature.properties.id;
          that.$emit("changeLYid", that.LYid);
        });
    },
    //获取土地
    TDchoose(id) {
      var that = this;
      Vue.mapInstance
        .getLayer("v1")
        .filter(["!=", "Id", null])
        .forEach(function(feature) {
          feature.updateSymbol({
            lineColor: "#2348E5",
            lineWidth: 4,
            polygonFill: "#355BFA",
            polygonOpacity: 0.6,
            markerFile: imgURL_loc_area,
            markerWidth: {
              stops: [
                [6, 0],
                [14, 30]
              ]
            },
            markerHeight: {
              stops: [
                [6, 0],
                [14, 40]
              ]
            }
          });
        });

      Vue.mapInstance
        .getLayer("v1")
        .filter(["==", "Id", id])
        .forEach(function(feature) {
          feature.updateSymbol({
            lineColor: "#E52323",
            lineWidth: 4,
            polygonFill: "#FA3535",
            polygonOpacity: 0.6,
            markerFile: imgURL_loc2_area,
            markerWidth: {
              stops: [
                [6, 0],
                [14, 40]
              ]
            },
            markerHeight: {
              stops: [
                [6, 0],
                [14, 54]
              ]
            }
          });
          Vue.mapInstance.setCenter(feature.getLastCoordinate());
          document.getElementById("bottom0").style.display = "block";
          document.getElementById("bottom0").style.height = "auto";
          document.getElementById("imgdk1").src = "";
          document.getElementById("imgdk2").src = "";
          document.getElementById("imgdk3").src = "";

          document.getElementById("name").innerHTML = feature.properties.name;
          document.getElementById("area").innerHTML =
            feature.properties.area + "亩";
          document.getElementById("proportion").innerHTML =
            "公建比  " + feature.properties.proportion;
          document.getElementById("direction").innerHTML =
            feature.properties.direction;
          document.getElementById("around").innerHTML =
            feature.properties.around;
          document.getElementById("location").innerHTML =
            feature.properties.location;
          that.TDid = feature.properties.Id;
          that.$emit("changeTDid", that.TDid);
        });
    },
    //搜索楼宇
    LYsearch(val) {
      var that = this;
      Vue.mapInstance
        .getLayer("ly")
        .filter(["!=", "id", null])
        .forEach(function(feature) {
          feature.updateSymbol({
            markerFile: imgURL_loc,
            markerWidth: {
              stops: [
                [6, 0],
                [14, 30]
              ]
            },
            markerHeight: {
              stops: [
                [6, 0],
                [14, 40]
              ]
            }
          });
        });

      Vue.mapInstance
        .getLayer("ly")
        .filter(["==", "name", val])
        .forEach(function(feature) {
          feature.updateSymbol({
            markerFile: imgURL_loc2,
            markerWidth: {
              stops: [
                [6, 0],
                [14, 40]
              ]
            },
            markerHeight: {
              stops: [
                [6, 0],
                [14, 50]
              ]
            }
          });
          Vue.mapInstance.setCenter(feature.getCoordinates());
          document.getElementById("bottomly").style.display = "block";
          document.getElementById("bottomly").style.height = "auto";
          that.$emit("changeimgList", that.imglist);
          document.getElementById("lyname").innerHTML = feature.properties.name;
          document.getElementById("lylocation").innerHTML =
            feature.properties.address;
          document.getElementById("lycs").innerHTML =
            feature.properties.floor_num;
          document.getElementById("lytl").innerHTML = feature.properties.volume;
          document.getElementById("lyqy").innerHTML =
            feature.properties.settled_en;
          document.getElementById("lykt").innerHTML =
            feature.properties.passenger_;
          document.getElementById("lytc").innerHTML =
            feature.properties.parking_nu;
          document.getElementById("lyzj").innerHTML =
            feature.properties.monthly_re;
          document.getElementById("lywy").innerHTML =
            feature.properties.property_m;
          that.LYid = feature.properties.id;
          that.$emit("changeLYid", that.LYid);
        });
    },
    //搜索土地
    TDsearch(val) {
      var that = this;
      Vue.mapInstance
        .getLayer("v1")
        .filter(["!=", "Id", null])
        .forEach(function(feature) {
          feature.updateSymbol({
            lineColor: "#2348E5",
            lineWidth: 4,
            polygonFill: "#355BFA",
            polygonOpacity: 0.6,
            markerFile: imgURL_loc_area,
            markerWidth: {
              stops: [
                [6, 0],
                [14, 30]
              ]
            },
            markerHeight: {
              stops: [
                [6, 0],
                [14, 40]
              ]
            }
          });
        });

      Vue.mapInstance
        .getLayer("v1")
        .filter(["==", "name", val])
        .forEach(function(feature) {
          feature.updateSymbol({
            lineColor: "#E52323",
            lineWidth: 4,
            polygonFill: "#FA3535",
            polygonOpacity: 0.6,
            markerFile: imgURL_loc2_area,
            markerWidth: {
              stops: [
                [6, 0],
                [14, 40]
              ]
            },
            markerHeight: {
              stops: [
                [6, 0],
                [14, 54]
              ]
            }
          });
          Vue.mapInstance.setCenter(feature.getLastCoordinate());
          document.getElementById("bottom0").style.display = "block";
          document.getElementById("bottom0").style.height = "auto";
          document.getElementById("imgdk1").src = "";
          document.getElementById("imgdk2").src = "";
          document.getElementById("imgdk3").src = "";

          document.getElementById("name").innerHTML = feature.properties.name;
          document.getElementById("area").innerHTML =
            feature.properties.area + "亩";
          document.getElementById("proportion").innerHTML =
            "公建比  " + feature.properties.proportion;
          document.getElementById("direction").innerHTML =
            feature.properties.direction;
          document.getElementById("around").innerHTML =
            feature.properties.around;
          document.getElementById("location").innerHTML =
            feature.properties.location;
          that.TDid = feature.properties.Id;
          that.$emit("changeTDid", that.TDid);
        });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //构建map
    var image = new Image();
    Vue.mapInstance = new maptalks.Map("WebMap", {
      center: [114.190649, 30.570374],
      zoom: 15
    });

    // Vue.mapInstance.setBaseLayer(
    //   new maptalks.TileLayer("base", {
    //     urlTemplate: "http://121.196.60.135:1338/layer/google/{z}/{x}/{y}",
    //     attribution:
    //       '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
    //   })
    // );
    Vue.mapInstance.setBaseLayer(
      new maptalks.TileLayer("base", {
        urlTemplate:
          "http://{s}.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=d0c3c3be64e0042982f3d4a94cb15298",
        subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
        attribution:
          '&copy; <a href="https://map.tianditu.gov.cn//">天地图</a>,&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
      })
    );
    Vue.mapInstance.addLayer(
      new maptalks.TileLayer("base2", {
        urlTemplate:
          "http://{s}.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=d0c3c3be64e0042982f3d4a94cb15298",
        subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"]
      })
    );
    Vue.mapInstance.setMaxZoom(18);
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