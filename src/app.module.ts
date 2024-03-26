import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [AdminModule, WebhookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
