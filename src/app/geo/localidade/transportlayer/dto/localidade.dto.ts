export default class LocalidadeDTO {

    constructor(
        public readonly id: number,
        public readonly nome: string,
        public readonly uf: string,
        public readonly ufid?: number
    ) { }

}