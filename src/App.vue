<template>
    <div id="app">
        <transition>
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
        <transition name="router-fade" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
    </div>
</template>

<style>
    body,
    html,
    #app {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        /* overflow: auto; */
    }

    /*修改图层控件显示文本样式*/
    li#type {
        font-size: unset !important;
        line-height: unset !important;
    }
</style>