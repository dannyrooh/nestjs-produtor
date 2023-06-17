import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'uf' })
export class UfModel {
    @PrimaryColumn({ name: "uf_id" })
    id: number;

    @Column({ name: "uf_uf", type: "varchar", length: 2 })
    uf: string;

    @Column({ name: "uf_nome", type: "varchar", length: 32 })
    nome: string;

}
