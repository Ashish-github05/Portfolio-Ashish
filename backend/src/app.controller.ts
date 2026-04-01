import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return {
      message: 'Portfolio API is running!',
      version: '1.0.0',
      endpoints: {
        portfolio: '/api/portfolio',
        skills: '/api/portfolio/skills',
        experience: '/api/portfolio/experience',
        projects: '/api/portfolio/projects',
        achievements: '/api/portfolio/achievements',
        testimonials: '/api/portfolio/testimonials',
        contact: '/api/contact',
      },
    };
  }

  @Get('health')
  healthCheck(): object {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}
