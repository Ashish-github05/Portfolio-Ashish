import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
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
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get<string>('GMAIL_USER'),
        pass: this.configService.get<string>('GMAIL_APP_PASSWORD'),
      },
    });
  }

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

    await this.sendEmail(dto);

    return {
      success: true,
      message: "Thanks for reaching out! I'll get back to you within 24 hours.",
      id: newMessage.id,
    };
  }

  private async sendEmail(dto: CreateContactDto): Promise<void> {
    const recipient = this.configService.get<string>('RECIPIENT_EMAIL');
    const sender = this.configService.get<string>('GMAIL_USER');

    const mailOptions: nodemailer.SendMailOptions = {
      from: `"Portfolio Contact" <${sender}>`,
      to: recipient,
      replyTo: dto.email,
      subject: `[Portfolio] ${dto.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
          <div style="background: #4f46e5; color: white; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0; font-size: 20px;">New Portfolio Message</h2>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 100px;">From:</td>
                <td style="padding: 8px 0; color: #111827;">${dto.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #4f46e5;"><a href="mailto:${dto.email}" style="color: #4f46e5;">${dto.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Subject:</td>
                <td style="padding: 8px 0; color: #111827;">${dto.subject}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="font-weight: bold; color: #374151; margin: 0 0 8px;">Message:</p>
            <p style="color: #374151; white-space: pre-wrap; line-height: 1.6; margin: 0; background: #f3f4f6; padding: 16px; border-radius: 6px;">${dto.message}</p>
            <p style="margin: 20px 0 0; font-size: 12px; color: #9ca3af;">Sent from your portfolio contact form • ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      this.logger.log(`Email sent to ${recipient} for message from ${dto.name}`);
    } catch (err) {
      this.logger.error(`Failed to send email: ${err.message}`);
    }
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
