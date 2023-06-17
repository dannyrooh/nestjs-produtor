import { LocalidadeEntity } from "../entities/localidade.entity";

export default abstract class LocalidadeDataProvider {

    abstract findAll(): Promise<Array<LocalidadeEntity>>;
    abstract findAllUf(uf: string): Promise<Array<LocalidadeEntity>>;
    abstract findOne(id: number): Promise<LocalidadeEntity>;



}