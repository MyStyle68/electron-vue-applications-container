<template>
  <div class="top-message">
    <AutoScrollMessage ref="autoScrollMessage" :messages="nowMessage"/>
    <button @click="addMessageRegistry">电饭锅电饭锅的</button>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import AutoScrollMessage from "@/components/content/message/AutoScrollMessage.vue";
  import {MessageInfo, MessageObserves} from "@/plugin/message/types";
  import {AutoScrollMessageFunc, TopMessageInfos, TopMessageInfosMap} from "@/components/content/message/types";

  @Component({
    components: {AutoScrollMessage}
  })
  export default class TopMessage extends Vue implements MessageObserves {

    /**
     * 消息集合
     */
    private messageMap: TopMessageInfosMap = {};

    /**
     * 现在正在进行的消息
     */
    private nowMessage: TopMessageInfos = {} as any;

    private readonly autoScrollMessageType = "autoScrollMessage";

    private message: string = "还记得卡萨换房间爱看书的恢复健康受到房价开始的减肥课很少看到回福建卡士大夫尽快核实打款发货速度快回复可见阿萨德后方可还记得卡萨换房间爱看书的恢复健康受到房价开始的减肥课很少看到回福建卡士大夫尽快核实打款发货速度快回复可见阿萨德后方可还记得卡萨换房间爱看书的恢复健康受到房价开始的减肥课很少看到回福建卡士大夫尽快核实打款发货速度快回复可见阿萨德后方可还记得卡萨换房间爱看书的恢复健康受到房价开始的减肥课很少看到回福建卡士大夫尽快核实打款发货速度快回复可见阿萨德后方可还记得卡萨换房间爱看书的恢复健康受到房价开始的减肥课很少看到回福建卡士大夫尽快核实打款发货速度快回复可见阿萨德后方可还记得卡萨换房间爱看书的恢复健康受到房价开始的减肥课很少看到回福建卡士大夫尽快核实打款发货速度快回复可见阿萨德后方可还记得卡萨换房间爱看书的恢复健康受到房价开始的减肥课很少看到回福建卡士大夫尽快核实打款发货速度快回复可见阿萨德后方可还记得卡萨换房间爱看书的恢复健康受到房价开始的减肥课很少看到回福建卡士大夫尽快核实打款发货速度快回复可见阿萨德后方可";

    addMessageRegistry() {
      this.messageRegistry('TopMessage', this)
    }

    topMessage(messageInfo: MessageInfo) {
      debugger
      const isNoHaveNowMessage = !this.nowMessage.messageId;
      const isHavenMessageKey = typeof this.messageMap[messageInfo.messageId] != "undefined";
      const message:TopMessageInfos = {
        messageId: messageInfo.messageId,
        message: messageInfo.message,
        loopNum: messageInfo.messageShowNum
      };

      if (isNoHaveNowMessage && !isHavenMessageKey) {
        this.nowMessage = message;
        return;
      }

      this.messageMap[messageInfo.messageId] = message;
    }


  }
</script>

<style scoped>
  .top-message {
    width: 100%;
    height: 38px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
  }
</style>
