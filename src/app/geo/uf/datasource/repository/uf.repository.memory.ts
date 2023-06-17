import { Injectable, Scope } from "@nestjs/common";
import UfDataSource from "../../domain/dataprovider/uf.dataprovider";
import { UfEntity } from "../../domain/entities/uf.entity";

@Injectable({ scope: Scope.REQUEST })
export class UfRepositoryMemory implements UfDataSource {

    listaMock: UfEntity[];

    constructor() {
        this.listaMock = new Array<UfEntity>();
        this.listaMock.push(
            { "id": 1, "uf": 'PR', "nome": "Paraná" },
            { "id": 2, "uf": 'SP', "nome": "Sâo Paulo" },
            { "id": 3, "uf": 'SC', "nome": "Santa Catarina" }
        );
    }

    findAll(): Promise<UfEntity[]> {
        return Promise.resolve(this.listaMock);
    }

    findOne(id: number): Promise<UfEntity> {
        let entity = this.listaMock.find((e) => e.id === id);
        if (!entity)
            return null;
        return Promise.resolve(entity);
    }

    findOneByUf(uf: string): Promise<UfEntity> {
        let entity = this.listaMock.find((e) => e.uf === uf);
        if (!entity)
            return null;
        return Promise.resolve(entity);

    }

}