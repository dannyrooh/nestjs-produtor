import { Injectable, Scope } from "@nestjs/common";
import UfDataSource from "../uf.datasource";
import { UfModel } from "../model/uf.model";
import { Repository } from "typeorm/repository/Repository";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable({ scope: Scope.REQUEST })
export class UfRepository implements UfDataSource {

    constructor(
        @InjectRepository(UfModel)
        private readonly ufRepository: Repository<UfModel>) { }

    async findAll(): Promise<Array<UfModel>> {

        return await this.ufRepository.find();
    }

    async findOne(id: number): Promise<UfModel> {

        return await this.ufRepository.findOne({ where: { id } });

    }

    async findOneByUf(uf: string): Promise<UfModel> {

        return await this.ufRepository.findOneBy({ uf });

    }
}