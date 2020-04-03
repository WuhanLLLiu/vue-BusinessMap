<template>
    <!-- indicator-position="inline" -->
    <el-carousel :interval="4000" arrow="always" indicator-position="none" :height="height">
        <el-carousel-item v-for="(item) in dataimg" :key="item">
            <img :src="item" class="imgbox">
            <!-- <p class="italictext">{{idx+1}}</p> -->
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        data() {
            return {
                dataimg: [
                    require('./../assets/zstj/1.png'),
                    require('./../assets/zstj/2.png'),
                    require('./../assets/zstj/3.png'),
                    require('./../assets/zstj/4.png'),
                    require('./../assets/zstj/5.png'),
                    require('./../assets/zstj/6.png'),
                    require('./../assets/zstj/7.png'),
                    require('./../assets/zstj/8.png'),
                    require('./../assets/zstj/9.png'),
                    require('./../assets/zstj/10.png'),
                    require('./../assets/zstj/11.png'),
                    require('./../assets/zstj/12.png'),
                    require('./../assets/zstj/13.png'),
                    require('./../assets/zstj/14.png'),
                    require('./../assets/zstj/15.png'),
                    require('./../assets/zstj/16.png'),
                    require('./../assets/zstj/17.png'),
                    require('./../assets/zstj/18.png'),
                    require('./../assets/zstj/19.png'),
                    require('./../assets/zstj/20.png'),
                    require('./../assets/zstj/21.png'),
                    require('./../assets/zstj/22.png'),
                    require('./../assets/zstj/23.png'),
                    require('./../assets/zstj/24.png'),
                    require('./../assets/zstj/25.png'),
                    require('./../assets/zstj/26.png'),
                    require('./../assets/zstj/27.png'),
                    require('./../assets/zstj/28.png'),
                    require('./../assets/zstj/29.png'),
                    require('./../assets/zstj/30.png'),
                    require('./../assets/zstj/31.png'),
                    require('./../assets/zstj/32.png'),
                    require('./../assets/zstj/33.png'),
                    require('./../assets/zstj/34.png'),
                    require('./../assets/zstj/35.png'),
                    require('./../assets/zstj/36.png'),
                    require('./../assets/zstj/37.png'),
                    require('./../assets/zstj/38.png'),
                    require('./../assets/zstj/39.png')
                ]
            }
        },

        methods: {
            resize() {
                let width = document.documentElement.clientWidth
                let height = document.documentElement.clientHeight
                if (width > height) {
                    this.height = document.documentElement.clientHeight + 'px';
                    this.$forceUpdate();
                } else {
                    this.height = document.documentElement.clientHeight + 'px';
                    this.$forceUpdate();
                }
            }
        },

        beforeMount() {
            let width = document.documentElement.clientWidth
            let height = document.documentElement.clientHeight
            if (width < height) {
                this.$alert('为了更好的浏览体验，建议您使用手机横屏观看', '提示', {
                    confirmButtonText: '确定',
                });
                this.height = document.documentElement.clientWidth + 'px';
                this.$forceUpdate();
            } else {
                this.height = document.documentElement.clientHeight + 'px';
                this.$forceUpdate();
            }
        },

        mounted() {
            window.addEventListener("resize", this.resize, false);
            // const that = this;
            // window.onresize = () => {
            //     that.carouselHeight = (window.innerHeight) + 'px';
            // }
        }
    }
</script>

<style>
    .container0 {
        /* display: flex; */
        align-items: center;
        vertical-align: middle;
        /* top: 50%; */
        /* margin-top: 50%; */
    }

    .italictext {
        color: black;
        margin-left: 12px;
        position: fixed;
        /* transform: rotate(-90deg); */
        /* padding: 5px; */
        /* padding-top: 0px; */
    }

    .imgbox {
        /* margin: auto; */
        height: 100%;
        /* width: 100%; */
        background-size: cover;
        /* 使图片平铺满整个浏览器（从宽和高的最大需求方面来满足，会使某些部分无法显示在区域中） */
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        /* 不可缺少 */
        /* overflow: hidden; */
        overflow: auto;
        z-index: -1;
        background-repeat: no-repeat;
    }

    /* .el-carousel__item {
        align
        align: center;
    } */

    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>