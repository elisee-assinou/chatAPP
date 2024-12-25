import { Injectable } from '@angular/core';
import { MessageRepository } from '../../../domain/repositories/message.repository';
import { FirebaseMessageDatasource} from '../../data-sources/FirebaseMessageDatasource';
import { MessageEntity } from '../../../domain/entities/message.entity';

@Injectable({
  providedIn: 'root'
})
export class FirebaseMessageRepositoryService implements MessageRepository {
  constructor(private datasource: FirebaseMessageDatasource) {}

  /**
   * Function to get all messages
   * @returns a promise of an array of message entities
   */
  async getAllMessages(): Promise<MessageEntity[]> {
    const rawMessages = await this.datasource.getAllMessages();
    return rawMessages.map(
      raw => new MessageEntity(raw.content, new Date(raw.createdAt), raw.status)
    );
  }

  /**
   * Function to add a message
   * @param message The message entity to add
   * @returns a promise of the added message entity
   */
  async addMessage(message: MessageEntity): Promise<MessageEntity> {
    await this.datasource.addMessage({
      content: message.content,
      createdAt: message.createdAt.toISOString(),
      status: message.status,
    });
    return message;
  }

  /**
   * Function to update a message
   * @param id The id of the message to update
   * @param message The message entity to update
   * @returns a promise of the updated message entity
   */
  async updateMessage(id: string, message: MessageEntity): Promise<MessageEntity> {
    await this.datasource.updateMessage(id, {
      content: message.content,
      createdAt: message.createdAt.toISOString(),
      status: message.status,
    });
    return message;
  }

  /**
   * Function to delete a message
   * @param id The id of the message to delete
   * @returns a promise of the deleted message entity
   */
  async deleteMessage(id: string): Promise<MessageEntity> {
    const rawMessage = await this.datasource.deleteMessage(id);
    return new MessageEntity(rawMessage.content, new Date(rawMessage.createdAt), rawMessage.status);
  }
}
