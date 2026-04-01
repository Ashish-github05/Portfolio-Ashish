"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ContactService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer = require("nodemailer");
let ContactService = ContactService_1 = class ContactService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(ContactService_1.name);
        this.messages = [];
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: this.configService.get('GMAIL_USER'),
                pass: this.configService.get('GMAIL_APP_PASSWORD'),
            },
        });
    }
    async createMessage(dto) {
        const newMessage = {
            id: `msg_${Date.now()}`,
            name: dto.name,
            email: dto.email,
            subject: dto.subject,
            message: dto.message,
            createdAt: new Date(),
            read: false,
        };
        this.messages.push(newMessage);
        this.logger.log(`New contact message [${newMessage.id}] from ${dto.name} <${dto.email}>`);
        await this.sendEmail(dto);
        return {
            success: true,
            message: "Thanks for reaching out! I'll get back to you within 24 hours.",
            id: newMessage.id,
        };
    }
    async sendEmail(dto) {
        const recipient = this.configService.get('RECIPIENT_EMAIL');
        const sender = this.configService.get('GMAIL_USER');
        const mailOptions = {
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
        }
        catch (err) {
            this.logger.error(`Failed to send email: ${err.message}`);
        }
    }
    async getMessages() {
        return this.messages.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    async markAsRead(id) {
        const msg = this.messages.find((m) => m.id === id);
        if (msg) {
            msg.read = true;
            return { success: true };
        }
        return { success: false };
    }
};
exports.ContactService = ContactService;
exports.ContactService = ContactService = ContactService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ContactService);
//# sourceMappingURL=contact.service.js.map