import { Injectable } from '@nestjs/common';
import { pbkdf2Sync, randomBytes } from 'crypto';

@Injectable()
export class PasswordService {

	getSalt() {
		// возращает рандомные байты, которые будут превращаться в строку
		return randomBytes(16).toString('hex');
	}

	getHash(password: string, salt: string) {
		// пароль, соль, количество итераций, длина хэша, алгоритм хэширования
		return pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);
	}
}
