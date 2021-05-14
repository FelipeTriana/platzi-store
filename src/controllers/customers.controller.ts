import { Controller, Get, Post, Query, Param, Body } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomer(@Query('customerId') customerId: string) {
    return `Customer ${customerId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Creating customer',
      payload,
    };
  }
}
