<template>
    <el-carousel :interval="4000" type="card" :height="carouselHeight">
        <el-carousel-item v-for="(item, idx) in dataimg" :key="item">
            <div>
                <img :src="item" class="imgbox">
                <p class="italictext">{{idx+1}}</p>
            </div>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        data() {
            return {
                carouselHeight: "700px",
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

        beforeMount() {
            this.carouselHeight = (window.innerHeight - 21) + 'px';
        }
    }
</script>

<style>
    .italictext {
        color: white;
        position: fixed;
        transform: rotate(-90deg);
        padding: 25px;
        padding-top: 0px;
    }

    .imgbox {
        width: 100%;
        background-size: cover;
        /* 使图片平铺满整个浏览器（从宽和高的最大需求方面来满足，会使某些部分无法显示在区域中） */
        position: absolute;
        top:50%;
        margin-top: -85%;
        /* 不可缺少 */
        /* overflow: hidden; */
        /* overflow: auto; */
        z-index: -1;
        background-repeat: no-repeat;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>