import {Injectable} from '@angular/core';
import {MessageEntity} from '../../../domain/entities/message.entity';
import {MessageService} from '../../../infrastructure/services/message/message.service';

@Injectable({
  providedIn: 'root'
})
export class SendMessageUseCaseService {

  constructor(private messageService:MessageService) { }

  /**
   * function to send a message
   * @param content the content of the message
   * @returns the promise of the entity added
   */

  async  execute(content:string ): Promise<MessageEntity>{

    try {
      return await this.messageService.sendMessage(content);
    } catch (error) {
      console.error('Error sending message:', error);
      throw new Error('Failed to send message');
    }


  }
}
