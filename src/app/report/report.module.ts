import { Module } from '@nestjs/common';
import { ReportController } from './transportlayer/http/report/report.controller';
import ReportDataProvider from './domain/dataprovider/report.dataprovider';
import { ReportRepository } from './datasource/repository/report.repository';
import AreaFazendaUseCase from './domain/usecase/area.fazenda.usecase';
import AreaFazendaService from './domain/service/area.fazenda.service';
import AreaPorCulturaService from './domain/service/area.por.cultura.service';
import AreaPorCulturaUseCase from './domain/usecase/area.por.cultura.usecase';
import AreaPorUsoSoloUseCase from './domain/usecase/area.uso.solo.usecase';
import AreaPorUsoSoloService from './domain/service/area.uso.solo.service';
import AreaPorEstadoUseCase from './domain/usecase/area.por.estado.usecase';
import AreaPorEstadoService from './domain/service/area.por.estado.service';
import QuantidadeFazendaUseCase from './domain/usecase/quantidade.fazenda.usecase';
import QuantidadeFazendaService from './domain/service/quantidade.fazenda.service';

export const AreaFazendaUseCaseExport = {
  provide: AreaFazendaUseCase,
  useClass: AreaFazendaService,
};
export const AreaPorCulturaUseCaseExport = {
  provide: AreaPorCulturaUseCase,
  useClass: AreaPorCulturaService,
};
export const AreaPorUsoSoloUseCaseExport = {
  provide: AreaPorUsoSoloUseCase,
  useClass: AreaPorUsoSoloService,
};
export const AreaPorEstadoUseCaseExport = {
  provide: AreaPorEstadoUseCase,
  useClass: AreaPorEstadoService,
};
export const QuantidadeFazendaUseCaseExport = {
  provide: QuantidadeFazendaUseCase,
  useClass: QuantidadeFazendaService,
};

export const ReportDataProduviderExport = {
  provide: ReportDataProvider,
  useClass: ReportRepository,
};

@Module({
  controllers: [ReportController],
  providers: [
    ReportDataProduviderExport,
    AreaFazendaUseCaseExport,
    AreaPorCulturaUseCaseExport,
    AreaPorUsoSoloUseCaseExport,
    AreaPorEstadoUseCaseExport,
    QuantidadeFazendaUseCaseExport,
  ],
})
export class ReportModule {}
