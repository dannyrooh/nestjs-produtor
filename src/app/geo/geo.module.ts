import { Module } from '@nestjs/common';
import { UfController } from './uf/transportlayer/uf.controller';
import { UfService } from './uf/domain/uf.service';
import { UfEntity } from './uf/entities/uf.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import IUfUseCase from './uf/domain/uf.usecase';
import UfResponseConverter from './uf/transportlayer/converter/uf.response.converter';


const UfUseCaseExport = {
  provide: IUfUseCase,
  useClass: UfService
}


@Module({
  imports: [TypeOrmModule.forFeature([UfEntity])],
  controllers: [UfController],
  providers: [UfResponseConverter, UfUseCaseExport],
  exports: [
    UfUseCaseExport
  ]
})
export class GeoModule { }
