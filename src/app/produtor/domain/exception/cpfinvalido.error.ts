export default class CpfInvalidoError extends Error {

    public static MESSAGE_ERROR = 'CPF informado não é valido';

    constructor() {
        super(CpfInvalidoError.MESSAGE_ERROR)
    }
}