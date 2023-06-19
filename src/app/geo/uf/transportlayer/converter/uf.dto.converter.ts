import { Injectable, Scope } from "@nestjs/common";
import { UfEntity } from "../../domain/entities/uf.entity";
import UfDTO from "../dto/uf.DTO";



@Injectable({ scope: Scope.REQUEST })
export default class UfDTOConverter {

    entity(entity: UfEntity): UfDTO {
        return new UfDTO(entity.id, entity.nome, entity.uf)
    }

    lista(entities: Array<UfEntity>): Array<UfDTO> {
        return entities.flatMap(e => this.entity(e));
    }

}