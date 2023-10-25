import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger'
import { PrismaClient } from '@prisma/client/edge'
const prisma = new PrismaClient()

class HelloWorldDto {
	@ApiProperty()
	message: string
}

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		// private db
	) { }

	@Get()
	@ApiOkResponse({ // декоратор помогает описать ответ. нужно чтобы сказать что это промис 
		type: HelloWorldDto,
	})
	async getHello(): Promise<HelloWorldDto> {
		const users = await prisma.user.findMany()
		console.log(users)
		// return this.appService.getHello()
		return { message: this.appService.getHello() }
	}
}
