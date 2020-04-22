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
                keepAlive: false,
                title: "土地信息"
            }
        },
        {
            path: "/LYXX",
            component: () => import("../views/LYXX"),
            meta: {
                keepAlive: false,
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
                title: "汉阳区促进楼宇经济发展奖励办法（试行）"
            }
        },
        {
            path: "/ZCXQ2",
            component: () => import("../views/ZCXQ2"),
            meta: {
                keepAlive: true,
                title: "汉阳区大健康产业扶持政策"
             }
        },
        {           
            path: "/HYZ",
            component: () => import("../views/HYZ"),
            meta: {
                keepAlive: true,
                title: "汉阳造文创产业园"
            }
        },
        {
            path: "/HJK",
            component: () => import("../views/HJK"),
            meta: {
                keepAlive: true,
                title: "黄金口工业园"
            }
        },
        {
            path: "/HJ",
            component: () => import("../views/HJ"),
            meta: {
                keepAlive: true,
                title: "加华科技产业园"
            }
        },
        {
            path: "/JKCY",
            component: () => import("../views/JKCY"),
            meta: {
                keepAlive: true,
                title: "健康产业"
            }
        },
        {
            path: "/ZCXQ3",
            component: () => import("../views/ZCXQ3"),
            meta: {
                keepAlive: true,
                title: "阳政规[2019]1号营商留商奖励政策"
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