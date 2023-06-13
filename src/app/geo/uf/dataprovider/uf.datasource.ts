import { UfModel } from "./model/uf.model";

export default abstract class UfDataSource {

    abstract findAll(): Promise<Array<UfModel>>;
    abstract findOne(id: number): Promise<UfModel>;
    abstract findOneByUf(uf: string): Promise<UfModel>;

}