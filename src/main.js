import Vue from 'vue'
import App from './App.vue'
import router from './router'
import li_W from 'common/li_W'

import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
import 'assets/css/element-variables.scss'
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false
Vue.prototype.li_W = li_W;
new Vue({
  render: h => h(App),router
}).$mount('#app')
