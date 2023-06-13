export default class UfNotFoundError extends Error {
    constructor(key: string) {
        super(`Não foi encontrado nenhum estado para a chave ${key}`)
    }
}