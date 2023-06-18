import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { UfModel } from "../../../uf/datasource/model/uf.model";

@Entity({ name: 'localidade' })
export class LocalidadeModel {

    @PrimaryColumn({ name: "loc_id" })
    id: number;

    @Column({ name: "loc_nome", type: "varchar", length: 32 })
    nome: string;

    @Column({ name: "loc_uf" })
    uf: number;

    @ManyToOne(type => UfModel, { eager: true })
    @JoinColumn({ name: "loc_uf", referencedColumnName: "id" })
    ufmodel: UfModel;

}