import {BrowserWindow} from "electron";
import {CHAT_VIEW} from "@/const/viewsName";

const initChat: () => BrowserWindow = () => {
  const win = new BrowserWindow({
    width: 260,
    height: 520,
    minHeight: 520,
    minWidth: 260,
    maxWidth: 260,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.setSkipTaskbar(true);

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(`${process.env.WEBPACK_DEV_SERVER_URL}${CHAT_VIEW}`);
    // if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    // Load the index.html when not in development
    win.loadURL(`app://./index.html${CHAT_VIEW}`)
  }
  return win;
};

export default initChat;
