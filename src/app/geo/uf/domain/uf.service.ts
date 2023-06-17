import { Injectable, Scope } from '@nestjs/common';
import { UfEntity } from './entities/uf.entity';
import UfUseCase from './usecase/uf.usecase';
import UfNotFoundError from './exception/ufnotfound.error';
import UfEmptyError from './exception/ufempty.error';
import UfDataProvider from './dataprovider/uf.dataprovider';


@Injectable({ scope: Scope.REQUEST })
export class UfService implements UfUseCase {

    constructor(
        private readonly ufDataProvider: UfDataProvider
    ) { }

    async findAll(): Promise<Array<UfEntity>> {

        const lista = await this.ufDataProvider.findAll();

        if (!lista) throw new UfEmptyError();

        return lista;

    }

    async findOne(id: number): Promise<UfEntity> {

        const entity = await this.ufDataProvider.findOne(id);

        if (!entity) throw new UfNotFoundError(id.toString());

        return entity;
    }

    async findOneByUf(uf: string): Promise<UfEntity> {

        const entity = await this.ufDataProvider.findOneByUf(uf);

        if (!entity) throw new UfNotFoundError(uf);

        return entity;

    }
}