import { ApiProperty } from "@nestjs/swagger"

export class AreaDTO {

    @ApiProperty({
        title: 'Área agricultável em hectares '
    })
    public agricultavel: number;

    @ApiProperty({
        title: 'Área de vegetação em hectares ',
        description: '´É obrigatório informar se não for informado o UFID',
    })
    public vegetacao: number;

    @ApiProperty({
        title: 'Total da área da fazenda em hectares ',
        description: 'Á área total de ser menor ou igual a soma da área agricultável e área de vegetação'
    })
    public total: number;

    constructor(
        private readonly _total: number = 0,
        private readonly _agricultavel: number = 0,
        private readonly _vegetacao: number = 0
    ) {
        this.total = _total;
        this.agricultavel = _agricultavel;
        this.vegetacao = _vegetacao;
    }
}