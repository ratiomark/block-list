import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional } from "class-validator";

export class AccountDto {

	@ApiProperty()
	id: number

	@ApiProperty()
	ownerId: number

	@ApiProperty()
	@IsBoolean()
	isBlockingEnabled: boolean
}


export class PatchAccountDto {
	@ApiProperty()
	@IsBoolean()
	@IsOptional() // нужно использовать декоратор, потому что как в случае с возвращаемыми ответами, nest не может использовать тип TS напрямую, а тут не может понять, что это опциональное поле
	isBlockingEnabled?: boolean
}