import { Injectable, Scope } from "@nestjs/common";
import { CulturaModel } from "../model/Cultura.model";
import { CulturaEntity } from "../../domain/entities/Cultura.entity";

@Injectable({ scope: Scope.REQUEST })
export default class CulturaModelConverter {

    toEntity(model: CulturaModel): CulturaEntity {
        return (model) ? new CulturaEntity(model.id, model.nome, model.ativa) : null;
    }

    toEntitylist(models: Array<CulturaModel>): Array<CulturaEntity> {
        return models ? models.flatMap(m => this.toEntity(m)) : null;
    }

    toModel(entity: CulturaEntity): CulturaModel {
        let model = new CulturaModel();
        model.id = (entity.id) ? entity.id : null;
        model.nome = entity.nome;
        model.ativa = entity.ativa;
        return model;
    }

}