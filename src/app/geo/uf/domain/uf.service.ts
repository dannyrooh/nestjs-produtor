import { Injectable, Scope } from '@nestjs/common';
import { UfEntity } from './entities/uf.entity';
import UfUseCase from './uf.usecase';
import UfNotFoundError from './exception/ufnotfound.error';
import UfEmptyError from './exception/ufempty.error';
import UfDataSource from '../dataprovider/uf.datasource';
import UfModelConverter from '../dataprovider/converter/uf.model.converter';


@Injectable({ scope: Scope.REQUEST })
export class UfService implements UfUseCase {
    constructor(
        private readonly ufDataSource: UfDataSource

    ) { }

    async findAll(): Promise<Array<UfEntity>> {

        const lista = await this.ufDataSource.findAll();

        if (!lista) throw new UfEmptyError();

        return lista;

    }

    async findOne(id: number): Promise<UfEntity> {

        const entity = await this.ufDataSource.findOne(id);

        console.log(entity);

        if (!entity) throw new UfNotFoundError(id.toString());

        return entity;
    }

    async findOneByUf(uf: string): Promise<UfEntity> {

        const entity = await this.ufDataSource.findOneByUf(uf);

        if (!entity) throw new UfNotFoundError(uf);

        return entity;

    }
}