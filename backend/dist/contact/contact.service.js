"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ContactService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
let ContactService = ContactService_1 = class ContactService {
    constructor() {
        this.logger = new common_1.Logger(ContactService_1.name);
        this.messages = [];
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
        return {
            success: true,
            message: "Thanks for reaching out! I'll get back to you within 24 hours.",
            id: newMessage.id,
        };
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
    (0, common_1.Injectable)()
], ContactService);
//# sourceMappingURL=contact.service.js.map