import { Controller, Get, Query, Body, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrder(@Query('orderId') orderId: string) {
    return `Order ${orderId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Creating order',
      payload,
    };
  }
}
