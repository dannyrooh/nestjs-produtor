import Util from '../util/util';
import ValidarCnpj from './validar.cnpj';

describe('ValidarCnpj', () => {


  let cnpj_valido_fmt = '11.222.333/0001-81';
  let cnpj_valido = '11222333000181';
  let cnpj_invalido = '11222333000182';

  it('should be true when some character', () => {

    expect(ValidarCnpj.calcDigitVerificador(cnpj_invalido)).not.toEqual(cnpj_invalido);
    expect(ValidarCnpj.calcDigitVerificador(cnpj_valido)).toEqual(cnpj_valido);
    expect(ValidarCnpj.calcDigitVerificador(Util.unformat(cnpj_valido_fmt))).toEqual(cnpj_valido);
  });



});
