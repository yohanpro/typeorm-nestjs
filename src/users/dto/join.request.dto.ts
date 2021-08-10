import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'yohan@yohanpro.com',
    description: '이메일',
    required: true,
  })
  public email: string;
  @ApiProperty({
    example: '요한요한',
    description: '별칭',
    required: false,
  })
  public nickname: string;

  @ApiProperty({
    example: 'mySecret',
    description: '비밀번호',
    required: true,
  })
  public password: string;
}
