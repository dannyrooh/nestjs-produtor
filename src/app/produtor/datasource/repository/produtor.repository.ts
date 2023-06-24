import { Injectable, Scope } from '@nestjs/common';
import ProdutorDataProvider from '../../domain/dataprovider/produtor.dataprovider';
import { ProdutorEntity } from '../../domain/entities/produtor.entity';
import { ProdutorModel } from '../model/produtor.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ProdutoModelConverter from '../converter/produtor.model.converter';

@Injectable({ scope: Scope.REQUEST })
export class ProdutorRepository implements ProdutorDataProvider {
  constructor(
    @InjectRepository(ProdutorModel)
    private readonly produtorRepository: Repository<ProdutorModel>,
    private readonly produtorModelConverter: ProdutoModelConverter,
  ) {}

  async get(id: number): Promise<ProdutorEntity> {
    return this.produtorModelConverter.toEntity(
      await this.produtorRepository.findOne({
        where: { id },
        relations: {
          culturas: true,
        },
      }),
    );
  }

  async append(produtorEntity: ProdutorEntity): Promise<number> {
    const model = this.produtorModelConverter.toModel(produtorEntity);
    const obj = await this.produtorRepository.save(model);
    return obj.id;
  }

  async updated(produtorEntity: ProdutorEntity): Promise<boolean> {
    const obj = await this.produtorRepository.save(
      this.produtorModelConverter.toModel(produtorEntity),
    );
    return Promise.resolve(obj.id > 0);
  }

  async delete(id: number): Promise<boolean> {
    const obj = await this.produtorRepository.delete({ id });

    return Promise.resolve((obj.affected ?? 0) > 0);
  }

  async getByCnpjCpf(cnpjcpf: string): Promise<ProdutorEntity> {
    return this.produtorModelConverter.toEntity(
      await this.produtorRepository.findOne({ where: { cnpjcpf } }),
    );
  }
}
