import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { DbModule } from 'src/db/db.module';
import { AccountModule } from 'src/account/account.module';
import { BlockListModule } from 'src/block-list/block-list.module';

@Module({
	controllers: [],
	providers: [UserService],
	imports: [DbModule, AccountModule, BlockListModule],
	exports: [UserService]
})
export class UserModule { }
