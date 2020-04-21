import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "hash",
    routes: [{
            path: "/",
            redirect: "/SY"
        },
        {
            path:"/ZSTJ",
            component: () => import("../views/ZSTJ"),
            meta: {
                keepAlive: false,
                title: "招商推介"
            }
        },
        {
            path: "/SY",
            component: () => import("../views/SY"),
            meta: {
                keepAlive: true,
                title: "汉阳招商云地图"
            }
        },
        {
            path: "/HK",
            component: () => import("../views/HanKou"),
            meta: {
                keepAlive: true,
                title: "汉阳招商云地图"
            }
        },
        {
            path: "/TDXX",
            component: () => import("../views/TDXX"),
            meta: {
                keepAlive: true,
                title: "土地信息"
            }
        },
        {
            path: "/LYXX",
            component: () => import("../views/LYXX"),
            meta: {
                keepAlive: true,
                title: "楼宇信息"
            }
        },
        {
            path: "/ZSZC",
            component: () => import("../views/ZSZC"),
            meta: {
                keepAlive: true,
                title: "招商政策"
            }
        },
        {
            path: "/ZCXQ",
            component: () => import("../views/ZCXQ"),
            meta: {
                keepAlive: true,
                title: "政策详情"
            }
        },
        {
            path: "/ZCXQ2",
            component: () => import("../views/ZCXQ2"),
            meta: {
                keepAlive: true,
                title: "政策详情"
            }
        },
    ]
});
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});
export default router;