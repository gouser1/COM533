import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

Vue.use(axios);

new Vue({
    created() {
        AOS.init();
    },
    router,
    store,
    render: h => h(App)
}).$mount('#app');