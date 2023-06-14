import Util from "./util";

describe('Util', () => {

  let cpf_valido_fmt = 'CPF 268.483.130-09';
  let cpf_valido = '26848313009';
  let cpf_invalido = '16848313009';

  it('should be unformat cpf and return only number', () => {
    expect(Util.unformat(cpf_valido_fmt)).toEqual(cpf_valido);
  });

  it('should be true when some character', () => {
    expect(Util.isOnlyChar(cpf_invalido)).toBeFalsy;
    expect(Util.isOnlyChar('11111111111')).toBeTruthy;

  });

  it('should be true when some character', () => {
    for (let i = 0; i < 10; i++)
      expect(Util.isOnlyChar(i.toString().repeat(11))).toBeTruthy;
  });

});
