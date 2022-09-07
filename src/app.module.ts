import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { CollectionModule } from './modules/collection/collection.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [AuthModule, UserModule, CollectionModule, PrismaModule]
})
export class AppModule {}
