import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UserService {
	constructor(
		private db: DbService,
		private accountService: AccountService,
	) { }



	async findByEmail(email: string) {
		const user = await this.db.user.findFirst({ where: { email } })
		return user
	}

	async create(email: string, hash: string, salt: string) {
		// Использование транзакции поможет гарантировать, что либо обе операции успешно завершены, либо ни одна из них не применяется.
		// const result = await this.db.$transaction(async () => {
		// 	const user = await this.db.user.create({ data: { email, hash, salt } })
		// 	await this.accountService.create(user.id)
		// 	return user
		// })
		// return result
		const user = await this.db.user.create({ data: { email, hash, salt } })
		await this.accountService.create(user.id)
		return user
	}

}
