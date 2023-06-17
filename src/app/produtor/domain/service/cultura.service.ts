import { Injectable, Scope } from "@nestjs/common";
import CulturaUseCase from "../usecase/Cultura.usercase";
import CulturaDataProvider from "../dataprovider/Cultura.dataprovider";
import { CulturaEntity } from "../entities/cultura.entity";
import CulturaEmptyError from "../exception/cultura.empty.error";
import CulturaNotFoundError from "../exception/cultura.notfound.error";

@Injectable({ scope: Scope.REQUEST })
export default class CulturaService implements CulturaUseCase {

    constructor(
        private readonly culturaDataProvider: CulturaDataProvider
    ) { }

    async get(id: number): Promise<CulturaEntity> {
        const culturaEntity = await this.culturaDataProvider.get(id);

        if (!culturaEntity) throw new CulturaNotFoundError(id.toString());

        return culturaEntity;
    }

    async getAll(): Promise<CulturaEntity[]> {

        const lista = await this.culturaDataProvider.getAll();

        if (!lista) throw new CulturaEmptyError();

        return lista;
    }


    async append(produtoEntity: CulturaEntity): Promise<Number> {

        return await this.culturaDataProvider.append(produtoEntity);

    }

    async updated(produtoEntity: CulturaEntity): Promise<boolean> {

        return await this.culturaDataProvider.updated(produtoEntity);

    }

    async delete(id: number): Promise<boolean> {
        return await this.culturaDataProvider.delete(id);
    }


}


