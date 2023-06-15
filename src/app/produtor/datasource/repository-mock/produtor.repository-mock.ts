import ProdutorDataProvider from "../../domain/dataprovider/produtor.dataprovider";
import { ProdutorEntity } from "../../domain/entities/produtor.entity";
import { Injectable, Scope } from "@nestjs/common";

@Injectable({ scope: Scope.REQUEST })
export default class ProdutorRepositoryMock implements ProdutorDataProvider {

    async append(produtoEntity: ProdutorEntity): Promise<Number> {
        throw new Error("Method not implemented.");
    }
    async updated(produtoEntity: ProdutorEntity): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(produtor: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async get(id: number): Promise<ProdutorEntity> {
        throw new Error("Method not implemented.");
    }
    async getByCnpjCpf(cnpjcpf: string): Promise<ProdutorEntity> {
        throw new Error("Method not implemented.");
    }

}