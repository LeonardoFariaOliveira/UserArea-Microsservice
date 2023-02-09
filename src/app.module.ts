import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { HTTPModule } from '@infra/http/http.module';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  imports: [HTTPModule, DatabaseModule],
})
export class AppModule {}
