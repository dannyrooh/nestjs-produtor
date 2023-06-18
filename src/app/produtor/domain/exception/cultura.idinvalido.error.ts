export default class CulturaIdError extends Error {

    public static MESSAGE_ERROR = 'Id da cultura deve ser informado';

    constructor() {
        super(CulturaIdError.MESSAGE_ERROR)
    }
}