import { Injectable, Scope } from "@nestjs/common";
import CulturaDataProvider from "../../domain/dataprovider/Cultura.dataprovider";
import { CulturaEntity } from "../../domain/entities/Cultura.entity";
import { CulturaModel } from "../model/Cultura.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import CulturaModelConverter from "../converter/cultura.model.converter";
import { DeleteResult } from "typeorm/driver/mongodb/typings";

@Injectable({ scope: Scope.REQUEST })
export class CulturaRepository implements CulturaDataProvider {

    constructor(
        @InjectRepository(CulturaModel)
        private readonly culturaRepository: Repository<CulturaModel>,
        private readonly culturaModelConverter: CulturaModelConverter) { }

    async get(id: number): Promise<CulturaEntity> {
        return this.culturaModelConverter.toEntity(
            await this.culturaRepository.findOne({ where: { id } }));
    }

    async getAll(): Promise<Array<CulturaEntity>> {
        return this.culturaModelConverter.toEntitylist(
            await this.culturaRepository.find());
    }

    async append(culturaEntity: CulturaEntity): Promise<Number> {

        let obj = await this.culturaRepository.save(this.culturaModelConverter.toModel(culturaEntity));
        return obj.id;
    }

    async updated(culturaEntity: CulturaEntity): Promise<boolean> {

        let obj = await this.culturaRepository.save(this.culturaModelConverter.toModel(culturaEntity));
        return Promise.resolve(obj.id > 0);
    }

    async delete(id: number): Promise<boolean> {

        let obj = await this.culturaRepository.delete({ id });

        return Promise.resolve((obj.affected ?? 0) > 0);
    }


}
