export interface Message {
  type: string;
  data: MessageData;
}

export interface MessageData {
  from: string;
  to: string;
  message: string;
}
