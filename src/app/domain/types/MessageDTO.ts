import {MessageStatus} from './MessageStatus';

export interface MessageDTO {
  content: string;
  createdAt: string;
  status: MessageStatus;
}
