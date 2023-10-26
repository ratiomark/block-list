import { Injectable, } from '@nestjs/common';
import { PatchAccountDto } from './dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class AccountService {

	constructor(private db: DbService) { }

	async create(userId: number) {
		console.log('Создаю аккаунт')
		await this.db.account.create({
			data: {
				ownerId: userId,
				isBlockingEnabled: false
			}
		})
	}

	async getAccount(userId: number) {
		return await this.db.account.findFirstOrThrow({ where: { ownerId: userId } }) // выброс ошибки если не найдет аккаунт
	}

	async patchAccount(userId: number, patch: PatchAccountDto) {
		return await this.db.account.update({
			where: { ownerId: userId },
			data: { ...patch }
		})
	}

}
