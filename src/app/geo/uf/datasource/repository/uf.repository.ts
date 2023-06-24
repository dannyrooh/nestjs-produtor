import { Injectable, Scope } from '@nestjs/common';
import UfDataSource from '../../domain/dataprovider/uf.dataprovider';
import { UfModel } from '../model/uf.model';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UfEntity } from '../../domain/entities/uf.entity';
import UfModelConverter from '../converter/uf.model.converter';

@Injectable({ scope: Scope.REQUEST })
export class UfRepository implements UfDataSource {
  constructor(
    @InjectRepository(UfModel)
    private readonly ufRepository: Repository<UfModel>,
    private readonly ufModelConverter: UfModelConverter,
  ) {}

  async findAll(): Promise<Array<UfEntity>> {
    return this.ufModelConverter.toEntitylist(await this.ufRepository.find());
  }

  async findOne(id: number): Promise<UfEntity> {
    return this.ufModelConverter.toEntity(
      await this.ufRepository.findOne({ where: { id } }),
    );
  }

  async findOneByUf(uf: string): Promise<UfEntity> {
    return this.ufModelConverter.toEntity(
      await this.ufRepository.findOneBy({ uf }),
    );
  }
}
