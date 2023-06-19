import { ApiProperty } from "@nestjs/swagger";

export default class UfDTO {

    @ApiProperty({
        title: 'ID do Estado ',
        description: 'Não deve ser informado quando for um cadastro novo',
    })
    id: number;
    @ApiProperty({
        title: 'Sigla do estado '
    })
    uf: string;
    @ApiProperty({
        title: 'Nome do estado '
    })
    nome: string;

    constructor(
        id: number,
        uf: string,
        nome: string
    ) {
        this.id = id;
        this.uf = uf;
        this.nome = nome

    }

}
