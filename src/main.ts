import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigSwagger } from './config/config-swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  ConfigSwagger.setup(app);

  await app.listen(3000);

}
bootstrap();
