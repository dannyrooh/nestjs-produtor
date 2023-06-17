import { Injectable, Scope } from "@nestjs/common";
import { CulturaEntity } from "../../domain/entities/Cultura.entity";
import { CulturaResponse } from "../dto/cultura.response";
import { CulturaRequest } from "../dto/cultura.request";

@Injectable({ scope: Scope.REQUEST })
export default class CulturaResponseConverter {

    response(entity: CulturaEntity): CulturaResponse {
        return new CulturaResponse(entity.id, entity.nome, entity.ativa);
    }

    resonse_list(entities: Array<CulturaEntity>): Array<CulturaResponse> {
        return entities.flatMap(e => this.response(e));
    }

    entity(request: CulturaRequest): CulturaEntity {
        return new CulturaEntity(request.id, request.nome, request.ativa);
    }

    entity_list(request: Array<CulturaRequest>): Array<CulturaEntity> {
        return request.flatMap(e => this.entity(e));
    }



}