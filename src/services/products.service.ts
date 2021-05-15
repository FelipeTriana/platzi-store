import { Injectable } from '@nestjs/common';

import { Product } from './../entities/product.entity';  //Se importa la entidad con el esquema de un producto
/**
 *Este decorador asi como el @Controller identifica controladores nos sirve para identificar un servicio
  y nos indica que usaremos el patron de inyeccion de dependencias
 */
@Injectable()                         
export class ProductsService {
  private counterId = 1;             //Id autoincrementable que simula el asignado por una base de datos
  private products: Product[] = [    //Se usa la instancia de la entidad Product para definir el tipo de los datos del array
    {
      id: 1,                         //Si no definimos alguno de los atributos de la entidad inmediatamente sale un error
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

  findOne(id: number) {
    return this.products.find((item) => item.id === id); //Recordar que asi se busca en un array con base en un parametro
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,                                //El spread operator en este caso se usa para concatenar el id autoincrementable
      ...payload,                                        //de la funcion create y el body enviado desde postman
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,             //Se realiza un merge con el spread operator entre el json del producto y el json del body enviado para la
        ...payload,             //modificacion. 
      };
      return this.products[index];
    }
    return null;
  }
}

