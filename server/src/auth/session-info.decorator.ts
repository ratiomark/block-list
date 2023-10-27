import { ExecutionContext, createParamDecorator } from "@nestjs/common";


export const SessionInfo = createParamDecorator((_, ctx: ExecutionContext) => {
	// достаю поле записанное в auth.guard в случае успешного чтения токена из куки
	return ctx.switchToHttp().getRequest().session
})