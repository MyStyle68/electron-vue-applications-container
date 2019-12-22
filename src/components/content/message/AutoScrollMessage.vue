<template>
  <div @resize="()=>console.log('我变化了')" class="message-auto-scroll">
    <div style="width: 100%;height: 38px;overflow: hidden;position:relative;">
      <span ref="textSpan" :style="{left: `${translateX}px`}" v-show="isShow"
            class="text">{{message}}</span>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import {AutoScrollMessageFunc, TopMessageInfos, TopMessageInfosMap} from "@/components/content/message/types";

  @Component
  export default class AutoScrollMessage extends Vue implements AutoScrollMessageFunc {

    @Prop({
      default: () => ({})
    })
    private messages!: TopMessageInfos;

    private translateX: number = 0;

    private timeId?: number;


    private isShow: boolean = true;

    get message(){
      const message = this.messages.message;
      this.startScroll();
      return message;
    }

    public startScroll(): void {
      if (this.timeId) {
        clearInterval(this.timeId)
      }

      if (!(this.messages && this.messages.message && this.messages.message.length > 0)) {
        return;
      }

      const textSpan = (this.$refs["textSpan"] as HTMLSpanElement);
      const parent = textSpan.parentElement;
      let scrollWidth = parent!.clientWidth;
      let i = scrollWidth;
      setInterval(() => {
        i -= 1;
        let textWidth = textSpan.clientWidth;
        if (i < -textWidth) {
          debugger
          alert("运行完了");
          i = scrollWidth
        }
        this.translateX = i
      }, 20)

    }

    public stopScroll(): void {
      if (this.timeId) {
        clearInterval(this.timeId)
      }

      this.isShow = false;

    }


  }
</script>

<style lang="less" scoped>
  .message-auto-scroll {
    width: 100%;
    height: 38px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 0 0 15px 15px;
    padding: 0 20px 0 10px;
    overflow: hidden;

    .text {
      position: absolute;
      white-space: nowrap;
      color: white;
      line-height: 38px;
      font-size: 18px;
      font-weight: 800;
    }

  }
</style>
