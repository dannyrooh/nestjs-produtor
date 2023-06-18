import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import AreaValidator from './domain/validators/area.validator';
import CnpjCpfValidator from './domain/validators/cnpjcpf.validator';
import ProdutorUseCase from './domain/usecase/produtor.usercase';
import ProdutorServico from './domain/service/produtor.service';
import ProdutorDataProvider from './domain/dataprovider/produtor.dataprovider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutorModel } from './datasource/model/produtor.model';
import { ProdutorController } from './transportlayer/http/produtor.controller';
import { ProdutorRepository } from './datasource/repository/produtor.repository';
import ProdutorResponseConverter from './transportlayer/converter/produtor.dto.converter';
import ProdutoModelConverter from './datasource/converter/produtor.model.converter';
import { ProdutorCulturaModel } from './datasource/model/produtor.cultura.model';
import { CulturaController } from './transportlayer/http/cultura.controller';
import { CulturaRepository } from './datasource/repository/cultura.repository';
import CulturaDataProvider from './domain/dataprovider/Cultura.dataprovider';
import CulturaUseCase from './domain/usecase/Cultura.usercase';
import CulturaService from './domain/service/cultura.service';
import CulturaModelConverter from './datasource/converter/cultura.model.converter';
import CulturaResponseConverter from './transportlayer/converter/cultura.dto.converter';
import { CulturaModel } from './datasource/model/cultura.model';
import { GeoModule } from '../geo/geo.module';

export const ProdutorUseCaseExport = { provide: ProdutorUseCase, useClass: ProdutorServico }
export const ProdutorDataProduviderExport = { provide: ProdutorDataProvider, useClass: ProdutorRepository }

export const CulturaUseCaseExport = { provide: CulturaUseCase, useClass: CulturaService }
export const CulturaDataProduviderExport = { provide: CulturaDataProvider, useClass: CulturaRepository }

@Module({
  imports: [CommonModule, GeoModule, TypeOrmModule.forFeature([ProdutorModel, ProdutorCulturaModel, CulturaModel])],
  controllers: [ProdutorController, CulturaController],
  providers: [
    AreaValidator, CnpjCpfValidator,
    ProdutorUseCaseExport, ProdutorDataProduviderExport, ProdutorResponseConverter, ProdutoModelConverter,
    CulturaUseCaseExport, CulturaDataProduviderExport, CulturaResponseConverter, CulturaModelConverter],
  exports: []
})
export class ProdutorModule { }
