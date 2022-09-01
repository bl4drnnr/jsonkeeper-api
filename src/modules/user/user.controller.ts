import { Body, Controller, Post } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";

@Controller('user')
export class UserController {
  @Post('login')
  login(@Body() payload: LoginDto) {
    //
  }

  @Post('register')
  register(@Body() payload: RegisterDto) {
    //
  }

  @Post('logout')
  logout() {

  }
}
