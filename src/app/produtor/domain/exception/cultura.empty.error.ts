export default class CulturaEmptyError extends Error {
    constructor() {
        super('Não há culturas de plantio cadastradas')
    }
}