import { Injectable, Scope } from "@nestjs/common";
import { ProdutorModel } from "../model/produtor.model";
import { ProdutorEntity } from "../../domain/entities/produtor.entity";
import { AreaEntity } from "../../domain/entities/area.entity";

@Injectable({ scope: Scope.REQUEST })
export default class ProdutoModelConverter {

    toEntity(model: ProdutorModel): ProdutorEntity {

        if (!model) {
            return null;
        }

        return new ProdutorEntity(
            model.id,
            model.cpfcnpj,
            model.nome,
            model.fazenda,
            model.localidadeModel.nome,
            model.localidadeModel.ufmodel.uf,
            new AreaEntity(
                model.area_total,
                model.area_agricultavel,
                model.area_vegetacao),
            []);


    }

    toEntitylist(models: Array<ProdutorModel>): Array<ProdutorEntity> {

        return models ? models.flatMap(m => this.toEntity(m)) : null;
    }

}