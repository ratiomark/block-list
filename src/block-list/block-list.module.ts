import { Module } from '@nestjs/common';
import { BlockListService } from './block-list.service';
import { BlockListController } from './block-list.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [BlockListController],
	providers: [BlockListService],
	imports: [DbModule],
	exports:[ BlockListService]
})
export class BlockListModule {}
