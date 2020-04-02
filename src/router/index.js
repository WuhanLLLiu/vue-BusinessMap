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
            component: () => import("../views/ShouYe"),
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
            path: "/HBS",
            component: () => import("../views/Hubei"),
            meta: {
                keepAlive: true,
                title: "湖北省疫情图"
            }
        },
        {
            path: "/JXQ",
            component: () => import("../views/JiangXia"),
            meta: {
                keepAlive: true,
                title: "江夏区疫情图"
            }
        }
    ]
});
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});
export default router;