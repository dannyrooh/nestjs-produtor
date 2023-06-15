export default class ProdutorIdError extends Error {

    public static MESSAGE_ERROR = 'Id do Produtor não é valido';

    constructor() {
        super(ProdutorIdError.MESSAGE_ERROR)
    }
}