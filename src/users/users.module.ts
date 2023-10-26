import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { DbModule } from 'src/db/db.module';

@Module({
	controllers: [],
	providers: [UserService],
	imports: [DbModule],
	exports: [UserService]
})
export class UserModule { }
