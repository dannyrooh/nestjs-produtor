import Util from "../util/util";

export default class ValidarCpf {

    //retorna o cpf com os dois informados
    public static calcDigitVerificador(cpf: string): string {

        let acpf = cpf.slice(0, 9).split('');

        let mod_dig = (d) => d >= 10 ? 0 : d;

        let mod = (s) => mod_dig((s * 10) % 11).toString();

        let calc_dig = (multiplicador) => mod(acpf.reduce((acummulator, currentvalue, index) => acummulator + (Number(currentvalue) * (multiplicador - index)), 0));

        acpf.push(calc_dig(10));
        acpf.push(calc_dig(11));

        return acpf.join('');

    }

    public static execute(cpf: string): boolean {

        cpf = Util.unformat(cpf);

        if (cpf.length !== 11) return false;

        if (Util.isOnlyChar(cpf)) return false;

        if (this.calcDigitVerificador(cpf) !== cpf) return false;

        return true;
    }

}
