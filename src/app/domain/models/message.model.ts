import {MessageEntity} from '../entities/message.entity';
import {MessageDTO} from '../types/MessageDTO';

/**
 *sendMessage model used to convert the message object to a message entity and DTO
 */

export class MessageModel {
  /**
   * convert a message entity to DTO
   * @param messageEntity The message entity to convert
   * @returns The message DTO
   */
  static toDTO(messageEntity: MessageEntity): MessageDTO {
    return {
      content: messageEntity.content,
      createdAt: messageEntity.createdAt.toISOString(),
      status: messageEntity.status
    };
  }

  /**
   * convert a message DTO to entity
   * @param dto The message DTO to convert
   * @returns The message entity
   */
  static toEntity(dto: MessageDTO): MessageEntity {
    return new MessageEntity(dto.content, new Date(dto.createdAt), dto.status);
  }


}
