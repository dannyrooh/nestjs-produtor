import Util from "../util/util";

export default class ValidarCnpj {


    public static calcDigitVerificador(cnpj: string): string {

        let acnpj = cnpj.slice(0, 12).split('');

        let map = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

        let mod_dig = (d) => d >= 2 ? 11 - d : 0;

        let mod = (s) => mod_dig(s % 11).toString();

        let calc_dig = () => mod(acnpj.reduce((acummulator, currentvalue, index) => acummulator + (Number(currentvalue) * (map[index])), 0));

        acnpj.push(calc_dig());
        map.unshift(6);
        acnpj.push(calc_dig());

        return acnpj.join('');

    }


    public static execute(cnpj: string): boolean {

        cnpj = Util.unformat(cnpj);

        if (cnpj.length !== 11) return false;

        if (Util.isOnlyChar(cnpj)) return false;

        if (this.calcDigitVerificador(cnpj) !== cnpj) return false;

        return true;
    }


}
