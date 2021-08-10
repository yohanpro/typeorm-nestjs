import { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';

export const Token = createParamDecorator((_, ctx: ExecutionContext) => {
  const response = ctx.switchToHttp().getResponse();
  return response.locales.jwt;
});
