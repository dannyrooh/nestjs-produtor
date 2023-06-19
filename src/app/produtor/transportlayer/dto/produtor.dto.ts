import { ApiProperty } from "@nestjs/swagger";
import { AreaDTO } from "./area.dto";
import { CulturaDTO } from "./cultura.dto";

export class ProdutorDTO {

    @ApiProperty({
        title: 'ID do produtor ',
        description: '´Não deve ser informado quando for um cadastro novo',
    })
    public id: number;
    @ApiProperty({
        title: 'CNPJ ou CPF ',
        description: 'Informe o CPF ou CNPJ',
    })
    public doc: string;
    @ApiProperty({
        title: 'Nome do produto '
    })
    public nome: string;

    @ApiProperty({
        title: 'Nome da fazenda '

    })
    public fazenda: string;
    @ApiProperty({
        title: 'Nome da cidade ',
        description: 'É obrigatório se não for informado o ID da cidade. Se a cidade não estiver cadastrada o sistema fará o cadastro automáticamente',
    }
    )
    public cidade?: string;
    @ApiProperty({
        title: 'Unidade Federativa do Brasil ',
        description: 'É obrigatório se não for informado o ID da cidade ',
    }
    )
    public uf?: string;
    @ApiProperty({
        title: 'Código da cidade',
        description: 'Quando for informado nãe é necessário informar nome da cidade ou uf ',
    }
    )
    public cidade_id?: number;
    @ApiProperty({
        title: 'Áreas da fazenda',
        description: 'Informe  a área agricultavel, área de vegetação e área total da fazenda ',
    }
    )
    public area: AreaDTO;
    @ApiProperty({
        title: 'Cultura de Plantio',
        description: 'Nome da culturas de plantio',
    }
    )
    public culturas: Array<CulturaDTO>;

    constructor(
        private readonly _id: number,
        private readonly _doc: string,
        private readonly _nome: string,
        private readonly _fazenda: string,

        private readonly _cidade?: string,
        private readonly _uf?: string,
        private readonly _cidade_id?: number,

        private readonly _area: AreaDTO = null,
        private readonly _culturas: Array<CulturaDTO> = []
    ) {
        this.id = _id;
        this.doc = _doc;
        this.nome = _nome;
        this.fazenda = _fazenda;
        this.cidade = _cidade;
        this.uf = _uf;
        this.area = _area;
        this.culturas = _culturas;

    }

}
