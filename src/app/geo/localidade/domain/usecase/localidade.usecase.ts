import { promises } from "dns";
import { LocalidadeEntity } from "../entities/localidade.entity";

export default abstract class LocalidadeUseCase {

    abstract findAll(): Promise<Array<LocalidadeEntity>>;
    abstract findAllUf(uf: string): Promise<Array<LocalidadeEntity>>;
    abstract findOne(id: number): Promise<LocalidadeEntity>;

    abstract findByLocalidade(nome: string, uf: string): Promise<LocalidadeEntity>;


    abstract append(entityLocalidade: LocalidadeEntity): Promise<LocalidadeEntity>;
    abstract update(entityLocalidade: LocalidadeEntity): Promise<LocalidadeEntity>;
    abstract del(id: number): Promise<boolean>;



}