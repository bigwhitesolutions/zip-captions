import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SessionGateway } from './gateways/session.gateway';
import { CacheService } from './services/cache/cache.service';
import { PeerServerService } from './services/peer-server/peer-server.service';
import { HttpModule } from '@nestjs/axios';
import { GoogleStrategy } from './strategies/google.strategy';
import { UserModule } from './modules/user/user.module';
import { Logger } from '@nestjs/common';

function getDbConnectionString() {
  const dbConnectionString =
    'mongodb://' +
    process.env.MONGO_DB_URL +
    ':' +
    process.env.MONGO_DB_PORT +
    '/' +
    process.env.MONGO_DB_NAME +
    '?ssl=true&replicaSet=globaldb';

  Logger.log(`DB Connection string: ${dbConnectionString}`);

  return dbConnectionString;
}

@Module({
  imports: [
    CacheModule.register({ ttl: 60 * 60 * 1000, max: 500, isGlobal: true }),
    MongooseModule.forRoot(getDbConnectionString(), {
      auth: {
        username: process.env.MONGO_DB_USER,
        password: process.env.MONGO_DB_PASSWORD,
      },
      retryWrites: false,
    }),
    HttpModule,
    UserModule,
  ],
  providers: [
    CacheService,
    PeerServerService,
    SessionGateway,
    { provide: APP_INTERCEPTOR, useClass: CacheInterceptor },
    GoogleStrategy,
  ],
  exports: [],
})
export class AppModule {}
