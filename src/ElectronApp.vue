<template>
  <div>
    <WindowLayout>
      <div slot="mainContent" id="app" :style="{backgroundColor: backGroundInfo.bgColor}">
        <div class="bgc" :style="backgroundImage"></div>
        <TopMessage/>
        <p>sdfsdfsdg拉开距离Electron</p>
        <p>sdfsdfsdg拉开距离Electron</p>
        <p>sdfsdfsdg拉开距离Electron</p>
        <p>sdfsdfsdg拉开距离Electron</p>
        <p>sdfsdfsdg拉开距离Electron</p>
        <p>sdfsdfsdg拉开距离Electron</p>
        <p>sdfsdfsdg拉开距离Electron</p>
        <p>sdfsdfsdg拉开距离Electron</p>
        <p>sdfsdfsdg拉开距离Electron</p>
        <p>sdfsdfsdg拉开距离Electron</p>
        <p>sdfsdfsdg拉开距离Electron</p>
        <p>sdfsdfsdg拉开距离Electron</p>
        <p>sdfsdfsdg拉开距离Electron</p>
        <p>sdfsdfsdg拉开距离Electron</p>
        <p>sdfsdfsdg拉开距离Electron</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离</p>
        <p>sdfsdfsdg拉开距离END</p>
      </div>
    </WindowLayout>
  </div>

</template>

<script lang="ts">

  import {Component, Vue} from "vue-property-decorator";

  import TopMessage from "@/views/message/TopMessage.vue";

  import {BackGround} from "./types/desktop";

  import WindowLayout from "@/components/content/layout/WindowLayout.vue";

  @Component({
    components: {TopMessage, WindowLayout}
  })
  export default class ElectronApp extends Vue {

    private backGroundInfo: BackGround = {
      bgColor: "skyblue",
      bgImg: ""
    };

    private closeEnv(){
      alert("自定义关闭")
    }

    get backgroundImage(): any {
      return typeof this.backGroundInfo.bgImg &&
      this.backGroundInfo.bgImg.length > 0 ? {backgroundImage: `url(${this.backGroundInfo.bgImg})`} : {}
    }

  }

</script>

<style lang="less">


  .pos_full() {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }

  #app {
    .pos_full();

    .bgc {
      background-image: url(assets/tmp/bgc/bgc.jpg);
      background-size: 100% 100%;
    }
  }
</style>
