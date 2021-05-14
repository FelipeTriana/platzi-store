import {
  Controller,
  Get,
  Post,
  Query,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  /**
   * Para obtener parámetros de la URL se puede usar el decorador @Params
   */

  /*Esta ruta tendria problemas con la ruta dinamica que se encuentra inmediatamente despues, si tenemos rutas parecidas las NO dinamicas deben ir ANTES que 
   las dinamicas. Si esta ruta estuviera debajo de products/:productId nunca podriamos acceder a ella*/
  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  /**
   * Parametros tipo Query
   * Se usan para no enviar grandes conjuntos de parametros en un endpoint.
   * La lista de query params empieza con un '?' y se concatenan entre si con un '&': api.example.com/products?region=USA&brand=adidas&sort=asc
   * Ejemplo: Puede servir para un filtro donde obtengamos todos los productos de una region, una marca y un orden especifico
   */
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
    //Acceder por ejemplo a: http://localhost:3000/products?limit=1000&offset=25&brand=ardidas     no importa el orden en que se envien los parametros
  }

  @Post() // 👈 New decorator
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
