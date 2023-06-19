import { Injectable, Scope } from "@nestjs/common";
import { CulturaEntity } from "../../domain/entities/Cultura.entity";
import { CulturaDTO } from "../dto/cultura.dto";

@Injectable({ scope: Scope.REQUEST })
export default class CulturaDTOConverter {

    toDTO(entity: CulturaEntity): CulturaDTO {
        return new CulturaDTO(entity.id, entity.nome, entity.ativa);
    }

    toDTO_list(entities: Array<CulturaEntity>): Array<CulturaDTO> {
        return entities.flatMap(e => this.toDTO(e));
    }

    entity(dto: CulturaDTO): CulturaEntity {
        return new CulturaEntity(dto.id, dto.nome, dto.ativa);
    }

    entity_list(dto: Array<CulturaDTO>): Array<CulturaEntity> {
        return dto.flatMap(e => this.entity(e));
    }



}