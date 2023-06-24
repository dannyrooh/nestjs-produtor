import { ProdutorEntity } from '../entities/produtor.entity';

export default abstract class ProdutorDataProvider {
  abstract append(produtoEntity: ProdutorEntity): Promise<number>;
  abstract updated(produtoEntity: ProdutorEntity): Promise<boolean>;
  abstract delete(id: number): Promise<boolean>;

  abstract get(id: number): Promise<ProdutorEntity>;
  abstract getByCnpjCpf(cnpjcpf: string): Promise<ProdutorEntity>;
}
