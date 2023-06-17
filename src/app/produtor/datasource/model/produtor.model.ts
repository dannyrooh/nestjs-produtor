import { LocalidadeModel } from "src/app/geo/localidade/datasource/model/localidade.model";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({ name: 'produtor' })
export class ProdutorModel {
    @PrimaryColumn({ name: "pro_id" })
    id?: number;

    @Column({ name: "pro_nome", type: "varchar", length: 100, nullable: false })
    nome: string;

    @Column({ name: "pro_cnpj_cpf", type: "varchar", length: 15, nullable: false })
    cpfcnpj: string;

    @Column({ name: "pro_fazenda", type: "varchar", length: 100, nullable: false })
    fazenda: string;

    @Column({ name: "pro_area_agricultavel", type: 'decimal', precision: 15, scale: 6, default: 0 })
    area_agricultavel: number;

    @Column({ name: "pro_area_vegetacao", type: 'decimal', precision: 15, scale: 6, default: 0 })
    area_vegetacao: number;

    @Column({ name: "pro_area_total", type: 'decimal', precision: 15, scale: 6, default: 0 })
    area_total: number;

    @Column({ name: "pro_localidade", nullable: false })
    localidade: number;

    @ManyToOne(type => LocalidadeModel, { eager: true })
    @JoinColumn({ name: "pro_localidade", referencedColumnName: "id" })
    localidadeModel: LocalidadeModel

}
