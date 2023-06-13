import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigDatabaseModule } from './config/config-database.module';
import { GeoModule } from './app/geo/geo.module';


@Module({
  imports: [ConfigDatabaseModule, GeoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
