export default class AreaNaoInformadaError extends Error {

    public static MESSAGE_ERROR = 'A área deve ser informada';

    constructor() {
        super(AreaNaoInformadaError.MESSAGE_ERROR)
    }
}