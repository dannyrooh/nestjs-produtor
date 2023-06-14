
import ValidarCnpj from "../../../../common/validar.cnpj/validar.cnpj";
import CnpjInvalidoError from "../exception/cnpjinvalido.error";
import ValidarCpf from "../../../../common/validar.cpf/validar.cpf";
import CpfInvalidoError from "../exception/cpfinvalido.error";


export default class CnpjCpfValidator {

    public async cnpj(value: string) {
        if (!ValidarCnpj.execute(value))
            throw new CnpjInvalidoError()
    }

    public async cpf(value: string) {
        if (!ValidarCpf.execute(value))
            throw new CpfInvalidoError()
    }

}