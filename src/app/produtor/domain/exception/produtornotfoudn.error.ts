export default class ProdutorNotFoundError extends Error {

    public static MESSAGE_ERROR(k) {
        return `Não foi encontrado nenhum Produtor para a chave ${k}`;
    }

    constructor(key: string) {
        super(ProdutorNotFoundError.MESSAGE_ERROR(key))
    }
}

