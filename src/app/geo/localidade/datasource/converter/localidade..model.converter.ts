import { Injectable, Scope } from "@nestjs/common";
import { LocalidadeModel } from "../model/localidade.model";
import { LocalidadeEntity } from "src/app/geo/localidade/domain/entities/localidade.entity";


@Injectable({ scope: Scope.REQUEST })
export default class LocalidadeModelConverter {

    toEntity(model: LocalidadeModel): LocalidadeEntity {
        return (model) ? new LocalidadeEntity(model.id, model.nome, model.ufmodel.uf) : null;
    }

    toEntitylist(models: Array<LocalidadeModel>): Array<LocalidadeEntity> {

        return models ? models.flatMap(m => this.toEntity(m)) : null;
    }

}