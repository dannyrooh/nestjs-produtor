import { Injectable, Scope } from "@nestjs/common";
import ProdutorUseCase from "../usecase/produtor.usercase";
import { ProdutorEntity } from "../entities/produtor.entity";
import CnpjCpfValidator from "../validators/cnpjcpf.validator";
import AreaValidator from "../validators/area.validator";
import ProdutorIdError from "../exception/ProdutorId.error";
import ProdutorDataProvider from "../dataprovider/produtor.dataprovider";
import ProdutorNotFoundError from "../exception/produtornotfoudn.error";
import ProdutorNomeInvalido from "../exception/produtornomeinvalido.error";
import ProdutorLocalidadeError from "../exception/produtorlocalidade.error";
import ProdutorJaCadastradoError from "../exception/produtorjacadastrado.error";
import { LocalidadeEntity } from "../../../geo/localidade/domain/entities/localidade.entity";
import LocalidadeUseCase from "../../../geo/localidade/domain/usecase/localidade.usecase";

@Injectable({ scope: Scope.REQUEST })
export default class ProdutorServico implements ProdutorUseCase {

    constructor(
        private readonly produtorDataProvider: ProdutorDataProvider,
        private readonly localidadeUsercase: LocalidadeUseCase

    ) { }

    private async validarCnpjCpf(produtoEntity: ProdutorEntity) {

        let entity = await this.produtorDataProvider.getByCnpjCpf(produtoEntity.doc);

        if (entity) {
            if (!produtoEntity.id) throw new ProdutorJaCadastradoError(produtoEntity.doc, entity.id.toString());

            if ((produtoEntity.id) && (entity.id !== produtoEntity.id)) throw new ProdutorJaCadastradoError(produtoEntity.doc, entity.id.toString());
        }

    }

    private async validarInput(produtorEntity: ProdutorEntity) {
        await CnpjCpfValidator.execute(produtorEntity.doc);
        await AreaValidator.execute(produtorEntity.area);

        if (produtorEntity.nome.trim().length <= 3) throw new ProdutorNomeInvalido();

        if ((!produtorEntity.cidade_id) && (!produtorEntity.cidade)) throw new ProdutorLocalidadeError();

        await this.validarCnpjCpf(produtorEntity);
    }

    private validarId(value: number) {

        if ((!value) || (value <= 0))
            throw new ProdutorIdError();
    }

    private async localidade(produtorEntity: ProdutorEntity): Promise<LocalidadeEntity> {

        try {
            if (produtorEntity.cidade_id) {
                return await this.localidadeUsercase.findOne(produtorEntity.cidade_id);
            }

            let localidade: LocalidadeEntity;

            try {
                localidade = await this.localidadeUsercase.findByLocalidade(produtorEntity.cidade, produtorEntity.uf);
            } catch (error) {
                //
            }


            if (!localidade) {
                return await this.localidadeUsercase.append(new LocalidadeEntity(0, produtorEntity.cidade, produtorEntity.uf))
            }

            return localidade;

        } catch (error) {
            throw new ProdutorLocalidadeError();
        }


    }

    public async append(produtoEntity: ProdutorEntity): Promise<Number> {


        console.log(produtoEntity);

        await this.validarInput(produtoEntity);


        let localidade = await this.localidade(produtoEntity);

        produtoEntity.cidade_id = localidade.id;

        const id = await this.produtorDataProvider.append(produtoEntity);

        return id;
    }

    public async updated(produtoEntity: ProdutorEntity): Promise<boolean> {

        this.validarId(produtoEntity.id);

        await this.validarInput(produtoEntity);

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