import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AuthModule, UsersModule, ProfileModule,
    MongooseModule.forRoot('Tap here the link connection to your mongodb.'), //The author of this API is the fullstack developer Fabian Andrade
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
