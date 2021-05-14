import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { OrdersController } from './controllers/orders.controller';
import { CustomersController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, CustomersController, OrdersController, UsersController],
  providers: [AppService],
})
export class AppModule {}
