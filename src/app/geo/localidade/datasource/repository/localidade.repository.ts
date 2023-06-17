import { Injectable, Scope } from "@nestjs/common";
import { LocalidadeEntity } from "../../domain/entities/localidade.entity";
import { LocalidadeModel } from "../model/localidade.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import LocalidadeModelConverter from "../converter/localidade..model.converter";
import LocalidadeDataProvider from "../../domain/dataprovider/localidade.dataprovider";

@Injectable({ scope: Scope.REQUEST })
export class LocalidadeRepository implements LocalidadeDataProvider {

    constructor(
        @InjectRepository(LocalidadeModel)
        private readonly localidadeRepository: Repository<LocalidadeModel>,
        private readonly localidadeModelConverter: LocalidadeModelConverter) { }

    async findAll(): Promise<LocalidadeEntity[]> {

        return this.localidadeModelConverter.toEntitylist(
            await this.localidadeRepository.find()
        );
    }

    async findAllUf(uf: string): Promise<LocalidadeEntity[]> {

        return this.localidadeModelConverter.toEntitylist(
            await this.localidadeRepository.find(
                {
                    relations: {
                        ufmodel: true
                    },
                    where: {
                        ufmodel: { uf }
                    }
                }))

    }

    async findOne(id: number): Promise<LocalidadeEntity> {
        return this.localidadeModelConverter.toEntity(
            await this.localidadeRepository.findOne({ where: { id } }));
    }


}