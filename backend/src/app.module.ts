import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { ContactModule } from './contact/contact.module';
import { WaitlistModule } from './waitlist/waitlist.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AdminModule, ContactModule,WaitlistModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
