export default class UfEmptyError extends Error {
    constructor() {
        super('Não há estados cadastrados')
    }
}