import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { CulturaModel } from "./cultura.model";

@Entity({ name: 'produtor_cultura' })
export class ProdutorCulturaModel {

    @PrimaryColumn({ name: "proc_produtor" })
    produtor: number;

    @PrimaryColumn({ name: "proc_cultura" })
    cultura: number;

    @ManyToOne(type => CulturaModel, { eager: true })
    @JoinColumn({ name: "proc_cultura", referencedColumnName: "id" })
    culturaModel: CulturaModel

}