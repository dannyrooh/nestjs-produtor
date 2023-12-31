import { Injectable, Scope } from "@nestjs/common";
import { ProdutorEntity } from "../../domain/entities/produtor.entity";
import { ProdutorDTO } from "../dto/produtor.dto";
import { AreaDTO } from "../dto/area.dto";
import CulturaDTOConverter from "./cultura.dto.converter";

@Injectable({ scope: Scope.REQUEST })
export default class ProdutorDTOConverter {

    constructor(
        private readonly culturaDTOConverter: CulturaDTOConverter
    ) { }

    toDTO(entity: ProdutorEntity): ProdutorDTO {

        return new ProdutorDTO(
            entity.id,
            entity.doc,
            entity.nome,
            entity.fazenda,
            entity.cidade,
            entity.uf,
            entity.cidade_id,
            new AreaDTO(
                entity.area.total,
                entity.area.agricultavel,
                entity.area.vegetacao),
            this.culturaDTOConverter.toDTO_list(entity.culturas)
        )
    }

    lista(entities: Array<ProdutorEntity>): Array<ProdutorDTO> {
        return entities.flatMap(e => this.toDTO(e));
    }

    toEntity(dto: ProdutorDTO): ProdutorEntity {

        return new ProdutorEntity(
            dto.id,
            dto.doc,
            dto.nome,
            dto.fazenda,
            dto.cidade,
            dto.uf,
            dto.cidade_id,
            new AreaDTO(
                dto.area.total,
                dto.area.agricultavel,
                dto.area.vegetacao),
            this.culturaDTOConverter.entity_list(dto.culturas)
        )


    }


}