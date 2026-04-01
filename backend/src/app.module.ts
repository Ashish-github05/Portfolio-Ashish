import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { PortfolioModule } from './portfolio/portfolio.module';

@Module({
  imports: [ContactModule, PortfolioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
