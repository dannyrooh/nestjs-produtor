export default class CulturaEmptyError extends Error {

    public static MESSAGE_ERROR = 'Não há culturas de plantio cadastradas';

    constructor() {
        super(CulturaEmptyError.MESSAGE_ERROR)
    }
}