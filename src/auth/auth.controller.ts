import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetSessionInfoDto, SignInDto, SignUpDto } from './dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CookieService } from './cookie.service';
import { Response } from 'express';
import { AuthGuard } from './auth.guard';
import { SessionInfo } from './session-info.decorator';

@Controller('auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private cookiesService: CookieService,
	) { }

	@Post('sign-up')
	@ApiCreatedResponse() // нужно явно указывать возвращаемое занчение, т.к. не может получить его из типа
	async signUp(
		@Body() body: SignUpDto,
		@Res({ passthrough: true }) res: Response //получаю объект ответа, чтобы в него записать куку. passthrough - по умолчанию если достать объект ответа, то nest полностью передает контроль мне, то есть отключаются все guards, filters и т.д.
	) {
		const { accessToken } = await this.authService.signUp(body.email, body.password)
		this.cookiesService.setToken(res, accessToken)
	}

	@Post('sign-in')
	@ApiOkResponse()
	@HttpCode(HttpStatus.OK)
	async signIn(
		@Body() body: SignInDto,
		@Res({ passthrough: true }) res: Response
	) {
		const { accessToken } = await this.authService.signIn(body.email, body.password)
		this.cookiesService.setToken(res, accessToken)
	}

	@Post('sign-out')
	@ApiOkResponse()
	@HttpCode(HttpStatus.OK)
	@UseGuards(AuthGuard)
	signOut(
		@Res({ passthrough: true }) res: Response
	) {
		this.cookiesService.removeToken(res)
	}


	@Get('session')
	@ApiOkResponse({ type: GetSessionInfoDto })
	@UseGuards(AuthGuard)
	getSessionInfo(@SessionInfo() session : GetSessionInfoDto) {
		return session
	}
}
