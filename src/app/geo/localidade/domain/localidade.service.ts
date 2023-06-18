import { Injectable, Scope } from "@nestjs/common";
import LocalidadeDataProvider from "./dataprovider/localidade.dataprovider";
import { LocalidadeEntity } from "./entities/localidade.entity";
import LocalidadefEmptyError from "./exception/localidade.empty.error";
import LocalidadeNotFoundError from "./exception/localidade.notfound.error";
import LocalidadeUseCase from "./usecase/localidade.usecase";
import LocalidadeIdAssignedError from "./exception/localidade.Idassigned.error";
import LocalidadeUfNotAssignedError from "./exception/localidade.ufnotassigned.error";
import UfDataProvider from "../../uf/domain/dataprovider/uf.dataprovider";
import LocalidadeUfNotFoundError from "./exception/localidade.ufnotfoucn.error";
import LocalidadeAlreadyRegisterError from "./exception/localidade.alreadyregister.error";
import LocalidadeIdError from "./exception/localidade.id.error";

@Injectable({ scope: Scope.REQUEST })
export default class LocalidadeService implements LocalidadeUseCase {

    constructor(
        private readonly localidadeDataProvider: LocalidadeDataProvider,
        private readonly ufDataProvider: UfDataProvider
    ) { }


    async append(entityLocalidade: LocalidadeEntity): Promise<LocalidadeEntity> {

        if (entityLocalidade.id) throw new LocalidadeIdAssignedError();

        if ((!entityLocalidade.uf) && (!entityLocalidade.ufid)) throw new LocalidadeUfNotAssignedError();

        if (!entityLocalidade.ufid) {
            let uf = await this.ufDataProvider.findOneByUf(entityLocalidade.uf);
            if (!uf) throw new LocalidadeUfNotFoundError(entityLocalidade.uf);
            entityLocalidade.ufid = uf.id;
        }

        let localidade = await this.localidadeDataProvider.findByLocalidade(entityLocalidade.nome, entityLocalidade.uf);

        if (localidade) throw new LocalidadeAlreadyRegisterError(entityLocalidade.uf + '/' + entityLocalidade.nome)

        await this.localidadeDataProvider.append(entityLocalidade);

        return await this.localidadeDataProvider.findByLocalidade(entityLocalidade.nome, entityLocalidade.uf)
    }

    async update(entityLocalidade: LocalidadeEntity): Promise<LocalidadeEntity> {

        if (!entityLocalidade.id) throw new LocalidadeIdError();

        if ((!entityLocalidade.uf) && (!entityLocalidade.ufid)) throw new LocalidadeUfNotAssignedError();

        if (!entityLocalidade.ufid) {
            let uf = await this.ufDataProvider.findOneByUf(entityLocalidade.uf);
            if (!uf) throw new LocalidadeUfNotFoundError(entityLocalidade.uf);
            entityLocalidade.ufid = uf.id;
        }

        let localidade = await this.localidadeDataProvider.findByLocalidade(entityLocalidade.nome, entityLocalidade.uf);

        if ((localidade) && (localidade.id !== entityLocalidade.id))
            throw new LocalidadeAlreadyRegisterError(entityLocalidade.uf + '/' + entityLocalidade.nome)

        const entity = this.localidadeDataProvider.update(entityLocalidade);

        return entity;
    }

    async del(id: number): Promise<boolean> {

        if (!id) throw new LocalidadeIdError();

        return await this.localidadeDataProvider.del(id);

    }

    async findByLocalidade(nome: string, uf: string): Promise<LocalidadeEntity> {

        const entity = await this.localidadeDataProvider.findByLocalidade(nome, uf);

        if (!entity) throw new LocalidadeNotFoundError(nome + '/' + uf);

        return entity;
    }

    async findAll(): Promise<LocalidadeEntity[]> {

        const lista = await this.localidadeDataProvider.findAll();

        if (!lista) throw new LocalidadefEmptyError();

        return lista;
    }

    async findAllUf(uf: string): Promise<LocalidadeEntity[]> {

        const lista = await this.localidadeDataProvider.findAllUf(uf);

        if (!lista) throw new LocalidadefEmptyError();

        return lista;
    }

    async findOne(id: number): Promise<LocalidadeEntity> {

        const entity = await this.localidadeDataProvider.findOne(id);

        if (!entity) throw new LocalidadeNotFoundError(id.toString());

        return entity;
    }
}
