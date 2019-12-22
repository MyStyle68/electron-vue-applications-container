export interface MessageObserves {
  allMessage?: (messageInfo: MessageInfo) => void
  topMessage?: (messageInfo: MessageInfo) => void
}

export interface MessageInfo {
  messageId: string
  message: string
  messageType: MessageType
  messageShowNum?: number
}

export type MessageType =
  // 顶部消息
  "topMessage"
  // 在桌面内部的alert
  | "inAlert"
  // 在用户桌面系统的alert
  | "alert"
  // 聊天中的通知
  | "chat"
  // 用户桌面锁定通知
  | "alertLock"
