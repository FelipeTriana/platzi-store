/**
 * Instalar: npm i class-validator class-transformer @nestjs/mapped-types
 */
 
import {
    IsString,
    IsNumber,
    IsUrl,
    IsNotEmpty,
    IsPositive,
  } from 'class-validator';  //Para validar los tipos de los atributos del DTO

  import { PartialType } from '@nestjs/mapped-types';  //Nos ayuda a reutilizar codigo extendendiendo clases que ya tenemos
  
  export class CreateProductDto {
    @IsString()                   //Estos decoradores nos avisaran si enviamos en el body algun dato que no concuerde con el del atributo
    @IsNotEmpty()
    readonly name: string;
  
    @IsString()
    @IsNotEmpty()
    readonly description: string;
  
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly price: number;
  
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly stock: number;
  
    @IsUrl()
    @IsNotEmpty()
    readonly image: string;
  }
  
  /**
   * Aqui eliminamos la informacion de la clase DTO: UpdateProductDTO.
   * En su lugar usamos PartialType que nos permite reutilizar nuestro DTO base pero pone todos los atributos como OPCIONALES
   * Esto es lo mismo que tenemos en la rama dataTransfersObject pero reutilizando el codigo del DTO CreateProductDto
   */
  export class UpdateProductDto extends PartialType(CreateProductDto) {}