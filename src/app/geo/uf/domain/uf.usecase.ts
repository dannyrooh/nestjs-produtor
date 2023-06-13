import { UfEntity } from "./entities/uf.entity";

export default abstract class UfUseCase {

    abstract findAll(): Promise<Array<UfEntity>>;
    abstract findOne(id: number): Promise<UfEntity>;
    abstract findOneByUf(uf: string): Promise<UfEntity>;

}