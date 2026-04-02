import { Controller, Get, Post } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  getAllData() {
    return this.portfolioService.getAllData();
  }

  @Get('personal')
  getPersonalInfo() {
    return this.portfolioService.getPersonalInfo();
  }

  @Get('skills')
  getSkills() {
    return this.portfolioService.getSkills();
  }

  @Get('experience')
  getExperience() {
    return this.portfolioService.getExperience();
  }

  @Get('projects')
  getProjects() {
    return this.portfolioService.getProjects();
  }

  @Get('achievements')
  getAchievements() {
    return this.portfolioService.getAchievements();
  }

  @Get('testimonials')
  getTestimonials() {
    return this.portfolioService.getTestimonials();
  }

  @Get('visitors')
  getVisitorCount() {
    return this.portfolioService.getVisitorCount();
  }

  @Post('visitors')
  incrementVisitorCount() {
    return this.portfolioService.incrementVisitorCount();
  }
}
