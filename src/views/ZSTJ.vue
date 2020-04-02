<template>
    <el-carousel :interval="4000" type="card" :height="carouselHeight">
        <el-carousel-item v-for="(item, idx) in dataimg" :key="item">
            <div>
                <img :src="item" class="imgbox">
                <p class="italictext">{{idx}}</p>
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
                    require('./../assets/zstj/6.png')
                ]
            }
        },

        beforeMount() {
            this.carouselHeight = (window.innerHeight - 30) + 'px';
        }
    }
</script>

<style>
    .italictext {
        color: white;
        position: fixed;
        transform: rotate(90deg);
        padding: 18px;
        padding-top: 0px;
    }

    .imgbox {
        align-content: center;
        width: 100%;
        background-size: cover;
        /* 使图片平铺满整个浏览器（从宽和高的最大需求方面来满足，会使某些部分无法显示在区域中） */
        position: absolute;
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