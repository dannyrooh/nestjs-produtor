export default class ProdutorJaCadastradoError extends Error {

    public static MESSAGE_ERROR = 'Produtor já cadastrado';

    constructor() {
        super(ProdutorJaCadastradoError.MESSAGE_ERROR)
    }
}