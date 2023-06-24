import { ApiProperty } from '@nestjs/swagger';

export class AreaDTO {
  @ApiProperty({
    title: 'Área agricultável em hectares ',
  })
  public agricultavel: number;

  @ApiProperty({
    title: 'Área de vegetação em hectares ',
    description: '´É obrigatório informar se não for informado o UF ID',
  })
  public vegetacao: number;

  @ApiProperty({
    title: 'Total da área da fazenda em hectares ',
    description:
      'Á área total de ser menor ou igual a soma da área agricultável e área de vegetação',
  })
  public total: number;

  constructor(total = 0, agricultavel = 0, vegetacao = 0) {
    this.total = total;
    this.agricultavel = agricultavel;
    this.vegetacao = vegetacao;
  }
}
