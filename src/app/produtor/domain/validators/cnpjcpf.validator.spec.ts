import CnpjInvalidoError from "../exception/cnpjinvalido.error";
import CpfInvalidoError from "../exception/cpfinvalido.error";
import CnpjCpfValidator from "./cnpjcpf.validator";

describe('CnpjCpfValidator', () => {

    let cfp_invalido = '11111111111';
    let cnpj_invalido = '11111111111111';

    let cnpjCpfValidator = new CnpjCpfValidator();

    it('should be Exception CpfInvalidoError for CPF inválido ', async () => {
        await expect(cnpjCpfValidator.cpf(cfp_invalido)).rejects.toThrowError(CpfInvalidoError.MESSAGE_ERROR);
    });

    it('should be Exception CpfInvalidoError for CNPJ inválido ', async () => {
        await expect(cnpjCpfValidator.cnpj(cnpj_invalido)).rejects.toThrowError(CnpjInvalidoError.MESSAGE_ERROR);
    });


})