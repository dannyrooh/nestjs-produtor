import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import LocalidadeUseCase from '../../domain/usecase/localidade.usecase';
import LocalidadeResponseConverter from '../converter/uf.response.converter';

@Controller('api/v1/geo')
@ApiTags('Dados Geográficos')
export class LocalidadeController {

    constructor(
        private readonly localidadeUseCase: LocalidadeUseCase,
        private readonly localidadeConverter: LocalidadeResponseConverter
    ) { }

    @Get('localidade')
    @ApiResponse({ status: 200, description: 'Lista de cidade' })
    @ApiResponse({ status: 404, description: 'Não há cidades cadastrados' })
    async getAll() {

        try {
            const objs = await this.localidadeUseCase.findAll();
            return this.localidadeConverter.lista(objs);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }

    }

    @Get('localidade/:id')
    @ApiResponse({ status: 200, description: 'Cidade encontrada' })
    @ApiResponse({ status: 404, description: 'Cidade por Id não encontrada' })
    async getById(@Param('id') id: number) {

        try {
            const entity = await this.localidadeUseCase.findOne(id);
            return this.localidadeConverter.entity(entity)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }

    @Get('localidade/uf/:uf')
    @ApiResponse({ status: 200, description: 'cidades por UF encontradas' })
    @ApiResponse({ status: 404, description: 'Nenhuma cidade encontrada para esta UF' })
    async getByUf(@Param('uf') uf: string) {

        try {
            const objs = await this.localidadeUseCase.findAllUf(uf.toUpperCase());
            return this.localidadeConverter.lista(objs);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }

}
