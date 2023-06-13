import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { UfEntity } from './entities/uf.entity';
import IUfUseCase from './uf.usecase';
import UfNotFoundError from './exception/ufnotfound.error';
import UfEmptyError from './exception/ufempty.error';
import UfDataSource from '../dataprovider/uf.datasource';
import UfModelConverter from './converter/uf.model.converter';


@Injectable({ scope: Scope.REQUEST })
export class UfService implements IUfUseCase {
    constructor(
        private readonly ufDataSource: UfDataSource,
        private readonly ufModelConverter: UfModelConverter
    ) { }

    async findAll(): Promise<Array<UfEntity>> {

        const lista = await this.ufDataSource.findAll();

        if (!lista) throw new UfEmptyError();

        return this.ufModelConverter.lista(lista);

    }

    async findOne(id: number): Promise<UfEntity> {

        const model = await this.ufDataSource.findOne(id);

        if (!model) throw new UfNotFoundError(id.toString());

        return this.ufModelConverter.model(model);
    }

    async findOneByUf(uf: string): Promise<UfEntity> {

        const model = await this.ufDataSource.findOneByUf(uf);

        if (!model) throw new UfNotFoundError(uf);

        return this.ufModelConverter.model(model);

    }
}