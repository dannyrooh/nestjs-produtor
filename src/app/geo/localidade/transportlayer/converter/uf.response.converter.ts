import { Injectable, Scope } from "@nestjs/common";
import { LocalidadeEntity } from "../../domain/entities/localidade.entity";
import LocalidadeResponse from "../dto/localidade.response";

@Injectable({ scope: Scope.REQUEST })
export default class LocalidadeResponseConverter {

    entity(entity: LocalidadeEntity): LocalidadeResponse {
        return new LocalidadeEntity(entity.id, entity.nome, entity.uf);
    }

    lista(entities: Array<LocalidadeEntity>): Array<LocalidadeEntity> {
        return entities.flatMap(e => this.entity(e));
    }

}