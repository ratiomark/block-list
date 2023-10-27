import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
// OnModuleInit заставляет имплементировать метод onModuleInit
@Injectable()
export class DbService extends PrismaClient implements OnModuleInit {
	
	async onModuleInit() {
		await this.$connect()
	}
	
}
