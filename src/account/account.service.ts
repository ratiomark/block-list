import { Injectable, } from '@nestjs/common';
import { AccountDto, PatchAccountDto } from './dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class AccountService {

	constructor(private db: DbService) { }

	async create(userId: number) {
		this.db.account.create({
			data: {
				ownerId: userId,
				isBlockingEnabled: false
			}
		})
	}

	async getAccount(userId: number) {
		return this.db.account.findFirstOrThrow({ where: { ownerId: userId } }) // выброс ошибки если не найдет аккаунт
	}

	async patchAccount(userId: number, patch: PatchAccountDto) {
		return this.db.account.update({
			where: { ownerId: userId },
			data: { ...patch }
		})
	}

}
