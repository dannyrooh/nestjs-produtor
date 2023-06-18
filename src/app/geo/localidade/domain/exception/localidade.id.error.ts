export default class LocalidadeIdError extends Error {

    public static MESSAGE_ERROR = 'Informe um id válido para a Localidade';

    constructor() {
        super(LocalidadeIdError.MESSAGE_ERROR)
    }
}