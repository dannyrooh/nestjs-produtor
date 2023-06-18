import { Column, Entity, Index, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cultura' })

export class CulturaModel {

    @PrimaryGeneratedColumn({ name: "cul_id" })
    id: number;

    @Index({ unique: true })
    @Column({ name: "cul_nome", type: "varchar", length: 32, nullable: false })
    nome: string;

    @Column({ name: "cul_ativa", type: "boolean", default: true, nullable: false })
    ativa: boolean;

}