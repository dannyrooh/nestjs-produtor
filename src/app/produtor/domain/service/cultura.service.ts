import { Injectable, Scope } from "@nestjs/common";
import CulturaUseCase from "../usecase/Cultura.usercase";
import CulturaDataProvider from "../dataprovider/Cultura.dataprovider";
import { CulturaEntity } from "../entities/cultura.entity";
import CulturaEmptyError from "../exception/cultura.empty.error";
import CulturaNotFoundError from "../exception/cultura.notfound.error";
import CulturaIdError from "../exception/cultura.idinvalido.error";

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

        if (produtoEntity.id > 0) {
            produtoEntity.id = 0;
        }

        return await this.culturaDataProvider.append(produtoEntity);
    }


    async updated(produtoEntity: CulturaEntity): Promise<boolean> {

        if (!produtoEntity.id) throw new CulturaIdError();

        if (!await this.culturaDataProvider.get(produtoEntity.id)) {
            throw new CulturaNotFoundError(produtoEntity.id.toString());
        }

        return await this.culturaDataProvider.updated(produtoEntity);

    }

    async delete(id: number): Promise<boolean> {

        if (!id) throw new CulturaIdError();

        return await this.culturaDataProvider.delete(id);
    }


}


