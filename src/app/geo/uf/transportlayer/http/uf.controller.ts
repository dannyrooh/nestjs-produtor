import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import UfUseCase from '../../domain/usecase/uf.usecase';
import UfDTOConverter from '../converter/uf.dto.converter';

@Controller('api/v1/geo')
@ApiTags('Dados Geográficos')
export class UfController {

    constructor(
        private readonly ufUseCase: UfUseCase,
        private readonly ufConverter: UfDTOConverter
    ) { }

    @Get('uf')
    @ApiResponse({ status: 200, description: 'Lista de estados' })
    @ApiResponse({ status: 404, description: 'Não há estados cadastrados' })
    async getAll() {
        try {
            const objs = await this.ufUseCase.findAll();
            return this.ufConverter.lista(objs);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }

    @Get('uf/:id')
    @ApiResponse({ status: 200, description: 'Uf encontrada' })
    @ApiResponse({ status: 404, description: 'Uf por Id não encontrada' })
    async getById(@Param('id', ParseIntPipe) id: number) {

        try {
            const entity = await this.ufUseCase.findOne(id);
            return this.ufConverter.entity(entity)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }

    @Get('uf/uf/:uf')
    @ApiResponse({ status: 200, description: 'Uf encontrada' })
    @ApiResponse({ status: 404, description: 'Uf por UF não encontrada' })
    async getByUf(@Param('uf') uf: string) {

        try {
            const entity = await this.ufUseCase.findOneByUf(uf.toUpperCase());
            return this.ufConverter.entity(entity)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }



}
