import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import AreaValidator from './domain/validators/area.validator';
import CnpjCpfValidator from './domain/validators/cnpjcpf.validator';
import ProdutorUseCase from './domain/usecase/produtor.usercase';
import ProdutorServico from './domain/service/produtor.service';
import ProdutorDataProvider from './domain/dataprovider/produtor.dataprovider';
import ProdutorRepositoryMock from './datasource/repository-mock/produtor.repository-mock';

export const ProdutorUseCaseExport = {
  provide: ProdutorUseCase,
  useClass: ProdutorServico
}

export const ProdutorDataProduviderExport = {
  provide: ProdutorDataProvider,
  useClass: ProdutorRepositoryMock
}


@Module({
  imports: [CommonModule],
  controllers: [],
  providers: [AreaValidator, CnpjCpfValidator, ProdutorUseCaseExport, ProdutorDataProduviderExport],
  exports: []
})
export class ProdutorModule { }
