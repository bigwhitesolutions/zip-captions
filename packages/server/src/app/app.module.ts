import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionGateway } from './gateways/session.gateway';
import { CacheService } from './services/cache/cache.service';
import { PeerServerService } from './services/peer-server/peer-server.service';

@Module({
  imports: [
    AuthModule,
    CacheModule.register({ttl: (60 * 60 * 1000)}),
    MongooseModule.forRoot('mongodb://127.0.0.1', {
      dbName: 'zipcaptions',
      user: 'db_user',
      pass: 'changeme'
    }),
    UserModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService, 
    CacheService,
    PeerServerService, 
    SessionGateway, 
  ],
  exports: []
})
export class AppModule {}