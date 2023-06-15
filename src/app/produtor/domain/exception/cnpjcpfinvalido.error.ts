export default class CnpjCpfInvalidoError extends Error {

    public static MESSAGE_ERROR = 'CNJP/CPF informado não é valido';

    constructor() {
        super(CnpjCpfInvalidoError.MESSAGE_ERROR)
    }
}