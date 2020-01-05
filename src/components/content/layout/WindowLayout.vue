<template>
  <div class="window-area">
    <div v-if="!noHaveDrag" class="top-drag" style="-webkit-app-region: drag">
      <div class="top-no-drag" style="-webkit-app-region: no-drag"></div>
      <div class="left-no-drag" style="-webkit-app-region: no-drag"></div>
      <div class="right-no-drag" style="-webkit-app-region: no-drag"></div>
      <div class="btn-group">
        <div style="-webkit-app-region: no-drag" title="关闭" @click="closeWindow" class="close icon icon-close"></div>
        <div style="-webkit-app-region: no-drag" title="最小化" class="zuixiao icon icon-zuixiaohua"></div>
        <div style="-webkit-app-region: no-drag" title="最大化" class="da-or-xiao icon icon-fangda"></div>
      </div>
    </div>
    <div :style="mainHeightStyle" class="main-content">
      <slot name="mainContent"/>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from "vue-property-decorator";
  import VueScroll from "vuescroll"

  @Component({
    components: {
      VueScroll
    }
  })
  export default class WindowLayout extends Vue {


    @Prop({type: Function, required: false})
    private closeEven: (() => void) | undefined;

    @Prop({type: Boolean, default: false})
    private noHaveDrag!: boolean;

    private get mainHeightStyle(): any {
      let height = 25;
      if (this.noHaveDrag) {
        height = 0;
      }
      return {height: `calc(100% - ${height}px)`}
    }

    private closeWindow() {
      alert("进入关闭window函数");
      if ("function" == typeof this.closeEven) {
        this.closeEven();
        return
      }
      alert("默认实现")
    }

    private created(){
      console.log("electron is ==> ", this.isHaveElectron);
    }

  }
</script>

<style lang="less" scoped>
  .window-area {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0;

    .top-drag, .main-content {
      position: relative;
      width: 100%;
    }

    .main-content {
      /*overflow: hidden;*/
    }

    .top-drag {
      height: 26px;
      background-color: #2F343F;

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
    }
  }
</style>
