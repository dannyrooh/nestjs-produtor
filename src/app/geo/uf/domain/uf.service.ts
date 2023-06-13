import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { UfEntity } from '../entities/uf.entity';
import IUfUseCase from './uf.usecase';
import UfNotFoundError from './exception/ufnotfound.error';
import UfEmptyError from './exception/ufempty.error';


@Injectable({ scope: Scope.REQUEST })
export class UfService implements IUfUseCase {
    constructor(
        @InjectRepository(UfEntity)
        private readonly ufRepository: Repository<UfEntity>) { }

    async findAll(): Promise<Array<UfEntity>> {

        const ufs = await this.ufRepository.find();

        if (!ufs) throw new UfEmptyError();

        return ufs;

    }

    async findOne(id: number): Promise<UfEntity> {

        const uf = await this.ufRepository.findOne({ where: { id } });

        if (!uf) throw new UfNotFoundError(id.toString());

        return uf;
    }

    async findOneByUf(uf: string): Promise<UfEntity> {

        return await this.ufRepository.findOneBy({ uf });

    }
}