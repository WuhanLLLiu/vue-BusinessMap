<template>
    <div id="jiangxia">
        <img id='img' src="./../assets/Banner.png" width="100%">
        <p id="title">江夏区疫情综合风险分析系统</p>
        <webmap ref="webmap"></webmap>
        <info ref='info'></info>
        <Drawer ref='Drawer'></Drawer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import * as maptalks from 'maptalks';
    import 'maptalks/dist/maptalks.css';

    import Drawer from './../components/Drawer';
    import webmap from './../components/webmap';
    import info from './../components/info';
    import { MP } from './../components/map.js'

    export default {
        name: 'jiangxia',
        
        components: {
           Drawer : Drawer,
           webmap : webmap,
           info : info
        },

        data(){
            return{
            }
        },

        methods: {    
            patient(lon,lat) {
                console.log(lon)
                console.log(lat)
                this.$refs.webmap.patient_3(lon,lat);
            }
        },

        mounted () {
            const _this = this
            MP(_this.ak).then(BMap => {
                var geolocation = new BMap.Geolocation();
                var gc = new BMap.Geocoder()
                geolocation.enableSDKLocation();
                geolocation.getCurrentPosition(function(r) {
                    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                        var lng = r.point.lng;
                        var lat = r.point.lat
                        console.log(r)
                        //获取地址信息
                        gc.getLocation(r.point, function(rs){    
                            var addComp = rs.addressComponents;
                            Vue.Address = addComp.street + addComp.streetNumber   
                            console.log(Vue.Address) 
                        });  
                        // Vue.mapInstance.setCenter([lng,lat])
                        Vue.mapInstance.setCenter([114.319815,30.360594])  
                        var point = new maptalks.Marker(
                            [114.319815,30.360594],
                                {
                                visible : true,
                                editable : true,
                                cursor : 'pointer',
                                shadowBlur : 0,
                                shadowColor : 'black',
                                draggable : false,
                                dragShadow : false, // display a shadow during dragging
                                drawOnAxis : null,  // force dragging stick on a axis, can be: x, y
                                symbol : {
                                    'markerType': 'ellipse',
                                    'markerWidth': 20,
                                    'markerHeight': 20,
                                    'markerFill': '#00CCFF',
                                    'markOpacity': 0.3,
                                    'lineColor': '#000',
                                    'lineWidth': 0.1
                                },
                            }
                        )
                        new maptalks.VectorLayer('jx', point).addTo(Vue.mapInstance); 
                    } else {
                        alert('failed' + this.getStatus());
                    }
                });
            })
        },
        
    }
</script>

<style>
    #img {
        position: fixed;
        width: 100%;
        height: auto;
        z-index: 2
    }
    #title {
        position: absolute;
        left: 5%;
        top: 1%;
        margin: 0;
        padding: 0;
        color: #fff;
        font: 1.2em'微软雅黑';
        z-index: 3
    }
</style>