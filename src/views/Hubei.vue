<template>
    <div id="app">
        <img id='img' src="./../assets/Banner.png" width="100%">
        <img id='legend' src="./../assets/fengxian.png" style="display:block">
        <img id='legend2' src="./../assets/quezhen.png" style="display:none">
        <img id='legend3' src="./../assets/zhiyu.png" style="display:none">
        <p id="title">湖北省疫情综合风险分析系统</p>
        <webmap ref="webmap"></webmap>
        <layer></layer>
        <mapChoose></mapChoose>
        <statistic></statistic>
    </div>
</template>

<script>
    import statistic from './../components/statistic';
    import webmap from './../components/webmap';
    import layer from './../components/layer';
    import mapChoose from './../components/mapChoose';
    //优化
    import FastClick from 'fastclick';
    export default {
        name: 'app',
        components: {
            webmap: webmap,
            statistic: statistic,
            layer: layer,
            mapChoose: mapChoose
        },
        methods: {
            display_img(i) {
                if (i) {
                    legend.style.display = "block";
                } else {
                    legend.style.display = "none";
                }
            },
            display_img2(i) {
                if (i) {
                    legend2.style.display = "block";
                } else {
                    legend2.style.display = "none";
                }
            },
            display_img3(i) {
                if (i) {
                    legend3.style.display = "block";
                } else {
                    legend3.style.display = "none";
                }
            },
            display_cluster(i) {
                // this.$refs.child1得到的子组件实例 
                this.$refs.webmap.markInfo(i);
            },
            display_heatmap(i) {
                this.$refs.webmap.heatMapInfo(i);
            },
            display_riskmap(i) {
                this.$refs.webmap.polygon(i);
            },
            display_patient(i) {
                this.$refs.webmap.allPatient(i);
            },
            display_heal(i) {
                this.$refs.webmap.allHeal(i);
            },
            hybird_map() {
                this.$refs.webmap.hybird_map();
            },
            Vector_map() {
                this.$refs.webmap.Vector_map();
            },
        },
        mounted() {
            //fastclick
            const str = navigator.userAgent.toLowerCase()
            const ver = str.match(/cpu iphone os (.*?) like mac os/)
            if (!ver) { //非IOS系统
                FastClick.attach(document.body)
            } else {
                if (parseInt(ver[1]) < 10) {
                    FastClick.attach(document.body)
                }
            }
        }
    }
</script>

<style>
    body,
    html,
    #app {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        z-index: 1
    }

    #legend {
        position: fixed;
        height: 4em;
        width: auto;
        z-index: 2;
        left: 3%;
        bottom: 20%;
    }

    #legend2 {
        position: fixed;
        height: 4em;
        width: auto;
        z-index: 2;
        left: 3%;
        bottom: 20%;
    }

    #legend3 {
        position: fixed;
        height: 4em;
        width: auto;
        z-index: 2;
        left: 3%;
        bottom: 20%;
    }

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

    * {
        touch-action: pan-y;
    }

    /* .el-divider {
        border-radius: 4px;
    } */
</style>