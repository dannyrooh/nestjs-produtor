import { ProdutorEntity } from "../entities/produtor.entity";

export default abstract class ProdutorUseCase {

    abstract append(produtoEntity: ProdutorEntity): Promise<Number>;
    abstract updated(produtoEntity: ProdutorEntity): Promise<boolean>;
    abstract delete(id: number): Promise<boolean>;

    abstract get(id: number): Promise<ProdutorEntity>;
    abstract getByCnpjCpf(cnpjcpf: string): Promise<ProdutorEntity>;

}