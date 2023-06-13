import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Cadastro de Produtor Rural - Versão 1.0.beta';
  }
}
