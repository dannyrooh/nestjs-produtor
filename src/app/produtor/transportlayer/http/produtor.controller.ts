import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import ProdutorResponseConverter from '../converter/produtor.dto.converter';
import ProdutorUseCase from '../../domain/usecase/produtor.usercase';
import { ProdutorDTO } from '../dto/produtor.dto';

@Controller('api/v1/produtor')
@ApiTags('Produtor')
export class ProdutorController {

    constructor(
        private readonly produtorUseCase: ProdutorUseCase,
        private readonly produtorConverter: ProdutorResponseConverter
    ) { }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Produtor encontrado' })
    @ApiResponse({ status: 404, description: 'Produtor não encontrado' })
    async getById(@Param('id') id: number) {

        try {
            const entity = await this.produtorUseCase.get(id);
            return this.produtorConverter.toDTO(entity)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }

    @Get('doc/:cnpjcpf')
    @ApiResponse({ status: 200, description: 'Produtor encontrado' })
    @ApiResponse({ status: 404, description: 'Produtor não encontrado' })
    async getByDoc(@Param('cnpjcpf') cnpjcpf: string) {

        try {
            const entity = await this.produtorUseCase.getByCnpjCpf(cnpjcpf);
            return this.produtorConverter.toDTO(entity)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }


    @Post()
    @ApiResponse({ status: 201, description: 'Produtor criado' })
    @ApiResponse({ status: 404, description: 'Erro ao cadastrar o produtor' })
    async post(@Body() produtoDTO: ProdutorDTO) {

        let entity = this.produtorConverter.toEntity(produtoDTO);

        try {
            return await this.produtorUseCase.append(entity);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }


    @Put()
    @ApiResponse({ status: 201, description: 'Produtor alterado' })
    @ApiResponse({ status: 404, description: 'Erro ao alterar o produtor' })
    async udpdate(@Body() produtoDTO: ProdutorDTO) {

        let entity = this.produtorConverter.toEntity(produtoDTO);

        try {
            return await this.produtorUseCase.updated(entity);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }


    @Delete(':id')
    @ApiResponse({ status: 201, description: 'Produtor excluído' })
    @ApiResponse({ status: 404, description: 'Produtor não encontrado' })
    async delete(@Param('id') id: number) {

        try {
            return await this.produtorUseCase.delete(id);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }



}
