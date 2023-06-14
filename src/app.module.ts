import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigDatabaseModule } from './config/config-database.module';
import { GeoModule } from './app/geo/geo.module';
import { ProdutorModule } from './app/produtor/produtor.module';


@Module({
  imports: [ConfigDatabaseModule, GeoModule, ProdutorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
