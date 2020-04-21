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
            path: "/HYZ",
            component: () => import("../views/HYZ"),
            meta: {
                keepAlive: true,
                title: "楼宇信息"
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