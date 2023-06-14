export default class CnpjInvalidoError extends Error {

    public static MESSAGE_ERROR = 'CNPJ informado não é valido';

    constructor() {
        super(CnpjInvalidoError.MESSAGE_ERROR)
    }
}