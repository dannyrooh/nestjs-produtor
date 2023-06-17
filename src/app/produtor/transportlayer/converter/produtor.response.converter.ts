import { Injectable, Scope } from "@nestjs/common";
import { ProdutorEntity } from "../../domain/entities/produtor.entity";
import { ProdutorResponse } from "../dto/produtor.response";
import { AreaResponse } from "../dto/area.response";

@Injectable({ scope: Scope.REQUEST })
export default class ProdutorResponseConverter {

    entity(entity: ProdutorEntity): ProdutorResponse {

        return new ProdutorResponse(entity.id, entity.doc, entity.nome, entity.fazenda, entity.cidade, entity.uf,
            new AreaResponse(entity.area.total, entity.area.agricultavel, entity.area.vegetacao),
            [])

    }

    lista(entities: Array<ProdutorEntity>): Array<ProdutorResponse> {
        return entities.flatMap(e => this.entity(e));
    }

}