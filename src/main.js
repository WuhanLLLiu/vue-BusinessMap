//vue 程序入口
import Vue from 'vue';
//组件载入
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入Store
import store from "./store";
//引入router
import router from "./router";
import vueJsonp from 'vue-jsonp'
import BaiduMap from 'vue-baidu-map'
import Mint from 'mint-ui';
import Vant from 'vant'
import 'vant/lib/index.css';

Vue.use(Vant)
Vue.use(Mint);
Vue.use(vueJsonp)
Vue.use(ElementUI)
Vue.use(BaiduMap, {
    ak: '928DGnvCsxq1S4AnuGPMW013e0cahC1O'
})

Vue.config.productionTip = false
 
Vue.prototype.$store = store
Vue.prototype.mapInstance = {};
Vue.prototype.features = {};
Vue.prototype.Patientfeatures = {};
Vue.prototype.Allcount = {};
Vue.prototype.Flag = 0;
Vue.prototype.Address = '';
Vue.prototype.Result = {};
Vue.prototype.marker_Self = [];


const app = new Vue({
    router,
    render: h => h(App)
}).$mount("#app");

