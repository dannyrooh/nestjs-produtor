import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import LocalidadeUseCase from '../../domain/usecase/localidade.usecase';
import LocalidadeResponseConverter from '../converter/localidade.dto.converter';
import LocalidadeDTO from '../dto/localidade.dto';

@Controller('api/v1/geo/localidade')
@ApiTags('Dados Geográficos')
export class LocalidadeController {

    constructor(
        private readonly localidadeUseCase: LocalidadeUseCase,
        private readonly localidadeConverter: LocalidadeResponseConverter
    ) { }

    @Get()
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

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Cidade encontrada' })
    @ApiResponse({ status: 404, description: 'Cidade por Id não encontrada' })
    async getById(@Param('id', ParseIntPipe) id: number) {

        try {
            const entity = await this.localidadeUseCase.findOne(id);
            return this.localidadeConverter.toDto(entity)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }

    @Get('uf/:uf')
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


    @Get(':uf/:nome')
    @ApiResponse({ status: 200, description: 'Cidade encontrada' })
    @ApiResponse({ status: 404, description: 'Cidade por uf/nome não encontrada' })
    async getByUfNome(@Param('uf') uf: string, @Param('nome') nome: string) {

        try {
            const entity = await this.localidadeUseCase.findByLocalidade(nome, uf)
            return this.localidadeConverter.toDto(entity)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }


    @Post()
    @ApiResponse({ status: 201, description: 'Cidade cadastrada' })
    @ApiResponse({ status: 404, description: 'Erro ao cadastrar a cidade' })
    async post(@Body() localidadeDTO: LocalidadeDTO) {

        const entity = this.localidadeConverter.toEntity(localidadeDTO);

        try {
            return await this.localidadeUseCase.append(entity);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }

    @Put()
    @ApiResponse({ status: 201, description: 'Cidada atualizada' })
    @ApiResponse({ status: 404, description: 'Erro ao alterar a cidade' })
    async update(@Body() localidadeDTO: LocalidadeDTO) {

        const entity = this.localidadeConverter.toEntity(localidadeDTO);

        try {
            return await this.localidadeUseCase.update(entity);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }


    @Delete(':id')
    @ApiResponse({ status: 201, description: 'Cidade excluída' })
    @ApiResponse({ status: 404, description: 'Cidade não encontrado' })
    async delete(@Param('id') id: number) {

        try {
            return await this.localidadeUseCase.del(id);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }

}
