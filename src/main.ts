import Vue from 'vue'
import App from './App.vue'
import TrayView from "./views/electron/tray/TrayView.vue"
import ElectronApp from './ElectronApp.vue'
import router from './router'
import store from './store'
import 'view-design/dist/styles/iview.css'
import "./assets/fonts/apps/app-font.css";

import GlobalMessage from "./plugin/message/globalMessage"
import {MessageObserves} from "@/plugin/message/types";

import WindowLayoutPlugin from "./plugin/layout/windowLayoutPlugin";
import {TRAY_VIEW} from "@/const/viewsName";
import Remote = Electron.Remote;
import IpcRenderer = Electron.IpcRenderer;

declare module "vue/types/vue" {


  interface Vue {
    messageRegistry: (key: string, messageObserve: MessageObserves) => void;
    isHaveElectron: boolean,
    electronRemote: Remote,
    electronIpcRenderer: IpcRenderer
  }
}

declare global {
  interface window {
    require: (str: string) => any,
  }
}

Vue.use(GlobalMessage);
Vue.use(WindowLayoutPlugin);
Vue.config.productionTip = false;

if (typeof WebSocket === "undefined") {
  alert("当前浏览器无法运行此程序,请更换您的浏览器");
} else {
  const isHaveElectron = typeof (window as any).require !== "undefined";

  const url = location.href;
  console.log(url)
  let app: any = App;
  if (url.includes(TRAY_VIEW)) {
    app = TrayView
  }

// if (isHaveElectron) {
//   new Vue({
//     router,
//     store,
//     render: h => h(ElectronApp)
//   }).$mount("#app");
// } else {
  new Vue({
    router,
    store,
    render: h => h(app)
  }).$mount('#app');
// }

}



