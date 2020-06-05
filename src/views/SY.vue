<template>
    <el-container direction='vertical' class="bg">
        <el-header type="flex" justify="end">
            <el-col :span="3">
                <el-image style="width:30px; height:34px" :src="images[5]" fit="fill" @click="RouteFWZY"></el-image>
            </el-col>
            <el-col :span="3">
                <el-image style="width:30px; height:34px" :src="images[6]" fit="fill" @click="RouteHYC"></el-image>
            </el-col>
        </el-header>
        <el-main>
            <el-row type="flex" justify="center" class="logo">
                <el-col :span="28">
                    <el-image style="width: 100%; height: 100%" :src="logo" fit="fill"></el-image>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center">
                <el-col :span="8">
                    <el-image
                        style="width: 100px; height: 110px"
                        :src="images[0]"
                        fit="fill"
                        @click="RouteDT"></el-image>
                </el-col>
                <el-col :span="8">
                    <el-image
                        style="width: 100px; height: 110px"
                        :src="images[1]"
                        fit="fill"
                        @click="RouteLY"></el-image>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center">
                <el-col :span="8" style="al">
                    <el-image
                        style="width: 100px; height: 110px"
                        :src="images[2]"
                        fit="fill"
                        @click="RouteZSZC"></el-image>
                </el-col>
                <el-col :span="8">
                    <el-image
                        style="width: 100px; height: 110px"
                        :src="images[3]"
                        fit="fill"
                        @click="RouteZSTJ"></el-image>
                </el-col>
                <el-col :span="8">
                    <el-image
                        style="width: 100px; height: 110px"
                        :src="images[4]"
                        fit="fill"
                        @click="RouteZDCY"></el-image>
                </el-col>
            </el-row>
        </el-main>
        <el-footer class="text">
            {{footerText}}
        </el-footer>
    </el-container>
</template>

<script>

    import Vue from "vue";

    // 微信分享拦截，转用SDK指定分享信息 import wx from 'weixin-js-sdk';

    export default {
        name: "SY",

        components: {},

        data() {
            return {
                logo: 'http://www.hyzsydt.top/cdn/ui/logo.png',
                images: [
                    'http://www.hyzsydt.top/cdn/ui/土地信息.png', 
                    'http://www.hyzsydt.top/cdn/ui/楼宇信息.png', 
                    'http://www.hyzsydt.top/cdn/ui/招商政策.png', 
                    'http://www.hyzsydt.top/cdn/ui/招商推介.png', 
                    'http://www.hyzsydt.top/cdn/ui/重点产业.png',
                    'http://www.hyzsydt.top/cdn/ui/新手引导.png',
                    'http://www.hyzsydt.top/cdn/ui/欢迎页.png'
                ],
                isFull: false,
                totalData: {
                    cure: 16,
                    confirm: 17,
                    new: 0
                },
                footerText: '版权所有©汉阳区商务局   技术支持:武汉大学测绘学院',
                outerVisible: false,
                innerVisible_0: false,
                innerVisible_1: false,
                modalvisible: false,
                alertText: "",
                fullscreen1: true
            };
        },

        methods: {
            RouteZSTJ() {
                this
                    .$router
                    .push({path: "/ZSTJ2"});
            },
            RouteDT() {
                this
                    .$router
                    .push({path: "/TDXX"});
            },
            RouteLY() {
                this
                    .$router
                    .push({path: "/LYXX"});
            },
            RouteZSZC() {
                this
                    .$router
                    .push({path: "/ZSZC"});
            },
            RouteZDCY() {
                this
                    .$router
                    .push({path: "/ZDCY"});
            },
            RouteHYC() {
                this
                    .$router
                    .push({path: "/HYC"});
            },
            RouteFWZY() {
                this
                    .$router
                    .push({path: "/FWZY"});
            }
        },

        mounted() {}

    };
</script>

<style scoped="scoped">

    body {
        overflow: hidden;
    }

    .el-header{
      float: right;
      padding: 2vw;
      display: flex;
      justify-content: end;
      text-align: center;
      flex-direction: row-reverse;
    }

    .el-main {
        padding: 0;
    }

    .el-main .el-col {
        display: flex;
        justify-content: center;
    }

    .text {
        display: flex;
        justify-content: center;
        text-align: center;
        font-size: 3.6vw;
        color: white;
        text-shadow: 5px 2px 10px #000;
        /* 垂直居中 */
        /* align-items: center;  */
    }

    .bg {
        display: flex;
        height: 100%;
        width: 100%;
        background-size: 100% 100%;
        background-image: url("./../assets/汉阳-00.png");
    }
</style>