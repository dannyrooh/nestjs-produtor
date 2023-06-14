import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import AreaValidator from './domain/validators/area.validator';
import CnpjCpfValidator from './domain/validators/cnpjcpf.validator';

@Module({
  imports: [CommonModule],
  controllers: [],
  providers: [AreaValidator, CnpjCpfValidator],
  exports: []
})
export class ProdutorModule { }
