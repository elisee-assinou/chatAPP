import { Injectable } from '@angular/core';
import { MessageRepository } from '../../../domain/repositories/message.repository';
import { MessageEntity } from '../../../domain/entities/message.entity';
import { MessageStatus } from '../../../domain/types/MessageStatus';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private messageRepository: MessageRepository) {}

  /**
   * Function to send a message after performing necessary validations
   * @param content The content of the message to send
   * @returns A promise of the sent message entity
   */
  async sendMessage(content: string): Promise<MessageEntity> {
    // Validate message content
    if (!content || content.trim() === '') {
      throw new Error('Message content cannot be empty');
    }

    // Create the message entity with 'sent' status
    const message = new MessageEntity(content, new Date(), MessageStatus.Pending);

    try {
      // Save the message using the repository
      const savedMessage = await this.messageRepository.addMessage(message);

      message.updateStatus(MessageStatus.Sent);

      await this.messageRepository.updateMessage(message, savedMessage.id);
      return message;
    } catch (error) {
      console.error('Error saving the message:', error);
      throw new Error('Failed to save the message');
    }
  }
}
