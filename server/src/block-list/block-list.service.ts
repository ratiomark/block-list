import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { AddBlockItemDto, BlockListQueryDto } from './dto';
// async/await Не всегда необходимо: Если вы просто возвращаете промис и не делаете никаких дополнительных действий после его завершения, то нет необходимости в async / await.Например, в вашем методе create в сервисе async / await не дает реальных преимуществ.
@Injectable()
export class BlockListService {

	constructor(private db: DbService) { }

	// буду использовать в момент создания нового пользователя
	create(userId: number) {
		return this.db.blockList.create({ data: { ownerId: userId } })
	}


	getBlockList(userId: number, query: BlockListQueryDto) {
		return this.db.blockList.findUniqueOrThrow({
			where: { ownerId: userId },
			// добавляем поле items в ответ, по убыванию даты и с фильтрацией строк, если будет передан query.q, не смотрит на регистр
			// 		include: {
			include: {
				items: {
					where: { data: { contains: query.q, mode: 'insensitive' } },
					orderBy: { createdAt: 'desc' },
				},
			},
		})
	}


	async addBlockListItem(data: AddBlockItemDto, userId: number) {
		const blockList = await this.db.blockList.findUniqueOrThrow({ where: { ownerId: userId } })
		const itemCheck = await this.db.blockItem.findFirst({ where: { data: data.data, blockListId: blockList.id } })
		if (itemCheck) {
			return itemCheck
		}
		const item = await this.db.blockItem.create({ data: { blockListId: blockList.id, ...data } })
		return item
	}


	async deleteBlockListItem(listItemId: number, userId: number) {
		const blockList = await this.db.blockList.findUniqueOrThrow({ where: { ownerId: userId } })
		const itemDeleted = await this.db.blockItem.delete({ where: { id: listItemId, blockListId: blockList.id } })
		return itemDeleted
	}

}
