import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(            //Antes de escuchar activamos los pipe de validaciones del DTO
   {
    //como backend developer escogemos una de estas dos opciones pero no las dos, por eso la segunda esta comentada

    whitelist: true,                  //Eliminar los parámetros enviados por el body(postman) que no estén definidos en los DTO(Normalmente sin hacer esta validacion estos parametros adidcionales pasan desapercibidos mientras los demas concuerden con los del DTO)
    //forbidNonWhitelisted: true,     //Notifica que se envia un parametro adicional que no existe en el DTO
   }
  ));        
  await app.listen(3000);
}
bootstrap();
