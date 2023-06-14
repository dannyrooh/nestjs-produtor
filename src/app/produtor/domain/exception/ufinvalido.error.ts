export default class UfInvalidoError extends Error {

    public static MESSAGE_ERROR = 'Estado informado não é válido';

    constructor() {
        super(UfInvalidoError.MESSAGE_ERROR)
    }
}