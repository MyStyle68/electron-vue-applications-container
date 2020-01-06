import {app, Menu, Tray, nativeImage, dialog, BrowserWindow} from "electron";
import {TrayIcon} from "@/electron/trays/types";
import {img2Base64} from "@/utils/node/imageUtils";
import {createProtocol} from "vue-cli-plugin-electron-builder/lib";
import {TRAY_VIEW} from "@/const/viewsName";
import NativeImage = Electron.NativeImage;

const path = require("path");
const os = require("os");


let tray = null;

const getTrayIcon: () => TrayIcon = () => {


  const onlineIcon16Base64: string = img2Base64("icons/tray/Cloud_Apps_16px_1098659_easyicon.net.png") as string;
  const onlineIcon24Base64: string = img2Base64("icons/tray/Cloud_Apps_24px_1098659_easyicon.net.png") as string;
  const onlineIcon32Base64: string = img2Base64("icons/tray/Cloud_Apps_32px_1098659_easyicon.net.png") as string;
  const onlineIcon48Base64: string = img2Base64("icons/tray/Cloud_Apps_48px_1098659_easyicon.net.png") as string;
  const onlineIcon64Base64: string = img2Base64("icons/tray/Cloud_Apps_64px_1098659_easyicon.net.png") as string;
  const onlineIcon72Base64: string = img2Base64("icons/tray/Cloud_Apps_72px_1098659_easyicon.net.png") as string;
  const onlineIcon96Base64: string = img2Base64("icons/tray/Cloud_Apps_96px_1098659_easyicon.net.png") as string;
  const onlineIcon128Base64: string = img2Base64("icons/tray/Cloud_Apps_128px_1098659_easyicon.net.png") as string;
  const offlineIcon16Base64: string = img2Base64("icons/tray/Cloud_Apps_Silver_16px_1098660_easyicon.net.png") as string;
  const offlineIcon24Base64: string = img2Base64("icons/tray/Cloud_Apps_Silver_24px_1098660_easyicon.net.png") as string;
  const offlineIcon32Base64: string = img2Base64("icons/tray/Cloud_Apps_Silver_32px_1098660_easyicon.net.png") as string;
  const offlineIcon48Base64: string = img2Base64("icons/tray/Cloud_Apps_Silver_48px_1098660_easyicon.net.png") as string;
  const offlineIcon64Base64: string = img2Base64("icons/tray/Cloud_Apps_Silver_64px_1098660_easyicon.net.png") as string;
  const offlineIcon72Base64: string = img2Base64("icons/tray/Cloud_Apps_Silver_72px_1098660_easyicon.net.png") as string;
  const offlineIcon96Base64: string = img2Base64("icons/tray/Cloud_Apps_Silver_96px_1098660_easyicon.net.png") as string;
  const offlineIcon128Base64: string = img2Base64("icons/tray/Cloud_Apps_Silver_128px_1098660_easyicon.net.png") as string;
  return {
    onlineIcon16: {
      img: nativeImage.createFromDataURL(onlineIcon16Base64),
      base64Str: onlineIcon16Base64
    },
    onlineIcon24: {
      img: nativeImage.createFromDataURL(onlineIcon24Base64),
      base64Str: onlineIcon24Base64
    },
    onlineIcon32: {
      img: nativeImage.createFromDataURL(onlineIcon32Base64),
      base64Str: onlineIcon32Base64
    },
    onlineIcon48: {
      img: nativeImage.createFromDataURL(onlineIcon48Base64),
      base64Str: onlineIcon48Base64
    },
    onlineIcon64: {
      img: nativeImage.createFromDataURL(onlineIcon64Base64),
      base64Str: onlineIcon64Base64
    },
    onlineIcon72: {
      img: nativeImage.createFromDataURL(onlineIcon72Base64),
      base64Str: onlineIcon72Base64
    },
    onlineIcon96: {
      img: nativeImage.createFromDataURL(onlineIcon96Base64),
      base64Str: onlineIcon96Base64
    },
    onlineIcon128: {
      img: nativeImage.createFromDataURL(onlineIcon128Base64),
      base64Str: onlineIcon128Base64
    },
    offlineIcon16: {
      img: nativeImage.createFromDataURL(offlineIcon16Base64),
      base64Str: offlineIcon16Base64
    },
    offlineIcon24: {
      img: nativeImage.createFromDataURL(offlineIcon24Base64),
      base64Str: offlineIcon24Base64
    },
    offlineIcon32: {
      img: nativeImage.createFromDataURL(offlineIcon32Base64),
      base64Str: offlineIcon32Base64
    },
    offlineIcon48: {
      img: nativeImage.createFromDataURL(offlineIcon48Base64),
      base64Str: offlineIcon48Base64
    },
    offlineIcon64: {
      img: nativeImage.createFromDataURL(offlineIcon64Base64),
      base64Str: offlineIcon64Base64
    },
    offlineIcon72: {
      img: nativeImage.createFromDataURL(offlineIcon72Base64),
      base64Str: offlineIcon72Base64
    },
    offlineIcon96: {
      img: nativeImage.createFromDataURL(offlineIcon96Base64),
      base64Str: offlineIcon96Base64
    },
    offlineIcon128: {
      img: nativeImage.createFromDataURL(offlineIcon128Base64),
      base64Str: offlineIcon128Base64
    }
  }
};

let win: BrowserWindow;

export const loadTray = () => {

  const platform = os.platform();
  const trayIcons = getTrayIcon();
  if (platform == "linux") {
    console.log("================")
    win = new BrowserWindow({
      width: 64, height: 64, resizable: false, show: false, alwaysOnTop: true, frame: false, webPreferences: {
        nodeIntegration: true
      }
    });

    win.setSkipTaskbar(true);
    if (process.env.WEBPACK_DEV_SERVER_URL) {
      // Load the url of the dev server if in development mode
      win.loadURL(`${process.env.WEBPACK_DEV_SERVER_URL}${TRAY_VIEW}`);
      if (!process.env.IS_TEST) win.webContents.openDevTools()
    } else {
      createProtocol('app');
      // Load the index.html when not in development
      win.loadURL(`app://./index.html${TRAY_VIEW}`)
    }

    win.on("ready-to-show", () => {
      win.webContents.send("icon", trayIcons);
      win.show();
    })

  } else {
    // tray = new Tray(trayIcons.onlineIcon16);
    // const contextMenu = Menu.buildFromTemplate([
    //   {
    //     label: "退出",
    //     click: () => {
    //       const resultNum = dialog.showMessageBoxSync({
    //         type: "info",
    //         title: "退出提醒",
    //         cancelId: 1,
    //         defaultId: 1,
    //         // icon: trayIcons.onlineIcon128,
    //         message: "是否退出本程序",
    //         buttons: ["确认", "取消"]
    //       });
    //       if (resultNum === 0) {
    //         app.quit();
    //       }
    //     }
    //   }
    // ]);
    // // tray.setTitle("收到的非官方的");
    // tray.setToolTip("测试啊啊啊啊 ");
    // tray.setContextMenu(contextMenu);
  }

};
