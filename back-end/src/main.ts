import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Você pode especificar uma lista de origens permitidas se preferir
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
    allowedHeaders: 'Content-Type, Accept', // Cabeçalhos permitidos
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
