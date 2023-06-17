import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import ProdutorResponseConverter from '../converter/produtor.response.converter';
import ProdutorUseCase from '../../domain/usecase/produtor.usercase';

@Controller('api/v1/produtor')
@ApiTags('Produtor')
export class ProdutorController {

    constructor(
        private readonly produtorUseCase: ProdutorUseCase,
        private readonly ProdutorConverter: ProdutorResponseConverter
    ) { }


    @Get(':id')
    @ApiResponse({ status: 200, description: 'Produtor encontrado' })
    @ApiResponse({ status: 404, description: 'Produtor não encontrado' })
    async getById(@Param('id') id: number) {

        try {
            const entity = await this.produtorUseCase.get(id);
            return this.ProdutorConverter.entity(entity)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }




}
