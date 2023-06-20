import { AreaEntity } from "./area.entity";
import { CulturaEntity } from "./cultura.entity";

export class ProdutorEntity {

    constructor(
        public id: number = 0,
        public doc: string = '',
        public nome: string = '',
        public fazenda: string = '',

        public cidade?: string,
        public uf?: string,
        public cidade_id?: number,

        public area: AreaEntity = null,
        public culturas: Array<CulturaEntity> = []
    ) { }

}
