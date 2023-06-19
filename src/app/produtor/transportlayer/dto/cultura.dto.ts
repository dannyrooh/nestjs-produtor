import { ApiProperty } from "@nestjs/swagger"

export class CulturaDTO {

    @ApiProperty({
        title: 'ID da cultura ',
        description: 'Não deve ser informado quando for um cadastro novo',
    })
    public id?: number;
    @ApiProperty({
        title: 'Nome da cultura '
    })
    public nome: string;
    @ApiProperty({
        title: 'Ativa ',
        description: 'Indica se a cultura esta ativa',
    })
    public ativa?: boolean;

    constructor(
        id?: number,
        nome?: string,
        ativa?: boolean
    ) {
        this.id = id;
        this.nome = nome;
        this.ativa = ativa;

    }
}