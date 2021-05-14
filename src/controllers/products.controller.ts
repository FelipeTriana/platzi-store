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

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get('filter')
  @HttpCode(HttpStatus.ACCEPTED)                 //Cuando hagamos la solicitud en postman el statuscode deberia ser un 202
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  getOne(@Res() response: Response, @Param('productId') productId: string) {  //OJO: AL DECLARAR UN RESPONSE EL RETURN DEJA DE FUNCIONAR
    response.status(200).send({                                               //LE ESTAMOS DICIENDO A NESTJS QUE NOSOTROS NOS 
                                                                              //ENCARGAREMOS DE LA RESPUESTA
      message: `product ${productId}`,
    });
  }

  @Post()
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
