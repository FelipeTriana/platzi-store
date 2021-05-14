import { Controller, Get, Post, Body, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUser(@Query('userId') userId: string) {
    return `User ${userId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Creating new user',
      payload,
    };
  }
}
