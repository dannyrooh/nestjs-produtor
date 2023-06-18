export default class LocalidadeIdAssignedError extends Error {

    public static MESSAGE_ERROR = 'Id não deve ser informando para inclusão';

    constructor() {
        super(LocalidadeIdAssignedError.MESSAGE_ERROR)
    }
}