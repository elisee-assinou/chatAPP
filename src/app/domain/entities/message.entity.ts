
import {MessageStatus} from '../types/MessageStatus';
/**
 * Represents a message object
 * It contains the message content and the date it was sent
 */
export class MessageEntity {
  /**
   * The constructor of the message class
   * @param id the id of the message
   * @param content The content of the message
   * @param createdAt The date the message was sent
   * @param status  The status of the message (e.g., 'sent', 'delivered', 'read')
   */
  constructor(public content: string, public createdAt: Date= new Date(), public status:MessageStatus, public id?:string) {}

  /** function to convert the message object to a string
   * @returns a representation of the message object as a string
   */
  toString(): string {
    return `${this.content} - ${this.createdAt.toISOString()} - Status: ${this.status}`;
  }

  /**
   * function to update the content of the message
   * @param content The new content of the message
   * @returns void
   */
  updateContent(content: string): void {
    if (content.trim()==='') {
      throw new Error('The content of the message cannot be empty');
    }
    this.content = content;
  }

  /**
   * function to update the status of the message
   * @param newStatus The new status of the message
   */
  updateStatus(newStatus: MessageStatus): void {
    if (this.status === newStatus) {
      throw new Error('The status of the message is already ' + newStatus);
    }
    this.status = newStatus;
  }

}
