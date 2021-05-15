import { Injectable, NotFoundException } from '@nestjs/common';  //Se importa la excepcion

import { Product } from './../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 122,
      image: '',
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }
/**
 * throw lanza explicitamente un error en la TERMINAL pero no nos da informacion sobre el codigo de error ni en la terminal ni en postman.
 * Nestjs nos ayuda a manejar los erroes con un kit de excepciones. Por ejemplo, NotFoundExcepcion se usa cuando lo solicitado no existe
 * NotFoundException arroja un codigo de estado 404 y el mensaje personalizado en el json
 */
  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {                                                   //OJO: BUENA PRACTICA, TECNICA ERROR FIRST. Primero manejar el error
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = {
      ...product,
      ...payload,
    };
    return this.products[index];
  }

  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }
}