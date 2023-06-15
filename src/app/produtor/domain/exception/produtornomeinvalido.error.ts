export default class ProdutorNomeInvalido extends Error {

    public static MESSAGE_ERROR = 'Nome do produtor deve ser informado com mais de três letras';

    constructor() {
        super(ProdutorNomeInvalido.MESSAGE_ERROR)
    }
}

