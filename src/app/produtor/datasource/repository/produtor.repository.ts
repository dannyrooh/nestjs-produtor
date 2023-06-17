import { Injectable, Scope } from "@nestjs/common";
import ProdutorDataProvider from "../../domain/dataprovider/produtor.dataprovider";
import { ProdutorEntity } from "../../domain/entities/produtor.entity";
import { ProdutorModel } from "../model/produtor.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import ProdutoModelConverter from "../converter/produtor.model.converter";

@Injectable({ scope: Scope.REQUEST })
export class ProdutorRepository implements ProdutorDataProvider {

    constructor(
        @InjectRepository(ProdutorModel)
        private readonly produtorRepository: Repository<ProdutorModel>,
        private readonly produtorModelConverter: ProdutoModelConverter) { }


    async get(id: number): Promise<ProdutorEntity> {

        return this.produtorModelConverter.toEntity(
            await this.produtorRepository.findOne({ where: { id } }));
    }

    append(produtoEntity: ProdutorEntity): Promise<Number> {
        throw new Error("Method not implemented.");
    }

    updated(produtoEntity: ProdutorEntity): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    delete(produtor: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    getByCnpjCpf(cnpjcpf: string): Promise<ProdutorEntity> {
        throw new Error("Method not implemented.");
    }

}
