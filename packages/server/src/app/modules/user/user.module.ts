import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.model';
import { CacheService } from '../../services/cache/cache.service';
import { AzureStrategy } from '../../strategies/azure.strategy';
import { GoogleStrategy } from '../../strategies/google.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.registerAsync({
      useFactory: () => ({ secret: process.env.JWT_SECRET })
    })
  ],
  controllers: [
    UserController
  ],
  providers: [
    AzureStrategy,
    GoogleStrategy,
    UserService,
    CacheService,
  ],
})
export class UserModule {}