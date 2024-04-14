import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-co1ggmed3nmc73a0bbqg-a',
      port: 5432,
      username: 'aula_milton_user',
      password: 'jJ8mAjGLazggbReYFgc63fQ0Rr3MVtjG',
      database: 'aula_milton',
      entities: [/* Adicione suas entidades aqui */],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
