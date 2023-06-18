
import ValidarCnpj from "../../../../common/validar.cnpj/validar.cnpj";
import CnpjInvalidoError from "../exception/cnpjinvalido.error";
import ValidarCpf from "../../../../common/validar.cpf/validar.cpf";
import CpfInvalidoError from "../exception/cpfinvalido.error";
import CnpjCpfInvalidoError from "../exception/cnpjcpfinvalido.error";
import Util from "../../../../common/util/util";


export default class CnpjCpfValidator extends Util {

    public async cnpj(value: string) {
        if (!ValidarCnpj.execute(value))
            throw new CnpjInvalidoError()
    }

    public async cpf(value: string) {
        if (!ValidarCpf.execute(value))
            throw new CpfInvalidoError()
    }

    public static async execute(doc: string) {

        let validator = new CnpjCpfValidator();

        if (doc.length == 11) { await validator.cpf(doc) }
        else if (doc.length == 14) { await validator.cnpj(doc) }
        else throw new CnpjCpfInvalidoError();

    }

}