import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UserService {
	constructor(private db: DbService) { }

	async findByEmail(email: string) {
		const user = await this.db.user.findFirst({ where: { email } })
		return user
	}
	
	async create(email: string, hash: string, salt: string) {
		const user = await this.db.user.create({ data: { email, hash, salt } })
		return user
	}

}
