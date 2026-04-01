import { Injectable, Logger } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
  read: boolean;
}

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);
  private messages: ContactMessage[] = [];

  async createMessage(
    dto: CreateContactDto,
  ): Promise<{ success: boolean; message: string; id: string }> {
    const newMessage: ContactMessage = {
      id: `msg_${Date.now()}`,
      name: dto.name,
      email: dto.email,
      subject: dto.subject,
      message: dto.message,
      createdAt: new Date(),
      read: false,
    };

    this.messages.push(newMessage);
    this.logger.log(
      `New contact message [${newMessage.id}] from ${dto.name} <${dto.email}>`,
    );

    return {
      success: true,
      message: "Thanks for reaching out! I'll get back to you within 24 hours.",
      id: newMessage.id,
    };
  }

  async getMessages(): Promise<ContactMessage[]> {
    return this.messages.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }

  async markAsRead(id: string): Promise<{ success: boolean }> {
    const msg = this.messages.find((m) => m.id === id);
    if (msg) {
      msg.read = true;
      return { success: true };
    }
    return { success: false };
  }
}
