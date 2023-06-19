import { Controller, Get, HttpException, HttpStatus } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import AreaFazendaUseCase from "src/app/report/domain/usecase/area.fazenda.usecase";
import AreaPorCulturaUseCase from "src/app/report/domain/usecase/area.por.cultura.usecase";
import AreaPorEstadoUseCase from "src/app/report/domain/usecase/area.por.estado.usecase";
import AreaPorUsoSoloUseCase from "src/app/report/domain/usecase/area.uso.solo.usecase";
import QuantidadeFazendaUseCase from "src/app/report/domain/usecase/quantidade.fazenda.usecase";

@Controller('api/v1/report')
@ApiTags('Report')
export class ReportController {

    constructor(
        private readonly areaFazendaUseCase: AreaFazendaUseCase,
        private readonly areaPorCulturaUseCase: AreaPorCulturaUseCase,
        private readonly areaPorEstadoUseCase: AreaPorEstadoUseCase,
        private readonly areaPorUsoSoloUseCase: AreaPorUsoSoloUseCase,
        private readonly quantidadeFazendaUseCase: QuantidadeFazendaUseCase
    ) { }


    @Get('area/cultura')
    @ApiResponse({ status: 200, description: 'Area por cultura' })
    async getAreaPorCultura() {

        try {
            return this.areaPorCulturaUseCase.execute()

        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }

    }

    @Get('area/uf')
    @ApiResponse({ status: 200, description: 'Area por estado' })
    async getAreaPorEstado() {

        try {
            return this.areaPorEstadoUseCase.execute()
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }


    }

    @Get('area/fazenda')
    @ApiResponse({ status: 200, description: 'Area total das fazendas' })
    async getAreaTotalFazendas() {

        try {
            return await this.areaFazendaUseCase.execute();
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }

    }

    @Get('area/solo')
    @ApiResponse({ status: 200, description: 'Area do uso do solo' })
    async getAreaUsoSolo() {
        try {
            return this.areaPorUsoSoloUseCase.execute();
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }

    @Get('quantidade/fazenda')
    @ApiResponse({ status: 200, description: 'Quantidade de fazendas cadastradas' })
    async getQuantidaeFazendas() {
        try {
            return this.quantidadeFazendaUseCase.execute();
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }

    }

}

