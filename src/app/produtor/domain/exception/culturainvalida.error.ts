export default class CulturaInvalidoError extends Error {

    public static MESSAGE_ERROR = 'Cultura informada não está cadastrada';

    constructor() {
        super(CulturaInvalidoError.MESSAGE_ERROR)
    }
}