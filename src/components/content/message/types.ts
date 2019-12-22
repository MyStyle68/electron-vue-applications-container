import {Vue} from "vue-property-decorator";

export interface AutoScrollMessageFunc extends Vue {
  startScroll: () => void
  stopScroll: () => void
}

export interface TopMessageInfosMap {
  [key: string]: TopMessageInfos
}

export interface TopMessageInfos {

  /**
   * 消息Id
   */
  messageId: string

  /**
   * 消息
   */
  message: string

  /**
   * 循环次数
   */
  loopNum?: number

  /**
   * 速度
   */
  speed?: number
}
