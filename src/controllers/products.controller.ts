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
} from '@nestjs/common';

import { Response } from 'express';

import { ProductsService } from './../services/products.service'; //Importamos el servicio

@Controller('products')
export class ProductsController {
  /**
   * En el constructor se realiza la inyeccion de dependencias, dejando el servicio como un atributo de la clase
   * @param productsService 
   */
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
  getOne(@Param('productId') productId: string) {
    // response.status(200).send({
    //   message: `product ${productId}`,
    // });
    return this.productsService.findOne(+productId);  //Se usa el + en productId para hacer el parsing de string al tipo de parametro
  }                                                   //declarado en la funcion

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
    return this.productsService.update(+id, payload);   //Se usa el + en id para hacer el parsing de string al tipo de parametro
  }                                                     //de la funcion

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
