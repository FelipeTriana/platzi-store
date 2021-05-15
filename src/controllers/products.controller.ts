/**
 * La funcion de un pipe es transformar y validar informacion(De parametros enviados por la url)
 * Los parametros enviados por la url SIEMPRE llegan como strings(Params y Query), dentro del body(json) si se respetan los tipos
 * Por ejemplo: Los pipes me sirven para validar si lo que se esta enviando como parametro NO ES UN NUMERO
 */

import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  ParseIntPipe,              //Se importa el pipe
} from '@nestjs/common';

import { Response } from 'express';

import { ProductsService } from './../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  /**
   * Si el pipe no puede transformar el string a un numero(Si se trata de un texto) nos enviara el error indicado
   */
  getOne(@Param('productId', ParseIntPipe) productId: number) { //Pasamos el pipe como segundo parametro al decorador.
    // response.status(200).send({
    //   message: `product ${productId}`,
    // });
    return this.productsService.findOne(productId); //Lo malo del parsing con el signo "+" es que no podemos parsear letras a numeros
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}