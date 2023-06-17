import { AreaResponse } from "./area.response";
import { CulturaResponse } from "./cultura.response";

export class ProdutorResponse {

    constructor(
        public id: number = 0,
        public doc: string = '',
        public nome: string = '',
        public fazenda: string = '',
        public cidade: string = '',
        public uf: string = '',
        public area: AreaResponse = null,
        public culturas: Array<CulturaResponse> = []
    ) { }

}
