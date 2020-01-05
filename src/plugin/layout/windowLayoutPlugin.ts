
const isHaveElectron = typeof (window as any).require != "undefined";

export default {
  install: (Vue: any, options: any) => {
    Vue.prototype.isHaveElectron = isHaveElectron;
    if (isHaveElectron) {
      Vue.prototype.electronRemote = (window as any).require("electron").remote;
    }
  }
}
