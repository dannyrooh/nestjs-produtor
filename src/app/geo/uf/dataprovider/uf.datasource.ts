import { UfEntity } from "../domain/entities/uf.entity";

export default abstract class UfDataSource {

    abstract findAll(): Promise<Array<UfEntity>>;
    abstract findOne(id: number): Promise<UfEntity>;
    abstract findOneByUf(uf: string): Promise<UfEntity>;

}