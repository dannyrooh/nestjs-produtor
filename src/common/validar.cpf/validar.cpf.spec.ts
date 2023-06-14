import ValidarCpf from './validar.cpf';


describe('ValidarCpf', () => {

  //CPF GERADO POR GERADOR DA INTERNET
  let cpf_valido_fmt = 'CPF 268.483.130-09';
  let cpf_valido = '26848313009';
  let cpf_invalido = '16848313009';

  it('should be defined', () => {
    expect(new ValidarCpf()).toBeDefined();
  });

  it('should be true when some character', () => {
    let cpf = '12345678901';
    expect(ValidarCpf.calcDigitVerificador(cpf)).not.toEqual(cpf);
    expect(ValidarCpf.calcDigitVerificador(cpf_valido)).toEqual(cpf_valido);
  });

  it('should be invalid cpf length different 11', () => {
    expect(ValidarCpf.execute(cpf_invalido)).toBeFalsy;
  });

  it('should be execute cpf invalido', () => {
    expect(ValidarCpf.execute(cpf_valido + '0')).toBeFalsy;
    expect(ValidarCpf.execute(cpf_invalido)).toBeFalsy;
    for (let i = 0; i < 10; i++)
      expect(ValidarCpf.execute(i.toString().repeat(11))).toBeFalsy;
  });

  it('should be execute cpf valido', () => {
    expect(ValidarCpf.execute(cpf_valido)).toBeTruthy;
    expect(ValidarCpf.execute(cpf_valido_fmt)).toBeTruthy;
  });


});
