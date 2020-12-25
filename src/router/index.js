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
        path: "/ZSTJ2",
        component: () => import("../views/ZSTJ2"),
        meta: {
            keepAlive: true,
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
        name: 'JKCY',
        component: () => import("../views/JKCY"),
        meta: {
            keepAlive: true,
            title: "健康产业"
        }
    },
    {
        path: "/ZDCY",
        component: () => import("../views/ZDCY"),
        meta: {
            keepAlive: true,
            title: "重点产业"
        }
    },
    {
        path: "/HZCY",
        component: () => import("../views/HZCY"),
        meta: {
            keepAlive: true,
            title: "会展产业"
        }
    },
    {
        path: "/ZCXQ3",
        component: () => import("../views/ZCXQ3"),
        meta: {
            keepAlive: true,
            title: "营商留商奖励政策"
        }
    },
    {
        path: "/JKCYQY",
        component: () => import("../views/JKCYQY"),
        meta: {
            keepAlive: true,
            title: "健康产业重点企业"
        }
    },
    {
        path: "/DH",
        component: () => import("../views/DH"),
        meta: {
            keepAlive: true,
            title: "大湖+样板湖中间成果"
        }
    },
    {
        path: "/LYH",
        component: () => import("../views/LYH"),
        meta: {
            keepAlive: true,
            title: "龙阳湖招商"
        }
    },
    {
        path: "/QCYD",
        component: () => import("../views/QCYD"),
        meta: {
            keepAlive: true,
            title: "武汉汽车运动文化特色小镇创建规划"
        }
    },
    {
        path: "/JKCYZSQK",
        component: () => import("../views/JKCYZSQK"),
        meta: {
            keepAlive: true,
            title: "汉阳区大健康产业招商情况"
        }
    },
    {
        path: "/WLCY",
        component: () => import("../views/WLCY"),
        meta: {
            keepAlive: true,
            title: "文旅产业的招商计划"
        }
    },
    {
        path: "/JRCY",
        component: () => import("../views/JRCY"),
        meta: {
            keepAlive: true,
            title: "金融产业2020年区《政府工作报告》确定的主要目标任务"
        }
    },
    {
        path: "/WHCY2",
        component: () => import("../views/WHCY2"),
        meta: {
            keepAlive: true,
            title: "关于支持小微企业进入规模服务企业的意见"
        }
    },
    {
        path: "/WHCY3",
        component: () => import("../views/WHCY3"),
        meta: {
            keepAlive: true,
            title: "文创产业政策"
        }
    },
    {
        path: "/WHCY4",
        component: () => import("../views/WHCY4"),
        meta: {
            keepAlive: true,
            title: "文创产业政策"
        }
    },
    {
        path: "/WHCYSC",
        component: () => import("../views/WHCYSC"),
        meta: {
            keepAlive: true,
            title: "文化创意市场"
        }
    },
    {
        path: "/LQGC",
        component: () => import("../views/LQGC"),
        meta: {
            keepAlive: true,
            title: "路桥工程设计"
        }
    },
    {
        path: "/HYC",
        component: () => import("../views/HYC"),
        meta: {
            keepAlive: true,
            title: "欢迎辞"
        }
    },
    {
        path: "/QCHSC",
        component: () => import("../views/QCHSC"),
        meta: {
            keepAlive: true,
            title: "汽车后市场"
        }
    },
    {
        path: "/JZTJKC",
        component: () => import("../views/JZTJKC"),
        meta: {
            keepAlive: true,
            title: "九州通健康城"
        }
    },
    {
        path: "/JRCP",
        component: () => import("../views/JRCP"),
        meta: {
            keepAlive: true,
            title: "金融产品"
        }
    },
    {
        path: "/JRCP2",
        component: () => import("../views/JRCP2"),
        meta: {
            keepAlive: true,
            title: "金融产品"
        }
    },
    {
        path: "/JRCP3",
        component: () => import("../views/JRCP3"),
        meta: {
            keepAlive: true,
            title: "金融产品"
        }
    },
    {
        path: "/JRCP4",
        component: () => import("../views/JRCP4"),
        meta: {
            keepAlive: true,
            title: "金融产品"
        }
    },
    {
        path: "/JRCP5",
        component: () => import("../views/JRCP5"),
        meta: {
            keepAlive: true,
            title: "金融产品"
        }
    },
    // {
    //     name:'djkcyzc',
    //     path: "/djkcyzc",
    //     component: () => import("../views/test"),
    //     meta: {
    //         keepAlive: true,
    //         title: "汉阳区大健康产业扶持政策"
    //     }
    // },
    {
        path: "/ZCXQ4",
        component: () => import("../views/ZCXQ4"),
        meta: {
            keepAlive: true,
            title: "人才政策"
        }
    },
    {
        path: "/FWZY",
        component: () => import("../views/FWZY"),
        meta: {
            keepAlive: true,
            title: "服务指引"
        }
    },
    {
        path: "/SZJJ",
        component: () => import("../views/SZJJ"),
        meta: {
            keepAlive: true,
            title: "数字经济"
        }
    },
    {
        path: "/KCXL",
        component: () => import("../views/KCXL"),
        meta: {
            keepAlive: true,
            title: "考察线路"
        }
    },
    {
        path: "/KCXL2",
        component: () => import("../views/KCXL2"),
        meta: {
            keepAlive: true,
            title: "考察线路"
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