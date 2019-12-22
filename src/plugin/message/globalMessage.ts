import {MessageObserves} from "@/plugin/message/types";

interface MessageObservesMap {
  [key: string]: MessageObserves
}

const messageObserves: MessageObservesMap = {};

export default {
  install: (Vue: any, options: any) => {
    Vue.prototype.messageRegistry = (key:string, registryObserver: MessageObserves) => {
      messageObserves[key] = registryObserver;
      debugger
      setTimeout(()=>{
        debugger
        registryObserver.topMessage!({
          messageId: "flag",
          message: "我是传递的消息,我是传递的消息我是传递的消息我是传递的消息我是传递的消息我是传递的消息我是传递的消息我是传递的消息我是传递的消息我是传递的消息我是传递的消息我是传递的消息我是传递的消息我是传递的消息, 传递完毕",
          messageType: "topMessage"
        })
      }, 2000)
    };
  }
}

