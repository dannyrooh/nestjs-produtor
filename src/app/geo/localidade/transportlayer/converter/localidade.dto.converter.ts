import { Injectable, Scope } from "@nestjs/common";
import { LocalidadeEntity } from "../../domain/entities/localidade.entity";
import LocalidadeDTO from "../dto/localidade.dto";

@Injectable({ scope: Scope.REQUEST })
export default class LocalidadeDTOConverter {

    toDto(entity: LocalidadeEntity): LocalidadeDTO {
        return new LocalidadeDTO(entity.id, entity.nome, entity.uf, entity.ufid);
    }

    lista(entities: Array<LocalidadeEntity>): Array<LocalidadeEntity> {
        return entities.flatMap(e => this.toDto(e));
    }

    toEntity(dto: LocalidadeDTO): LocalidadeEntity {
        return new LocalidadeEntity(dto.id, dto.nome, dto.uf, dto.ufid);
    }

}