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

        let localidade = '';
        let uf = '';
        let localidade_id = 0;

        if (model.localidadeModel) {
            localidade = model.localidadeModel.nome;
            localidade_id = model.localidadeModel.id;
            uf = model.localidadeModel.ufmodel.uf;
        }

        return new ProdutorEntity(
            model.id,
            model.cnpjcpf,
            model.nome,
            model.fazenda,
            localidade,
            uf,
            localidade_id,
            new AreaEntity(
                model.area_total,
                model.area_agricultavel,
                model.area_vegetacao),
            []);
    }

    toEntitylist(models: Array<ProdutorModel>): Array<ProdutorEntity> {

        return models ? models.flatMap(m => this.toEntity(m)) : null;
    }


    toModel(entity: ProdutorEntity): ProdutorModel {
        let model = new ProdutorModel();
        model.id = (entity.id) ? entity.id : null;
        model.nome = entity.nome;
        model.cnpjcpf = entity.doc;
        model.fazenda = entity.fazenda;
        model.area_agricultavel = entity.area.agricultavel;
        model.area_vegetacao = entity.area.vegetacao;
        model.area_total = entity.area.total;
        model.localidade = entity.cidade_id;
        return model;
    }

}