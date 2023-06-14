export default class UfNotFoundError extends Error {

    public static UFNOFOUNDMESSAGE(k) {
        return `Não foi encontrado nenhum estado para a chave ${k}`;
    }

    constructor(key: string) {
        super(UfNotFoundError.UFNOFOUNDMESSAGE(key))
    }
}