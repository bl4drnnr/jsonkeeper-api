import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { CollectionModule } from './modules/collection/collection.module';

@Module({
  imports: [AuthModule, UserModule, CollectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
