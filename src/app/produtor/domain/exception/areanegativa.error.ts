export default class AreaNegativaError extends Error {

    public static MESSAGE_ERROR = 'Valor informado não deve ser negativo';

    constructor() {
        super(AreaNegativaError.MESSAGE_ERROR)
    }
}