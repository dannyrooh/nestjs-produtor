export default class LocalidadeAlreadyRegisterError extends Error {

    public static MESSAGE_ERROR(k) {
        return `Localidade "${k}" já cadastrada`;
    }

    constructor(key: string) {
        super(LocalidadeAlreadyRegisterError.MESSAGE_ERROR(key))
    }
}