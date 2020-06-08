<template>
    <van-tabs v-model="active" background="#355BFA" color="white">
        <van-tab title="产业概况">
            <img src="./../assets/zstj/IMG_00001.jpeg" id="hj"/>
            <img src="./../assets/zstj/IMG_00002.jpeg" id="hj"/>
            <img src="./../assets/zstj/IMG_00003.jpeg" id="hj"/>
            <img src="./../assets/zstj/IMG_00004.jpeg" id="hj"/>
            <img src="./../assets/zstj/IMG_00005.jpeg" id="hj"/>
            <img src="./../assets/zstj/IMG_00006.jpeg" id="hj"/>
            <img src="./../assets/zstj/IMG_00007.jpeg" id="hj"/>
            <img src="./../assets/zstj/IMG_00008.jpeg" id="hj"/>
            <img src="./../assets/zstj/IMG_00009.jpeg" id="hj"/>
            <img src="./../assets/zstj/IMG_00010.jpeg" id="hj"/>
        </van-tab>
        <van-tab title="重点企业">
            <iframe
                src="http://hyrd.yeee.me/weixin/news/yryt"
                width="100%"
                :height="carouselHeight"
                frameborder='0'
                align='center'
                allowfullscreen='true'
                allow="autoplay"></iframe>
        </van-tab>
    </van-tabs>
</template>

<script>
    import Vue from "vue";
    export default {
        name: "ZSTJ2",

        components: {},

        data() {
            return {active: 0};
        },

        beforeMount() {
            this.carouselHeight = (window.innerHeight) * 0.95 + 'px';
        },

        methods: {},

        mounted() {
            //增加统计图表
        }
    };
</script>

<style scoped="scoped">
    #hj {
        display: inline-block;
        height: auto;
        max-width: 100%;
    }
</style>

<style>
    .van-tabs--line .van-tabs__wrap {
        height: 80px;
    }
    .van-tab__text {
        position: relative;
        color: #fff;
        font-size: 34px;
        align-items: center;
    }
    .van-tab {
        padding-top: 2%;
    }
</style>