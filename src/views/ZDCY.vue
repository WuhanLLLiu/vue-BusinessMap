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