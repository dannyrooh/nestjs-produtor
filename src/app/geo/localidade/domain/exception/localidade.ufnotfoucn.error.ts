export default class LocalidadeUfNotFoundError extends Error {

    public static MESSAGE_ERROR(k) {
        return `A uf "${k}" não é valida ou não está cadastrada!`;
    }

    constructor(key: string) {
        super(LocalidadeUfNotFoundError.MESSAGE_ERROR(key))
    }
}