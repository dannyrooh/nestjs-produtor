import { Module } from '@nestjs/common';
import { UfController } from './uf/transportlayer/uf.controller';
import { UfService } from './uf/domain/uf.service';
import { UfEntity } from './uf/domain/entities/uf.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import IUfUseCase from './uf/domain/uf.usecase';
import UfResponseConverter from './uf/transportlayer/converter/uf.response.converter';
import UfDataSource from './uf/dataprovider/uf.datasource';
import { UfRepository } from './uf/dataprovider/repository/uf.repository';
import { UfModel } from './uf/dataprovider/model/uf.model';
import UfModelConverter from './uf/domain/converter/uf.model.converter';


const UfUseCaseExport = {
  provide: IUfUseCase,
  useClass: UfService
}

const UfDataProviderExport = {
  provide: UfDataSource,
  useClass: UfRepository
}


@Module({
  imports: [TypeOrmModule.forFeature([UfEntity, UfModel])],
  controllers: [UfController],
  providers: [
    UfResponseConverter,
    UfUseCaseExport,
    UfModelConverter,
    UfDataProviderExport],
  exports: [
    UfUseCaseExport
  ]
})
export class GeoModule { }
