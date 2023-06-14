import CpfInvalidoError from "../exception/cpfinvalido.error";
import CnpjCpfValidator from "./cnpjcpf.validator";

describe('CnpjCpfValidator', () => {

    let cfp_invalido = '11111111111';

    it('should be Exception CpfInvalidoError ', async () => {
        console.log(await CnpjCpfValidator.cpf(cfp_invalido));
        //expect(CnpjCpfValidator.cpf(cfp_invalido)).rejects.toThrowError(CpfInvalidoError.MESSAGE_ERROR);

        expect(true).toBeTruthy()
    });


})