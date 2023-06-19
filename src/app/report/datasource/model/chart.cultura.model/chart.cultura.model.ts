export default class ChartCulturaModel {

    constructor(
        public readonly id: number,
        public readonly nome: string,
        public readonly area_agricultavel: number,
        public readonly area_vegetacao: number,
        public readonly area_total: number
    ) { }
}
