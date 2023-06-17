import { Module } from '@nestjs/common';

import { UfService } from './uf/domain/uf.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import UfUseCase from './uf/domain/usecase/uf.usecase';
import UfResponseConverter from './uf/transportlayer/converter/uf.response.converter';
import { UfRepository } from './uf/datasource/repository/uf.repository';
import { UfModel } from './uf/datasource/model/uf.model';
import UfModelConverter from './uf/datasource/converter/uf.model.converter';
import { LocalidadeModel } from './localidade/datasource/model/localidade.model';
import UfDataProvider from './uf/domain/dataprovider/uf.dataprovider';
import LocalidadeUseCase from './localidade/domain/usecase/localidade.usecase';
import LocalidadeService from './localidade/domain/localidade.service';
import LocalidadeDataProvider from './localidade/domain/dataprovider/localidade.dataprovider';
import { LocalidadeRepository } from './localidade/datasource/repository/localidade.repository';
import LocalidadeResponseConverter from './localidade/transportlayer/converter/uf.response.converter';
import LocalidadeModelConverter from './localidade/datasource/converter/localidade..model.converter';
import { LocalidadeController } from './localidade/transportlayer/http/localidade.controller';
import { UfController } from './uf/transportlayer/http/uf.controller';

export const UfUseCaseExport = { provide: UfUseCase, useClass: UfService }
export const UfDataProviderExport = { provide: UfDataProvider, useClass: UfRepository }

export const LocalidadeUseCaseExport = { provide: LocalidadeUseCase, useClass: LocalidadeService }
export const LocalidadeDataProviderExport = { provide: LocalidadeDataProvider, useClass: LocalidadeRepository }

@Module({
  imports: [TypeOrmModule.forFeature([UfModel, LocalidadeModel])],
  controllers: [UfController, LocalidadeController],
  providers: [
    UfResponseConverter, UfUseCaseExport, UfModelConverter, UfDataProviderExport,
    LocalidadeResponseConverter, LocalidadeUseCaseExport, LocalidadeModelConverter, LocalidadeDataProviderExport,
  ],
  exports: [
    UfUseCaseExport, UfDataProviderExport, LocalidadeDataProviderExport, LocalidadeUseCaseExport
  ]
})
export class GeoModule { }
