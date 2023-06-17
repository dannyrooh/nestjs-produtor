export default class LocalidadefEmptyError extends Error {

    public static MESSAGE_ERROR = 'Não há cidades cadastradas';

    constructor() {
        super(LocalidadefEmptyError.MESSAGE_ERROR)
    }
}