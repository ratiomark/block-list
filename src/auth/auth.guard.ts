import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs'
import { Request } from 'express'
import { CookieService } from './cookie.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthGuard implements CanActivate {

	// за счет того что JwtService создавался с опцией global: true, он доступен во всех модулях, без импорта
	constructor(private jwtService: JwtService) { }

	canActivate(
		context: ExecutionContext,
	): boolean | Promise<boolean> | Observable<boolean> {
		const req = context.switchToHttp().getRequest() as Request
		// получаю токен
		const token = req.cookies[CookieService.tokenKey]
		if (!token) {
			throw new UnauthorizedException()
		}

		try {
			const sessionInfo = this.jwtService.verify(token, { secret: process.env.JWT_SECRET })
			req['session'] = sessionInfo

		} catch (error) {
			throw new UnauthorizedException()
		}
		
		return true
	}
}
