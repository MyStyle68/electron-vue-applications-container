import Vue from 'vue'
import App from './App.vue'
import ElectronApp from './ElectronApp.vue'
import router from './router'
import store from './store'
import 'view-design/dist/styles/iview.css'
import "./assets/fonts/apps/app-font.css";

import GlobalMessage from "./plugin/message/globalMessage"
import {MessageObserves} from "@/plugin/message/types";

import WindowLayoutPlugin from "./plugin/layout/windowLayoutPlugin";

Vue.use(GlobalMessage);
Vue.use(WindowLayoutPlugin);
Vue.config.productionTip = false;


declare module "vue/types/vue" {
  // @ts-ignore
  import Remote = Electron.Remote;

  interface Vue {
    messageRegistry: (key: string, messageObserve: MessageObserves) => void;
    isHaveElectron: boolean,
    electronRemote: Remote
  }
}

declare global {
  interface window {
    require: (str: string) => any
  }
}

const isHaveElectron = typeof (window as any).require !== "undefined";

if (isHaveElectron) {
  new Vue({
    router,
    store,
    render: h => h(ElectronApp)
  }).$mount("#app");
} else {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
}

