export default class LocalidadeNotFoundError extends Error {

    public static MESSAGE_ERROR(k) {
        return `Não foi encontrado nenhuma cidade para a chave ${k}`;
    }

    constructor(key: string) {
        super(LocalidadeNotFoundError.MESSAGE_ERROR(key))
    }
}