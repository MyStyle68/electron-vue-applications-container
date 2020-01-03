<template>
  <div>
    <div class="top-drag" style="-webkit-app-region: drag">
      <div class="top-no-drag" style="-webkit-app-region: no-drag"></div>
      <div class="left-no-drag" style="-webkit-app-region: no-drag"></div>
      <div class="right-no-drag" style="-webkit-app-region: no-drag"></div>
      <div class="btn-group">
        <div style="-webkit-app-region: no-drag" title="关闭" class="close icon icon-close"></div>
        <div style="-webkit-app-region: no-drag" title="最小化" class="zuixiao icon icon-zuixiaohua"></div>
        <div style="-webkit-app-region: no-drag" title="最大化" class="da-or-xiao icon icon-fangda"></div>
      </div>
    </div>
    <div id="app" :style="{backgroundColor: backGroundInfo.bgColor}">
      <div class="bgc" :style="backgroundImage"></div>
      <TopMessage/>
    </div>
  </div>

</template>

<script lang="ts">

  import {Component, Vue} from "vue-property-decorator";

  import TopMessage from "@/views/message/TopMessage.vue";

  import {BackGround} from "./types/desktop";

  @Component({
    components: {TopMessage}
  })
  export default class App extends Vue {

    private backGroundInfo: BackGround = {
      bgColor: "skyblue",
      bgImg: ""
    };

    get backgroundImage(): any {
      return typeof this.backGroundInfo.bgImg &&
      this.backGroundInfo.bgImg.length > 0 ? {backgroundImage: `url(${this.backGroundInfo.bgImg})`} : {}
    }

  }

</script>

<style lang="less">

  @import "./assets/fonts/apps/app-font.css";

  .pos_full() {
    position: absolute;
    left: 0;
    top: 18px;
    bottom: 0;
    right: 0;
  }

  .top-drag {
    background-color: #2F343F;
    position: absolute;
    z-index: 99999;
    left: 0;
    right: 0;
    top: 0;
    height: 26px;

    .btn-group {
      width: 80px;
      height: 16px;
      line-height: 15px;
      text-align: center;
      margin-left: 8px;

      .close {
        background-color: #FF5B5D;
      }

      .close:hover {
        background-color: #FFA59C;
      }

      .zuixiao:hover, .da-or-xiao:hover {
        background-color: rgba(255, 255, 255, 0.6);
      }

      div {
        font-size: 12px;
        width: 14px;
        height: 14px;
        border-radius: 16px;
        margin-top: 5px;
        cursor: pointer;
        float: left;
        margin-left: 8px;
      }
    }

    .top-no-drag {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 2px;
      background-color: transparent;
    }

    .left-no-drag {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 2px;
      background-color: transparent;
    }

    .right-no-drag {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 2px;
      background-color: transparent;
    }

  }

  #app {
    .pos_full();

    .bgc {
      background-image: url(assets/tmp/bgc/bgc.jpg);
      background-size: 100% 100%;
    }
  }
</style>
