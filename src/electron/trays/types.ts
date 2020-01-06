// @ts-ignore
import NativeImage = Electron.NativeImage;

export interface IconImage {
  img: NativeImage
  base64Str: string
}

export interface TrayIcon {
  onlineIcon16: IconImage
  onlineIcon24: IconImage
  onlineIcon32: IconImage
  onlineIcon48: IconImage
  onlineIcon64: IconImage
  onlineIcon72: IconImage
  onlineIcon96: IconImage
  onlineIcon128: IconImage
  offlineIcon16: IconImage
  offlineIcon24: IconImage
  offlineIcon32: IconImage
  offlineIcon48: IconImage
  offlineIcon64: IconImage
  offlineIcon72: IconImage
  offlineIcon96: IconImage
  offlineIcon128: IconImage
}
