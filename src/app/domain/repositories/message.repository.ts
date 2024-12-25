import {MessageEntity} from '../entities/message.entity';


/**
 * Represents a message repository interface
 */

export interface MessageRepository {
  /**
   * function to get all messages
   * @returns an array of message entities
   */
  getAllMessages(): Promise<MessageEntity[]>;

  /**
   * function to add a message

   * @param message The message entity to add
   * @returns a promise of the added message entity
   */
    addMessage( message: MessageEntity): Promise<MessageEntity>;

  /**
   * function to update a message
   * @param id The id of the message to update
   * @param message The message entity to update
   * @returns a promise of the updated message entity
   */

  updateMessage(message: MessageEntity, id?: string): Promise<MessageEntity>;


  /**
   * function to delete a message
   * @param id The id of the message to delete
   * @returns a promise of the deleted message entity
   */
    deleteMessage(id: string): Promise<MessageEntity>;
}
