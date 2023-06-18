import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST', 'localhost'),
                port: Number(configService.get('DB_PORT', 5432)),
                username: configService.get('DB_USERNAME', 'postgres'),
                password: configService.get('DB_PASSWORD', 'masterkey'),
                database: configService.get('DB_DATABASE', 'dbBrain'),
                entities: [__dirname + './../app/**/**/datasource/model/*.model{.js,.ts}'],
                synchronize: false,
                logging: true
            })
        })
    ]

})
export class ConfigDatabaseModule { }

