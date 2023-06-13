import { INestApplication, Module } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


export class ConfigSwagger {

    constructor(app: INestApplication) {

        const config = new DocumentBuilder()
            .setTitle('Cadastro de Produtor Rural')
            .setDescription('Documentação dos endPoint da API')
            .setVersion('1.0')
            .build();

        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api', app, document);

    }

    static setup(app: INestApplication): void {
        new ConfigSwagger(app);
    }
}
