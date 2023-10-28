import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common'
import { AccountService } from './account.service'
import { ApiOkResponse } from '@nestjs/swagger'
import { AccountDto, PatchAccountDto } from './dto'
import { AuthGuard } from 'src/auth/auth.guard'
import { SessionInfo } from 'src/auth/session-info.decorator'
import { GetSessionInfoDto } from 'src/auth/dto'

@Controller('account')
@UseGuards(AuthGuard) // поскольку гвард записывает инфу в поле session, то ты сможем использовать его, чтобы получить userId
export class AccountController {
	constructor(private accountService: AccountService) {}

	@Get()
	@ApiOkResponse({ type: AccountDto })
	async getAccount(
		@SessionInfo() session: GetSessionInfoDto,
	): Promise<AccountDto> {
		return await this.accountService.getAccount(session.id)
	}

	@Patch()
	@ApiOkResponse({ type: PatchAccountDto })
	async patch(
		@Body() body: PatchAccountDto,
		@SessionInfo() session: GetSessionInfoDto,
	): Promise<PatchAccountDto> {
		return await this.accountService.patchAccount(session.id, body)
	}
}
