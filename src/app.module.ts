import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';

@Module({
	imports: [DbModule, AuthModule, AccountModule],
	controllers: [AppController],
	providers: [AppService,],
})
export class AppModule { }
