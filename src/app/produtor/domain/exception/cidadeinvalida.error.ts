export default class CidadeInvalidaError extends Error {

    public static MESSAGE_ERROR = 'Cidade informada não está cadastrada';

    constructor() {
        super(CidadeInvalidaError.MESSAGE_ERROR)
    }
}