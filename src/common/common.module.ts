import { Module } from '@nestjs/common';
import ValidarCpf from './validar.cpf/validar.cpf';
import ValidarCnpj from './validar.cnpj/validar.cnpj';
import Util from './util/util';



@Module({
    providers: [ValidarCpf, ValidarCnpj, Util],
    exports: [ValidarCpf, ValidarCnpj, Util]
})
export class CommonModule { }
