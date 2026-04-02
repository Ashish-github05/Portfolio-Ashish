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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatbotController = void 0;
const common_1 = require("@nestjs/common");
const chatbot_service_1 = require("./chatbot.service");
const chatbot_dto_1 = require("./chatbot.dto");
let ChatbotController = class ChatbotController {
    constructor(chatbotService) {
        this.chatbotService = chatbotService;
    }
    async chat(dto, res) {
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
        res.flushHeaders();
        try {
            for await (const chunk of this.chatbotService.streamChat(dto.messages)) {
                res.write(`data: ${JSON.stringify({ text: chunk })}\n\n`);
            }
        }
        catch (err) {
            const msg = err instanceof Error ? err.message : String(err);
            console.error('[Chatbot error]', msg);
            res.write(`data: ${JSON.stringify({ error: msg })}\n\n`);
        }
        res.write('data: [DONE]\n\n');
        res.end();
    }
};
exports.ChatbotController = ChatbotController;
__decorate([
    (0, common_1.Post)('chat'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [chatbot_dto_1.ChatDto, Object]),
    __metadata("design:returntype", Promise)
], ChatbotController.prototype, "chat", null);
exports.ChatbotController = ChatbotController = __decorate([
    (0, common_1.Controller)('chatbot'),
    __metadata("design:paramtypes", [chatbot_service_1.ChatbotService])
], ChatbotController);
//# sourceMappingURL=chatbot.controller.js.map