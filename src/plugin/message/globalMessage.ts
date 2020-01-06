import {MessageObserves} from "@/plugin/message/types";

const endFlag = "$^_^MESSAGE_END^_^$";

interface MessageObservesMap {
  [key: string]: MessageObserves
}

const messageObserves: MessageObservesMap = {};


let webSocket;
if (typeof WebSocket != "undefined") {
  webSocket = new WebSocket("ws://127.0.0.1:8081/ws");
  webSocket.onopen = () => {
    console.log("链接成功");
  };

  webSocket.onmessage = ev => {
    const data: string | Blob = ev.data;
    if (typeof data == "string") {

    } else {

    }
  }
}
export default {
  install: (Vue: any, options: any) => {
    Vue.prototype.messageRegistry = (key: string, registryObserver: MessageObserves) => {
      messageObserves[key] = registryObserver;
      debugger
      setTimeout(() => {
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

