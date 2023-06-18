export default class ProdutorIdLocalidadeInvalidoError extends Error {

    public static MESSAGE_ERROR = 'Cidade_id informado não existe';

    constructor() {
        super(ProdutorIdLocalidadeInvalidoError.MESSAGE_ERROR)
    }
}