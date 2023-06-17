import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import CulturaResponseConverter from '../converter/cultura.dto.converter';
import CulturaUseCase from '../../domain/usecase/Cultura.usercase';
import { CulturaRequest } from '../dto/cultura.request';

@Controller('api/v1/cultura')
@ApiTags('Cultura')
export class CulturaController {

    constructor(
        private readonly culturaUseCase: CulturaUseCase,
        private readonly culturaConverter: CulturaResponseConverter
    ) { }


    @Get('')
    @ApiResponse({ status: 200, description: 'Cultura encontrado' })
    @ApiResponse({ status: 404, description: 'Cultura não encontrado' })
    async getall() {
        try {
            return this.culturaConverter.resonse_list(
                await this.culturaUseCase.getAll())
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Cultura encontrado' })
    @ApiResponse({ status: 404, description: 'Cultura não encontrado' })
    async get(@Param('id') id: number) {

        try {
            return this.culturaConverter.response(
                await this.culturaUseCase.get(id)
            )
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }


    @Post()
    @ApiResponse({ status: 201, description: 'Cultura criada' })
    @ApiResponse({ status: 404, description: 'Erro ao criar a cultura' })
    async post(@Body() culturaRequest: CulturaRequest) {

        let entity = this.culturaConverter.entity(culturaRequest);

        try {
            return await this.culturaUseCase.append(entity);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }

    @Put()
    @ApiResponse({ status: 201, description: 'Cultura alterada' })
    @ApiResponse({ status: 404, description: 'Erro ao alterar a cultura' })
    async udpate(@Body() culturaRequest: CulturaRequest) {

        let entity = this.culturaConverter.entity(culturaRequest);

        try {
            return await this.culturaUseCase.updated(entity);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }


    @Delete(':id')
    @ApiResponse({ status: 201, description: 'Cultura excluída' })
    @ApiResponse({ status: 404, description: 'Cultura não encontrado' })
    async delete(@Param('id') id: number) {

        try {
            return await this.culturaUseCase.delete(id);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }



}
