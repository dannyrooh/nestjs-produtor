import { Injectable, Scope } from "@nestjs/common";
import { UfEntity } from "../../domain/entities/uf.entity";
import { UfModel } from "../../dataprovider/model/uf.model";


@Injectable({ scope: Scope.REQUEST })
export default class UfModelConverter {

    model(model: UfModel): UfEntity {
        return { ...model };
    }

    lista(entities: Array<UfModel>): Array<UfEntity> {
        return entities.flatMap(m => this.model(m));
    }

}