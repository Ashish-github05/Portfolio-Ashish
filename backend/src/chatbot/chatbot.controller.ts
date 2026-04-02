import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ChatbotService } from './chatbot.service';
import { ChatDto } from './chatbot.dto';

@Controller('chatbot')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post('chat')
  async chat(@Body() dto: ChatDto, @Res() res: Response) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    try {
      for await (const chunk of this.chatbotService.streamChat(dto.messages)) {
        res.write(`data: ${JSON.stringify({ text: chunk })}\n\n`);
      }
    } catch {
      res.write(`data: ${JSON.stringify({ error: 'Something went wrong. Please try again.' })}\n\n`);
    }

    res.write('data: [DONE]\n\n');
    res.end();
  }
}
