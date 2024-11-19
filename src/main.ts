import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
         whitelist:true,
         forbidNonWhitelisted: true,
    })
)
const document = SwaggerModule.createDocument (app, config);
SwaggerModule.setup('/doc',app,document);
const config = new DocumentBuilder()
.setTitle('backendCareCortada')
.setDescription('Este es el backend para la pagina web de la CareCortada')
.setVersion('1.0.0')
.addTag('CareCortada')
.build()
  await app.listen(3000);

}
bootstrap();
