import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { CulturaModel } from './cultura.model';
import { ProdutorModel } from './produtor.model';

@Entity({ name: 'produtor_cultura' })
export class ProdutorCulturaModel {
  @PrimaryColumn({ name: 'proc_produtor' })
  produtor: number;

  @PrimaryColumn({ name: 'proc_cultura' })
  cultura: number;

  @ManyToOne(() => CulturaModel, (culturaModel) => culturaModel.produtores)
  @JoinColumn([{ name: 'proc_cultura', referencedColumnName: 'id' }])
  public culturas?: CulturaModel;

  @ManyToOne(() => ProdutorModel, (produtorModel) => produtorModel.culturas)
  @JoinColumn([{ name: 'proc_produtor', referencedColumnName: 'id' }])
  public produtores?: CulturaModel;
}
