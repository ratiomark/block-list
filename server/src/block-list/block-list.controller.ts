import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { BlockListService } from './block-list.service';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AddBlockItemDto, BlockItemDto, BlockListDto, BlockListQueryDto } from './dto';
import { GetSessionInfoDto } from 'src/auth/dto';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('block-list')
@UseGuards(AuthGuard)
export class BlockListController {
	constructor(private blockListService: BlockListService) { }

	@Get()
	@ApiOkResponse({ type: BlockListDto })
	getBlockList(
		@Query() query: BlockListQueryDto,
		@SessionInfo() session: GetSessionInfoDto
	): Promise<BlockListDto> {
		return this.blockListService.getBlockList(session.id, query)
	}


	@Post('item')
	@ApiCreatedResponse({ type: BlockItemDto })
	async addBlockListItem(
		@Body() body: AddBlockItemDto,
		@SessionInfo() session: GetSessionInfoDto
	): Promise<BlockItemDto> {
		return await this.blockListService.addBlockListItem(body, session.id)
	}

	@Delete('item/:id')
	@ApiOkResponse({ type: BlockItemDto })
	async deleteBlockItem(
		// ParseIntPipe преобразует строку в число
		@Param('id', ParseIntPipe) id: number,
		@SessionInfo() session: GetSessionInfoDto
	): Promise<BlockItemDto> {
		return await this.blockListService.deleteBlockListItem(id, session.id)
	}
}
