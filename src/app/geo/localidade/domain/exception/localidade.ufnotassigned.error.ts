export default class LocalidadeUfNotAssignedError extends Error {

    public static MESSAGE_ERROR = 'Uf deve ser informada';

    constructor() {
        super(LocalidadeUfNotAssignedError.MESSAGE_ERROR)
    }
}