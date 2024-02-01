import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { Auth, GetUser, RawHeaders, RoleProtected } from './decorators';
import { User } from './entities/user.entity';
import { UserRoleGuard } from './guards/user-role/user-role.guard';
import { ValidRoles } from './interfaces';


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('check-status')
  @Auth()
  checkAuthStatus(
    @GetUser() user: User
  ) {
    return this.authService.checkAuthStatus(user);
  }

  // previous steps to get Auth() decorator
  // @Get('private')
  // @UseGuards(AuthGuard())
  // testingRoute(
  //   @Req() req: Express.Request,
  //   @GetUser() user: User,
  //   @GetUser(['fullName']) userEmail: string,
  //   @RawHeaders() rawHeaders: string[]
  // ) {
  //   return { ok: true, message: "private", user, userEmail, rawHeaders }
  // }

  // @SetMetadata('roles', ['admin', 'super-user'])
  // @Get('private2')
  // @RoleProtected(ValidRoles.admin)
  // @UseGuards(AuthGuard(), UserRoleGuard)
  // privateRoute2(
  //   @GetUser() user: User,
  // ) {
  //   return { ok: true, user }
  // }


  // @Get('private3')
  // @Auth(ValidRoles.superUser)
  // privateRoute3(
  //   @GetUser() user: User,
  // ) {
  //   return { ok: true, user }
  // }

}
