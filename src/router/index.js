import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [{
            path: "/",
            redirect: "/JXQ"
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