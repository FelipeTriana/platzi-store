/**
 * Los data transfer object sirven para validar grupos de datos de trasnferencia.
 * No es buen patron combinarlo con entities porque en ocasiones necesitamos atributos agregados en las transferencia de informacion
 * que no necesariamente estan insertados en la base de datos
 */

export class CreateProductDto {
    readonly name: string;          //readonly: solo sera tipo lectura. Quiere decir que el atributo no puede ser modificado
    readonly description: string;
    readonly price: number;
    readonly stock: number;
    readonly image: string;
  }
  
  export class UpdateProductDto {
    readonly name?: string;             //El ? quiere decir que el atributo es opcional
    readonly description?: string;
    readonly price?: number;
    readonly stock?: number;
    readonly image?: string;
  }