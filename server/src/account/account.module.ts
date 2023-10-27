import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [AccountController],
	providers: [AccountService],
	imports: [DbModule],
	exports: [AccountService]
})
export class AccountModule {}
