export default class CulturaNotFoundError extends Error {

    public static MESSAGE_ERROR(k) {
        return `Não foi encontrado nenhuma cultura para o id ${k}`;
    }

    constructor(key: string) {
        super(CulturaNotFoundError.MESSAGE_ERROR(key))
    }
}