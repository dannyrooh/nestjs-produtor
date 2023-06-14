export default class AreaTotalError extends Error {

    public static MESSAGE_ERROR = 'A area total deve ser superior ou igual a soma das áreas agricultável e da vegetação';

    constructor() {
        super(AreaTotalError.MESSAGE_ERROR)
    }
}