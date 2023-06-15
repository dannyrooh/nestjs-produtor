import { Injectable, Scope } from "@nestjs/common";
import ProdutorUseCase from "../usecase/produtor.usercase";
import { ProdutorEntity } from "../entities/produtor.entity";
import CnpjCpfValidator from "../validators/cnpjcpf.validator";
import AreaValidator from "../validators/area.validator";
import ProdutorIdError from "../exception/ProdutorId.error";
import ProdutorDataProvider from "../dataprovider/produtor.dataprovider";
import ProdutorNotFoundError from "../exception/produtornotfoudn.error";
import ProdutorNomeInvalido from "../exception/produtornomeinvalido.error";

@Injectable({ scope: Scope.REQUEST })
export default class ProdutorServico implements ProdutorUseCase {

    constructor(
        private readonly produtorDataProvider: ProdutorDataProvider
    ) { }

    private validarInput(produtorEntity: ProdutorEntity) {
        CnpjCpfValidator.execute(produtorEntity.doc);
        AreaValidator.execute(produtorEntity.area);

        if (produtorEntity.nome.trim().length <= 3) throw new ProdutorNomeInvalido();
    }

    private validarId(value: number) {

        if ((!value) || (value == undefined) || (value <= 0))
            throw new ProdutorIdError();
    }

    public async append(produtoEntity: ProdutorEntity): Promise<Number> {

        this.validarInput(produtoEntity);

        const id = await this.produtorDataProvider.append(produtoEntity);

        return id;
    }

    public async updated(produtoEntity: ProdutorEntity): Promise<boolean> {

        this.validarInput(produtoEntity);

        const res = await this.produtorDataProvider.updated(produtoEntity);

        return res;
    }

    public async delete(id: number): Promise<boolean> {

        this.validarId(id);

        const res = await this.produtorDataProvider.delete(id);

        return res;
    }

    public async get(id: number): Promise<ProdutorEntity> {

        this.validarId(id);

        const produtorEntity = await this.produtorDataProvider.get(id);

        if (!produtorEntity) throw new ProdutorNotFoundError(id.toString());

        return produtorEntity;
    }

    public async getByCnpjCpf(cnpjcpf: string): Promise<ProdutorEntity> {

        cnpjcpf = CnpjCpfValidator.unformat(cnpjcpf);

        CnpjCpfValidator.execute(cnpjcpf);

        const produtorEntity = await this.produtorDataProvider.getByCnpjCpf(cnpjcpf);

        if (!produtorEntity) throw new ProdutorNotFoundError(cnpjcpf);

        return produtorEntity;
    }



}