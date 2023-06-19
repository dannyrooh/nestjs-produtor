import { ApiProperty } from "@nestjs/swagger";

export default class LocalidadeDTO {

    @ApiProperty({
        title: 'ID da localidade ',
        description: '´Não deve ser informado quando for um cadastro novo',
    })
    public id: number;

    @ApiProperty({
        title: 'Nome da localidade, cidade ou município '
    })
    public nome: string;

    @ApiProperty({
        title: 'Sigla do Estado (UF) ',
        description: '´É obrigatório informar se não for informado o UFID',
    })
    public uf: string;

    @ApiProperty({
        title: 'ID do Estado (UF) ',
        description: '´Quando for informado não é necessário informar o UF',
    })
    public ufid?: number


    constructor(
        id: number,
        nome: string,
        uf: string,
        ufid?: number) 
    {
        this.id = id;
        this.nome = nome;
        this.uf = uf;
        this.ufid = ufid;
    }


}