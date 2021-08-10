import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decoration/user.decorator';
import { UserDto } from 'src/common/dto/user.dto';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @ApiResponse({
    type: UserDto,
    status: 200,
    description: '성공',
  })
  @ApiOperation({ summary: '조회' })
  @Get()
  getUsers(@User() user) {
    return user;
  }

  @ApiOperation({ summary: '생성' })
  @Post()
  createUsers(@Body() data: JoinRequestDto) {
    this.usersService.postUsers(data);
  }
  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn(@User() user) {}

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logout() {}
}
