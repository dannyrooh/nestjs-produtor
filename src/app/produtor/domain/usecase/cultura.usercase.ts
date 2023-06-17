import { CulturaEntity } from "../entities/cultura.entity";

export default abstract class CulturaUseCase {

    abstract append(produtoEntity: CulturaEntity): Promise<Number>;
    abstract updated(produtoEntity: CulturaEntity): Promise<boolean>;
    abstract delete(id: number): Promise<boolean>;

    abstract get(id: number): Promise<CulturaEntity>;
    abstract getAll(): Promise<Array<CulturaEntity>>;

}