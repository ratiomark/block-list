import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { DbModule } from 'src/db/db.module';
import { AccountModule } from 'src/account/account.module';

@Module({
	controllers: [],
	providers: [UserService],
	imports: [DbModule, AccountModule],
	exports: [UserService]
})
export class UserModule { }
