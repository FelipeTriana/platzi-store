import { Controller, Get, Param, Query } from '@nestjs/common';   //Aqui se importan los decoradores
import { AppService } from './app.service';

/**
 * Los controladores son los encargados esensialmente de recibir los request de nuestra app 
 * entre otras cosas: validar, ver que los tipos sean correctos, que los permisos
 * del usuario sean correctos. Con todo eso en orden se conecta a la capa de servicios
 * para obtener los datos.
 */

 @Controller()
 export class AppController {
   constructor(private readonly appService: AppService) {}
 
   @Get()
  getHello(): string {
    return this.appService.getHello();
  }
 
   @Get('nuevo')
   newEndpoint() {
     return 'Endpoint test';
   }
 
   @Get('/ruta/') // 👈 Nest reconoce la ruta con o sin slashes(Ignora completamente los slashes)
   hello() {
     return 'con /sas/';
   }


   /**
    * Se pueden crear controladores por medio del cli de nestjs con: nest g co controllers/categories --flat
    */







 }
