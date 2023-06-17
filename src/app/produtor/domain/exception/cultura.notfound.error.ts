export default class CulturaNotFoundError extends Error {

    public static UFNOFOUNDMESSAGE(k) {
        return `Não foi encontrado nenhuma cultura para o id ${k}`;
    }

    constructor(key: string) {
        super(CulturaNotFoundError.UFNOFOUNDMESSAGE(key))
    }
}