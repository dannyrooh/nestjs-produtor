import { Injectable, Scope } from "@nestjs/common";
import { UfEntity } from "../../entities/uf.entity";
import { UfResponse } from "../entities/uf.response";

@Injectable({ scope: Scope.REQUEST })
export default class UfResponseConverter {

    entity(entity: UfEntity): UfResponse {
        return { ...entity };
    }

    lista(entities: Array<UfEntity>): Array<UfResponse> {
        return entities.flatMap(e => this.entity(e));
    }

}