import { Injectable, Scope } from "@nestjs/common";
import LocalidadeDataProvider from "./dataprovider/localidade.dataprovider";
import { LocalidadeEntity } from "./entities/localidade.entity";
import LocalidadefEmptyError from "./exception/localidade.empty.error";
import LocalidadeNotFoundError from "./exception/localidade.notfound.error";
import LocalidadeUseCase from "./usecase/localidade.usecase";

@Injectable({ scope: Scope.REQUEST })
export default class LocalidadeService implements LocalidadeUseCase {

    constructor(
        private readonly localidadeDataProvider: LocalidadeDataProvider
    ) { }


    async findAll(): Promise<LocalidadeEntity[]> {

        console.log('LocalidadeService.findAll()')
        const lista = await this.localidadeDataProvider.findAll();

        if (!lista) throw new LocalidadefEmptyError();

        return lista;

    }
    async findAllUf(uf: string): Promise<LocalidadeEntity[]> {

        const lista = await this.localidadeDataProvider.findAllUf(uf);

        if (!lista) throw new LocalidadefEmptyError();

        return lista;

    }


    async findOne(id: number): Promise<LocalidadeEntity> {

        const entity = await this.localidadeDataProvider.findOne(id);

        if (!entity) throw new LocalidadeNotFoundError(id.toString());

        return entity;
    }
}
