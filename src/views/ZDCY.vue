<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :span="24">
                    <el-image
                        style="width:100%; height:100%"
                        src="http://www.hyzsydt.top/cdn/ui/生命健康.png"
                        fit="scale-down"
                        @click="RouteJKCY"></el-image>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-image
                        style="width:100%; height:100%"
                        src="http://www.hyzsydt.top/cdn/ui/会展产业.png"
                        fit="scale-down"
                        @click="RouteHZCY"></el-image>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-image
                        style="width:100%; height:100%"
                        src="http://www.hyzsydt.top/cdn/ui/路桥工程.png"
                        fit="scale-down"
                        @click="RouteLQGC"></el-image>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-image
                        style="width:100%; height:100%"
                        src="http://www.hyzsydt.top/cdn/ui/汽车后市场.png"
                        fit="scale-down"
                        @click="RouteQCHSC"></el-image>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-image
                        style="width:100%; height:100%"
                        src="http://www.hyzsydt.top/cdn/ui/文化创意.png"
                        fit="scale-down"
                        @click="RouteWHCYSC"></el-image>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-image
                        style="width:100%; height:100%"
                        src="http://www.hyzsydt.top/cdn/ui/金融产业.png"
                        fit="scale-down"
                        @click="RouteJRCY"></el-image>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-link href="http://hyrd.yeee.me/weixin/news/yryt">
                        <el-image
                            style="width:100%; height:100%"
                            src="http://www.hyzsydt.top/cdn/ui/重点企业.png"
                            fit="scale-down"></el-image>
                    </el-link>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    import Vue from "vue";

    export default {
        name: "ZDCY",
        data() {
            return {
                // currentDate: new Date()
            };
        },
        methods: {
            RouteJKCY() {
                this
                    .$router
                    .push({path: "/JKCY"});
            },
            RouteHZCY() {
                this
                    .$router
                    .push({path: "/HZCY"});
            },
            RouteWHCYSC() {
                this
                    .$router
                    .push({path: "/WHCYSC"});
            },
            RouteJRCY() {
                this
                    .$router
                    .push({path: "/JRCY"});
            },
            RouteLQGC() {
                this
                    .$router
                    .push({path: "/LQGC"});
            },
            RouteQCHSC() {
                this
                    .$router
                    .push({path: "/QCHSC"});
            }
        }
    };
</script>

<!-- 限定局部有效的样式 -->
<style scoped="scoped">
    .details {
        font-size: 13px;
        color: #999;
    }
    .title {
        font-size: 32px;
        font-weight: bold;
        color: #333;
        /*line-height: 20px;*/
        /*padding-bottom: 20px;*/
    }
    .bottom {
        margin-top: 30px;
        line-height: 12px;
    }
    #img {
        display: inline-block;
        height: auto;
        max-width: 100%;
    }
    .row {
        padding: 3% 4% 2%;
    }
    .clearfix:after,
    .clearfix:before {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both;
    }
</style>