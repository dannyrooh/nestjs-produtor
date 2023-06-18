export default class ProdutorLocalidadeError extends Error {

    public static MESSAGE_ERROR = 'Deve ser informado Nome ou ID da cidade';

    constructor() {
        super(ProdutorLocalidadeError.MESSAGE_ERROR)
    }
}