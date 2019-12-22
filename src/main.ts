import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-design/dist/styles/iview.css'

import GlobalMessage from "./plugin/message/globalMessage"
import {MessageObserves} from "@/plugin/message/types";

Vue.use(GlobalMessage);
Vue.config.productionTip = false;


declare module "vue/types/vue" {


  interface Vue {
    messageRegistry: (key: string, messageObserve: MessageObserves) => void;
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
