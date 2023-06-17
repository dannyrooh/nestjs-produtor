import { Injectable, Scope } from "@nestjs/common";
import { UfEntity } from "../../domain/entities/uf.entity";
import { UfModel } from "../model/uf.model";


@Injectable({ scope: Scope.REQUEST })
export default class UfModelConverter {

    toEntity(model: UfModel): UfEntity {
        return (model) ? new UfEntity(model.id, model.uf, model.nome) : null;
    }

    toEntitylist(models: Array<UfModel>): Array<UfEntity> {

        return models ? models.flatMap(m => this.toEntity(m)) : null;
    }

}