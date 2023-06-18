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

    async append(entityLocalidade: LocalidadeEntity): Promise<LocalidadeEntity> {

        let obj = await this.localidadeRepository.save(this.localidadeModelConverter.toModel(entityLocalidade));

        return this.findOne(obj.id);

    }

    async update(entityLocalidade: LocalidadeEntity): Promise<LocalidadeEntity> {

        let obj = await this.localidadeRepository.save(this.localidadeModelConverter.toModel(entityLocalidade));
        return this.localidadeModelConverter.toEntity(obj);
    }

    async del(id: number): Promise<boolean> {

        let obj = await this.localidadeRepository.delete({ id });

        return Promise.resolve((obj.affected ?? 0) > 0);

    }


    async findByLocalidade(nome: string, uf: string): Promise<LocalidadeEntity> {

        const obj = await
            this.localidadeRepository
                .createQueryBuilder("localidade")
                .innerJoinAndSelect("localidade.ufmodel",
                    "uf",
                    "uf.uf = :uf",
                    { uf: uf.toUpperCase() })
                .where("UPPER(localidade.nome) = :name", { name: nome.toUpperCase() })
                .getOne();

        return this.localidadeModelConverter.toEntity(obj);

    }

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