<template>
  <div @contextmenu.prevent.stop="contextMenu($event)" @mousedown="mousedown($event)" class="bgc" :style="{
    backgroundImage: `url('${icon}')`,
    backgroundSize: '100% 100%'
  }">
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {TrayIcon} from "@/electron/trays/types";

  @Component({
    components: {},

  })
  export default class TrayView extends Vue {

    private trayIcon: TrayIcon | undefined;

    private icon: string = "";

    private menu!: any;

    private mousedown(e: any) {
      const remote = this.electronRemote;
      const currWindowPosition = remote.getCurrentWindow().getPosition();
      let formX = e.screenX - currWindowPosition[0];
      let formY = e.screenY - currWindowPosition[1];
      document.onmousemove = function (e) {
        remote.getCurrentWindow().setPosition((e.screenX - formX), (e.screenY - formY));
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      }
    }

    private mounted() {
      const remote = this.electronRemote;
      const {Menu, MenuItem} = remote;
      this.menu = Menu.buildFromTemplate([
        {
          label: "退出",
          click: () => {
            const resultNum = this.electronRemote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {
              type: "info",
              title: "退出提醒",
              message: "退出提醒",
              cancelId: 1,
              defaultId: 1,
              buttons: ["确认", "取消"],
            });
            if (resultNum == 0) {
              remote.app.quit()
            }
          }
        }
      ]);

    }

    private contextMenu(e: any) {
      const remote = this.electronRemote;
      this.menu.popup({window: remote.getCurrentWindow()});
      document.onmousemove = null;
    }

    private created() {

      this.electronIpcRenderer.on("icon", (event, args: TrayIcon) => {
        this.trayIcon = args;
        this.icon = this.trayIcon.onlineIcon128.base64Str;
        console.log(this.trayIcon);
        console.log(this.icon);
      });

      this.electronIpcRenderer.on("trayMenu", (event, args) => {
        // this.menu = Menu.buildFromTemplate(args);
      })

    }
  }
</script>

<style lang="less" scoped>

  .bgc {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: skyblue;
    cursor: pointer;
  }
</style>
