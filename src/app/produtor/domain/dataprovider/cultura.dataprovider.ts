import { CulturaEntity } from "../entities/cultura.entity";

export default abstract class CulturaDataProvider {

    abstract append(culturaEntity: CulturaEntity): Promise<Number>;
    abstract updated(culturaEntity: CulturaEntity): Promise<boolean>;
    abstract delete(id: number): Promise<boolean>;

    abstract get(id: number): Promise<CulturaEntity>;
    abstract getAll(): Promise<Array<CulturaEntity>>


}